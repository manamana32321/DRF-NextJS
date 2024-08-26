'use server'

import { auth, signIn, signOut, update } from '@/auth'

export const signInWithCredentials = async (formData: FormData) => {
  await signIn('credentials', { /* 옵션 */ })
  // ...
}
export const signInWithGoogle = async () => {
  await signIn('google', { /* 옵션 */ })
  // ...
}
export const signInWithGitHub = async () => {
  await signIn('github', { /* 옵션 */ })
  // ...
}
export const signOutWithForm = async (formData: FormData) => {
  await signOut()
}
export {
  auth as getSession, 
  update as updateSession
}