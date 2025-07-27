import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const serviceData = await req.json();
    const serviceCollection = dbConnect(collectionObj.serviceItem);
    const result = await serviceCollection.insertOne(serviceData);
    return NextResponse.json(result);
}