import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const session = await getServerSession();
  const serviceCollection = dbConnect(collectionObj.serviceItem);
  const result = await serviceCollection.findOne(query);

  const isUserOk = result?.email == session?.user?.email;

  if (isUserOk) {
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "Forbidden Action" }, { status: 403 });
  }
};

export const PATCH = async (req, { params }) => {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const session = await getServerSession();
  const serviceCollection = dbConnect(collectionObj.serviceItem);

  const getUser = await serviceCollection.findOne(query);

  const isUserOk = getUser.user_email == session?.user?.email;

  if (isUserOk) {
    const updateData = await req.json();
    const option = {
        upsert : true
    }
    const updatedDoc = {
      $set: {
        ...updateData,
      },
    };

    const result = await serviceCollection.updateOne(query, updatedDoc, option);
    return NextResponse.json(result);
  } else {
    return NextResponse.json({ message: "Forbidden Access" }, { status: 403 });
  }
};
