const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
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
    // await client.db("admin").command({ ping: 1 });
    console.log("db connection established");

    const productDB = client.db('productDB');
    const shoeCollection = productDB.collection('shoeCollection');

    const userDB = client.db('userDB');
    const userCollection = userDB.collection('userCollection');

    // create product post route
    app.post("/shoes", async (req, res) => {
      const shoeData = req.body;
      const result = await shoeCollection.insertOne(shoeData);
      res.send(result);
    })
    // get all products
    app.get("/shoes", async (req, res) => {
      const shoeData = shoeCollection.find({});
      const result = await shoeData.toArray()
      res.send(result);
    })
    // get single product
    app.get("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await shoeCollection.findOne({_id: new ObjectId(id)});
      res.send(result);
    })
    // update single product
    app.patch("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const updateData = req.body;
      const result = await shoeCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updateData }
      );
      res.send(result);
    }) 
    // delete single product
    app.delete("/shoes/:id", async (req, res) => {
      const id = req.params.id;
      const result = await shoeCollection.deleteOne(
        { _id: new ObjectId(id) },
      );
      res.send(result);
    })

    // create user
    app.post("/user", async (req, res) => {
      const userData = req.body;
      const isUserExist = await userCollection.findOne({ email: userData?.email });
      if (isUserExist) { 
        return res.send("Login successful")
      }
      const result = await userCollection.insertOne(userData);
      res.send(result);
    })

    // get user by id
    app.get("/user/get/:id", async (req, res) => {
      const id = req.params.id;

      const result = await userCollection.findOne({_id: new ObjectId(id)})
      res.send(result);
    })
    // get user
    app.get("/user/:email", async (req, res) => {
      const email = req.params.email;
      // console.log(email);
      const result = await userCollection.findOne({email})
      res.send(result);
    })
    
  } catch (err) { 
    console.log(err)
  }

}
run().catch(console.dir);

app.get('/', (req, res) => { 
  res.send("Route is working");
});

app.listen(port, (req, res) => { 
  console.log("App is listening on port:", port);
});

// mongodb Account email: italimbdb@gmail.com
// italimbd