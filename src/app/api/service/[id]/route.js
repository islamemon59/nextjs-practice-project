import { collectionObj, dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  const { id } = await params;
  const serviceCollection = dbConnect(collectionObj.serviceItem);
  const result = await serviceCollection.findOne({ _id: new ObjectId(id) });
  return NextResponse.json(result);
};

export const DELETE = async (req, { params }) => {
  const { id } = await params;
  const session = await getServerSession();
  const serviceCollection = dbConnect(collectionObj.serviceItem);
  const user = await serviceCollection.findOne({ _id: new ObjectId(id) });
  const isOwnerOk = session.user.email == user.user_email;

  if (!isOwnerOk)
    return NextResponse.json(
      { success: false, message: "Forbidden Action" },
      { status: 403 }
    );
  const result = await serviceCollection.deleteOne({ _id: new ObjectId(id) });
  revalidatePath("/myService");
  return NextResponse.json(result);
};
