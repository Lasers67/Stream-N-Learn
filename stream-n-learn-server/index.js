const express = require('express')
var bodyParser = require("body-parser")
const CosmosClient = require('@azure/cosmos').CosmosClient
const url = require('url')
const posts = require('./posts')

const config = require('./config')

const endpoint = config.endpoint
const key = config.key

const databaseId = config.database.id
const containerId = config.container.id
const partitionKey = { kind: 'Hash', paths: ['/Country'] }

const client = new CosmosClient({ endpoint, key })

const app = express()
const port = 5000

/* Socket */
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const socketPort = 5002;
server.listen(port, () => console.log(`Socket server is running on port ${port}`));
var connections = [];
let broadcaster;

io.sockets.on("error", e => console.log(e));
io.sockets.on("connection", socket => {
  connections.push(socket);
  console.log('%s sockets connected!', connections.length);

  socket.on("broadcaster", () => {
    console.log("broadcaster");
    broadcaster = socket.id;
    socket.broadcast.emit("broadcaster");
  });

  socket.on("watcher", () => {
    console.log("watcher");
    socket.to(broadcaster).emit("watcher", socket.id);
  });

  socket.on("offer", (id, message) => {
    console.log("offer");
    socket.to(id).emit("offer", socket.id, message);
  });

  socket.on("answer", (id, message) => {
    console.log("answer");
    socket.to(id).emit("answer", socket.id, message);
  });

  socket.on("candidate", (id, message) => {
    console.log("candidate");
    socket.to(id).emit("candidate", socket.id, message);
  });

  socket.on("disconnect", () => {
    connections.splice(connections.indexOf(socket.id), 1);
    console.log("Disconnected: %s sockets connected!", connections.length);
    socket.to(broadcaster).emit("disconnectPeer", socket.id);
  });
});

app.use(bodyParser.json({ limit: "30MB", extended: true }))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/getList', (req, res) => {
  var list = ["item1", "item2", "item3"];
  res.json(list);
  console.log('Sent list of items');
});

app.get('/api/getCourseList', (req, res) => {
  var list = ["music", "programing", "dance", "cooking", "robotics"];
  res.json(list);
  console.log('Sent list of items');
});

/*
Get the list of all posts

returns of json array of items - 
[
  {
    "title": String,
    "description":
    "duration": Integer denoting in hours
    "cost": float denoting amount in rs.
    "creator": username of creator
    "students": Array of String(username)
    "tags": Array of String
    "start_time": string respresenting time in json ex. "2020-05-24T09:23:03.351Z"
  }
]
*/

app.get('/api/getAllPosts', (req, res) => {
  posts.getAllPosts().then((results) => {
    res.json(results);
  });
});

/**
 * User to create his post/ course.
 * req.body should be a JSON object:
 * {
 *  "title": String,
    "description": String
    "duration": Integer denoting in hours
    "cost": float denoting amount in rs.
    "creator": username of creator
    "start_time": string respresenting time in json ex. "2020-05-24T09:23:03.351Z"
 * }
 */

app.post('/api/createPost', (req, res, next) => {
  req.body["students"] = [];
  posts.createPost(req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    })
})


/*
Request of form- /api/joinSession?username=username&id=courseid
*/

app.get('/api/joinSession', (req, res) => {
  console.log(req.query);
  posts.joinPost(req.query.username, req.query.postid).then((results) => {
    res.json(results);
  });
});


/*
Request of form- /api/joinSession?username=username&id=courseid
*/

app.get('/api/getAllEnroledPosts', (req, res) => {
  // console.log(req.query);
  posts.getEnrolledPosts("lakshya").then((results) => {
    res.json(results);
  });
});


// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  })
  console.log(`Created database:\n${database.id}\n`)
}

/**
 * Read the database definition
 */
async function readDatabase() {
  const { resource: databaseDefinition } = await client
    .database(databaseId)
    .read()
  console.log(`Reading database:\n${databaseDefinition.id}\n`)
}

/**
 * Create the container if it does not exist
 */
async function createContainer() {
  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    )
  console.log(`Created container:\n${config.container.id}\n`)
}

/**
 * Read the container definition
 */
async function readContainer() {
  const { resource: containerDefinition } = await client
    .database(databaseId)
    .container(containerId)
    .read()
  console.log(`Reading container:\n${containerDefinition.id}\n`)
}

/**
 * Scale a container
 * You can scale the throughput (RU/s) of your container up and down to meet the needs of the workload. Learn more: https://aka.ms/cosmos-request-units
 */
async function scaleContainer() {
  const { resource: containerDefinition } = await client
    .database(databaseId)
    .container(containerId)
    .read()
  const { resources: offers } = await client.offers.readAll().fetchAll();

  const newRups = 500;
  for (var offer of offers) {
    if (containerDefinition._rid !== offer.offerResourceId) {
      continue;
    }
    offer.content.offerThroughput = newRups;
    const offerToReplace = client.offer(offer.id);
    await offerToReplace.replace(offer);
    console.log(`Updated offer to ${newRups} RU/s\n`);
    break;
  }
}

/**
 * Create family item if it does not exist
 */
async function createFamilyItem(itemBody) {
  const { item } = await client
    .database(databaseId)
    .container(containerId)
    .items.upsert(itemBody)
  console.log(`Created family item with id:\n${itemBody.id}\n`)
}

/**
 * Query the container using SQL
 */
async function queryContainer() {
  console.log(`Querying container:\n${config.container.id}`)

  // query to return all children in a family
  // Including the partition key value of lastName in the WHERE filter results in a more efficient query
  const querySpec = {
    query: 'SELECT VALUE r.children FROM root r WHERE r.lastName = @lastName',
    parameters: [
      {
        name: '@lastName',
        value: 'Andersen'
      }
    ]
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  for (var queryResult of results) {
    let resultString = JSON.stringify(queryResult)
    console.log(`\tQuery returned ${resultString}\n`)
  }
}

/**
 * Replace the item by ID.
 */
async function replaceFamilyItem(itemBody) {
  console.log(`Replacing item:\n${itemBody.id}\n`)
  // Change property 'grade'
  itemBody.children[0].grade = 6
  const { item } = await client
    .database(databaseId)
    .container(containerId)
    .item(itemBody.id, itemBody.Country)
    .replace(itemBody)
}

/**
 * Delete the item by ID.
 */
async function deleteFamilyItem(itemBody) {
  await client
    .database(databaseId)
    .container(containerId)
    .item(itemBody.id, itemBody.Country)
    .delete(itemBody)
  console.log(`Deleted item:\n${itemBody.id}\n`)
}

/**
 * Cleanup the database and collection on completion
 */
async function cleanup() {
  await client.database(databaseId).delete()
}

/**
 * Exit the app with a prompt
 * @param {string} message - The message to display
 */
function exit(message) {
  console.log(message)
  console.log('Press any key to exit')
  // process.stdin.setRawMode(true)
  // process.stdin.resume()
  // process.stdin.on('data', process.exit.bind(process, 0))
}

createDatabase()
  .then(() => readDatabase())
  .then(() => createContainer())
  .then(() => readContainer())
  .then(() => scaleContainer())
  // .then(() => createFamilyItem(config.items.Andersen))
  // .then(() => createFamilyItem(config.items.Wakefield))
  .then(() => queryContainer())
  // .then(() => replaceFamilyItem(config.items.Andersen))
  .then(() => queryContainer())
  // .then(() => deleteFamilyItem(config.items.Andersen))
  .then(() => {
    exit(`Completed successfully`)
  })
  .catch(error => {
    exit(`Completed with error ${JSON.stringify(error)}`)
  })