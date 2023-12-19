import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import FacebookProvider from "next-auth/providers/facebook";

console.log(process.env.GOOGLE_CLIENT_ID, "red");
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID || "",
      clientSecret: process.env.GITHUB_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACCEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACCEBOOK_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.SECRET,
};

export default NextAuth(authOptions);
