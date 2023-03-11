import Link from "next/link"
import { useRouter } from "next/router"
const User = () => {
  const router = useRouter()
  const {id, userName, firstName, lastName} = router.query
  router
  return (
    <div>
      <p>Name:{firstName}</p>
      <p>LastName:{lastName}</p>
      <p>userName:{userName}</p>
      <p>Id: #{id}</p>
      <Link href='/' >go back home</Link>
    </div>
  )
}

export default User