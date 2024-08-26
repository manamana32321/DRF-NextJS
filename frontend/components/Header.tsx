import Link from 'next/link'

const Header = async () => {
  return (
    <header>
      <nav style={{ display: 'flex', gap: '10px' }}>
        <Link href="/">메인</Link>
        <Link href="/signin">로그인</Link>
        <Link href="/signup">회원가입</Link>
      </nav>
    </header>
  )
}

export default Header