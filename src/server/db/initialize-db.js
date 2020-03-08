import { initialLoad } from "./initial-load";
import { connectDB } from "./connect-db";

async function initializeDB() {
  let db = await connectDB();
  let user = await db.collection("users").findOne({ id: "u0" });
  if (!user) {
    for (let collectionName in initialLoad) {
      let collection = db.collection(collectionName);
      await collection.insertMany(initialLoad[collectionName]);
    }
  }
}

initializeDB();
