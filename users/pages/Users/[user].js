import Link from "next/link"
import { useRouter } from "next/router"
const User = () => {
  
  const router = useRouter()
  const {user, input} = router.query
  const objUser = JSON.parse(user)
  return (
    <div> 
      <h1>LALALA</h1>
      <button onClick={()=>console.log(input)}>users</button>      
      <Link href='/' >go back home</Link>
    </div>  
  )
}

export default User