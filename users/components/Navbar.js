import Link from 'next/Link'
import navbarStyles from '../styles/Navbar.module.css'
const Navbar = () => {
  return (
    <div className={navbarStyles.container}>
      <p className={navbarStyles.brand}>ROBOTS</p>
      <div className={navbarStyles.links}>

        <Link href='/' className={navbarStyles.link}>Home</Link>
        <Link href='/about' className={navbarStyles.link}>About</Link>
      </div>
    </div>
  )
} 

export default Navbar