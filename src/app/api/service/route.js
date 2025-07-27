import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession();
  console.log("session data", session);
  if (session) {
    const user_email = session?.user?.email;
    const serviceCollection = dbConnect(collectionObj.serviceItem);
    const result = await serviceCollection.find({ user_email }).toArray();
    return NextResponse.json(result);
  }
  return NextResponse.json({});
};

export const POST = async (req) => {
  const serviceData = await req.json();
  const serviceCollection = dbConnect(collectionObj.serviceItem);
  const result = await serviceCollection.insertOne(serviceData);
  return NextResponse.json(result);
};
