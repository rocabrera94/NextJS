import Navbar from './Navbar'
import layoutStyles from '../styles/Layout.module.css'
const Layout = ({children}) => {
  return (
    <div className={layoutStyles.container}>
      <Navbar />
      <div>{children}</div>
    </div>
  )
}

export default Layout