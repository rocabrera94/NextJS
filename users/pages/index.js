import Head from "next/head"
import Link from "next/link"


export default function Home({users}) {
  return (
    <div>
      <h1>USERS</h1>
      <button onClick={()=>console.log(users)}>data</button>
      {users.users.map((user, index)=>(
        <div key={user.id}>
          <p>Name:{user.firstName} {user.lastName}</p>
          <p>Id: #{user.id}</p>
          <Link href={{
            pathname: '/users/[id]',
            query:{ id: user.id, firstName: user.firstName, lastName:user.lastName, userName: user.username}
          }}>Profile</Link>
        </div>
      ))}
    </div>
  )
}


export const getStaticProps = async () => {
  const response = await fetch('https://dummyjson.com/users')
  const users = await response.json()

  return {
    props:{
      users
    }
  }
}
