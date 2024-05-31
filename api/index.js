const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = 5000

app.use(cors())
app.use(express.json());

const uri = "mongodb+srv://italimbd:italimbd@cluster0.wgjttug.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });

    const userDB = client.db('userDB');
    const userCollection = userDB.collection('userCollection');

    // create a document to be inserted
    const doc = { name: "Red", town: "kanto" };
    const result = await userCollection.insertOne(doc);


    console.log("db connection established");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// app.get('/', (req, res) => { 
//   res.send("Route is working");
// });

app.listen(port, (req, res) => { 
  console.log("App is listening on port:", port);
});

// italimbd