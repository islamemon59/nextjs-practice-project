import { MongoClient, ServerApiVersion } from "mongodb"

export const collectionObj = {
    testUser : "testUser",
    serviceItem : "serviceItems"
}

export const dbConnect = (collectionName) => {
  const uri = process.env.NEXT_PUBLIC_MONGODB_URI;
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  return client.db("carDoctorDB").collection(collectionName)
};
