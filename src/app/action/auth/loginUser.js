"use server";
import { collectionObj, dbConnect } from "@/lib/dbConnect";

export const loginUser = async (userData) => {
  const { email, password } = userData;
  if (!email || !password) return null;
  const userCollection = dbConnect(collectionObj.testUser);
  const user = await userCollection.findOne({ email });
  const isPasswordOk = user?.password == password;
  if (!isPasswordOk) return null;
  if (!user) return null;
  return user;
};
