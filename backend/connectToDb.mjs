
import {MongoClient} from 'mongodb'

const uri =
  "mongodb+srv://thomas:Hejmeddig123@cluster0.jewutu1.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error(err);
  }
}

export { client, connectToMongoDB };
