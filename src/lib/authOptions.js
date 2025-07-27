import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
import { collectionObj, dbConnect } from "./dbConnect";
import GoogleProvider from "next-auth/providers/google";
import { loginUser } from "@/app/action/auth/loginUser";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Username", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await loginUser(credentials);

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async signIn({ user, account }) {
      console.log(user, account);
      const { name, email, image } = user;
      const { provider, providerAccountId } = account;
      const userCollection = dbConnect(collectionObj.testUser);

      const existingUser = await userCollection.findOne({ providerAccountId });

      if (!existingUser) {
        await userCollection.insertOne({
          name,
          email,
          image,
          provider,
          providerAccountId,
        });
      }

      return true;
    },
  },
};
