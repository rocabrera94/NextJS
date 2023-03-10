import Link from 'next/Link'
const Navbar = () => {
  return (
    <div>
      <div>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
      </div>
    </div>
  )
} 

export default Navbar