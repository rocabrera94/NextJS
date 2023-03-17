import Link from "next/link"
import { useRouter } from "next/router"
import idStyles from '../../styles/[id].module.css'

const User = () => {
  const router = useRouter()
  const {id, userName, firstName, lastName} = router.query
  router
  return (
    <div className={idStyles.main}>
      <div className={idStyles.container}>
        <p className={idStyles.name}>Name:{firstName} {lastName}</p>
        <div className={idStyles.data}>
          <p className={idStyles.userName}>userName:{userName}</p>
          <p className={idStyles.id}>Id: #{id}</p>
        </div>
        <Link href='/' className={idStyles.link}>go back home</Link>
      </div>
    </div>
  )
}

export default User