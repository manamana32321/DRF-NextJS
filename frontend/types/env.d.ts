export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_URL: string
      NEXTAUTH_SECRET: string
    }
  }
}