'use client'

import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { data: session } = useSession()

  return (
    <nav className="flex w-full sticky top-0">
      {session ? (
        <div>
          <p>로그인 되었습니다: {session.user.email}</p>
          <button onClick={() => signOut()}>로그아웃</button>
        </div>
      ) : (
        <div>
          <p>로그인 되지 않았습니다.</p>
          <button onClick={() => signIn()}>로그인</button>
        </div>
      )}
    </nav>
  )
}

export default Header