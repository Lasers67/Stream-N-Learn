const CosmosClient = require('@azure/cosmos').CosmosClient

const config = require('./config')

const endpoint = config.endpoint
const key = config.key


const databaseId = config.database.id
const containerId = "posts"

const client = new CosmosClient({ endpoint, key })

async function createDatabase() {
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  })
  console.log(`Created database:\n${database.id}\n`)
}
const partitionKey = { kind: 'Hash', paths: ['/Country'] }

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

createDatabase()
  .then(() => readDatabase())
  .then(() => createContainer())
  .then(() => readContainer())
  .then(() => {
    console.log(`Posts database setup complete successfully`)
  })
  .catch(error => {
    console.log(`Completed with error for posts ${JSON.stringify(error)}`)
  })


async function getAllPosts() {

  const querySpec = {
    query: 'SELECT * FROM posts',
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()

  var final = []
  for(var queryResult of results) {
    if(queryResult["creator"] != "vishal" && queryResult["students"].indexOf("vishal") == -1) {
      final.push(queryResult);
    }
  }
  //   for (var queryResult of results) {
  //     let resultString = JSON.stringify(queryResult)
  //     console.log(`\tQuery returned ${resultString}\n`)
  //   }
  return final;
}

async function createPost(body) {
  const newItem = {
    title: body.title,
    description: body.description,
    duration: body.duration,
    cost: body.cost,
    creator: body.creator,
    students: [],
    tags: body.tags,
    start_time: body.start_time
  };

  const { resource: createdItem } = await client.database(databaseId).container(containerId).items.create(newItem);
  console.log("New post created, id: ", createdItem.id, " title: ", createdItem.title);
  return "New post created";
}

async function getAllPostsFromTags(tags_arr) {

  const querySpec = {
    query: 'SELECT * FROM posts',
  }

  var results = [];

  const { resources: all_posts } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()

  all_posts.forEach(post => {
    for (var i = 0; i < tags_arr.length; i++) {
      if (post.tags.indexOf(tags_arr[i]) > -1) {
        results.push(post);
        break;
      }
    }
  });

  return results;
}

async function getMyPosts(username) {

  username = 'vishal';
  const querySpec = {
    query: 'SELECT * FROM posts WHERE posts.creator="' + username + '"',
  }

  const { resources: results } = await client
      .database(databaseId)
      .container(containerId)
      .items.query(querySpec)
      .fetchAll()
  return results;
}

async function getEnrolledPosts(username) {

  const querySpec = {
    query: 'SELECT users.courses FROM users WHERE users.username="' + username + '"',
  }
  console.log(querySpec);
  const { resources: results } = await client
    .database(databaseId)
    .container("users")
    .items.query(querySpec)
    .fetchAll()

  
  var q = '(';

  results[0]["courses"].forEach(element => {
    q +="'" + element + "', ";
  });
  q = q.substring(0, q.length - 2);
  q += ")";

  var querySpec1 = {
    query: 'SELECT * FROM posts WHERE posts.id IN ' + q,
  }
 
  const { resources: results_return } = await client
  .database(databaseId)
  .container(containerId)
  .items.query(querySpec1)
  .fetchAll()

  return results_return;
};

async function joinPost(username, sessionId) {
  const querySpec = {
    query: 'SELECT * FROM posts WHERE posts.id="' + sessionId + '"',
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  console.log(results);
  results[0]["students"].push(username);
  const { item } = await client
    .database(databaseId)
    .container(containerId)
    .item(sessionId).replace(results[0]);
  return "Subscribed to post.";
}

async function getPostInfo(postid) {
  const querySpec = {
    query: 'SELECT * FROM posts WHERE posts.id="' + postid + '"',
  }

  const { resources: results } = await client
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .fetchAll()
  return results;
}

module.exports = {
  getAllPosts,
  joinPost,
  createPost,
  getAllPostsFromTags,
  getEnrolledPosts,
  getMyPosts,
  getPostInfo
}