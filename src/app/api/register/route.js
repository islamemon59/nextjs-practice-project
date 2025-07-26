import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { NextResponse } from "next/server";

export const POST = async (req) => {
    const userData = await req.json();
    const email = userData.email;
    const userCollection = dbConnect(collectionObj.testUser);
    const isUser = await userCollection.findOne({email});

    if(isUser){
        return NextResponse.json({message: "User already exists"}, {status: 409})
    }

    const result = await userCollection.insertOne(userData)
    return NextResponse.json(result)
}