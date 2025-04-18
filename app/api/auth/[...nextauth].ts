import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { Client } from "pg";
require('dotenv').config();

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

client.connect();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const res = await client.query(
          "SELECT * FROM users WHERE email = $1",
          [credentials.email]
        );

        const user = res.rows[0];

        if (user && user.password === credentials.password) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
