import NextAuth from 'next-auth'

const HOUR = 60 * 60

export const {
  handlers,
  signIn,
  signOut,
  auth,
  update
} = NextAuth({
  providers: [
  ],
  session: {
    strategy: 'jwt',
    maxAge: 24 * HOUR
  },
  pages: {
    signIn: '/signin' // Default: '/auth/signin'
  },
  callbacks: {
    signIn: async () => {
      return true
    },
    jwt: async ({ token, user }) => {
      return token
    },
    session: async ({ session, token }) => {
      return session
    },
    redirect: async ({ url, baseUrl }) => {
      if (url.startsWith('/')) return `${baseUrl}${url}`
      if (url) {
        const { search, origin } = new URL(url)
        const callbackUrl = new URLSearchParams(search).get('callbackUrl')
        if (callbackUrl)
          return callbackUrl.startsWith('/')
            ? `${baseUrl}${callbackUrl}`
            : callbackUrl
        if (origin === baseUrl) return url
      }
      return baseUrl
    }
  }
})