import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

import { signInSchema } from "@/lib/zod"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers:
    [
      Credentials({
        credentials: {
          email: {},
          password: {},
        },
        authorize: async (credentials) => {
          let user = null
   
          // logic to verify if the user exists
          const { email, password } = await signInSchema.parseAsync(credentials)
          user = { email, password }
          // user = await getUserFromDb(email, password)
   
          if (!user) {
            // No user found, so this is their first attempt to login
            // meaning this is also the place you could do registration
            throw new Error("User not found.")
          }
   
          // return user object with their profile data
          return user
        },
      })
    ],
})