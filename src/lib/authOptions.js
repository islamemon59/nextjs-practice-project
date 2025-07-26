import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { collectionObj, dbConnect } from "./dbConnect";

export const authOptions = {
  providers: [
    CredentialsProvider({

      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        console.log(credentials);
        const userCollection = dbConnect(collectionObj.testUser);
        const email = credentials.email;

        const user = await userCollection.findOne({email})

        if (user) {
          return user;
        } else {
          return null
        }
      },
    }),
  ],
  pages: {
    signIn: "/login"
  }
};
