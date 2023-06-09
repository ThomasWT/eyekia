
import {MongoClient} from 'mongodb'

import dotenv from 'dotenv';
dotenv.config({path:'./.env'});

const uri =
  `mongodb+srv://testuser:${process.env.DBPASSWORD}@cluster0.jewutu1.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
  } catch (err) {
    console.error(err);
  }
}

export { client, connectToMongoDB };
