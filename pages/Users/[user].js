import Link from "next/link"
import { useRouter } from "next/router"
const User = () => {
  
  const router = useRouter()
  const {user, users, input} = router.query
  const objUser = JSON.parse(user);
  let lowerInput = input.toLowerCase()
  let searchEl = []
  objUser.users.forEach(element => {
    if (element.firstName.toLowerCase().includes(input) || element.lastName.toLowerCase().includes(input)){
      searchEl.push(element)
    }
  });
  return (
    <div>
      <button onClick={()=>console.log(searchEl)}>user</button>
      <button onClick={()=>console.log(lowerInput)}>input</button>
      {searchEl.map((el)=>(
        <div key={el.id}>
          <p>{el.firstName} {el.lastName}</p>
          <Link href={{
              pathname: '/Id/[id]',
              query:{ id: el.id, firstName: el.firstName, lastName:el.lastName, userName: el.username}
            }}>See Profile</Link>
        </div>
      ))}
    </div>
  )
  
}

export default User

