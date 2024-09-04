const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://Dwarakesh2002:dwarakesh2002@cluster0.sastj.mongodb.net/';               // changed with the our url 
const client = new MongoClient(url);

// Database Name
const dbName = 'sample_airbnb.listingsAndReviews';                                                  // change from the mongo db dashboad

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);

  const data = await db.collection('movies').find({}).toArray();                                           // changed to the movies
 
  console.log(data)                                                                                  // changed to the movies

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());