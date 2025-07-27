"use server";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
  if(!email || !password) return;
  const userCollection = dbConnect(collectionObj.testUser);
  const user = await userCollection.findOne({ email });
  if (user) return;
  const result = await userCollection.insertOne(userData);
  return result;
};
