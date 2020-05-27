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
    //   for (var queryResult of results) {
    //     let resultString = JSON.stringify(queryResult)
    //     console.log(`\tQuery returned ${resultString}\n`)
    //   }
      return results;
}

async function joinPost(username, sessionId) {
  const querySpec = {
    query: 'SELECT * FROM posts WHERE posts.id="'+sessionId+'"',
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


module.exports = {
    getAllPosts,
    joinPost
}