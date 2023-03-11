import Head from "next/head"
import Link from "next/link"
import homeStyles from '../styles/Home.module.css'
import { useState } from "react"
export default function Home({users}) {
  const [input, setInput] = useState('');
  return (
    <div className={homeStyles.container} >
      <h1>USERS</h1>
      <div className={homeStyles.form}>
        <input type='text' 
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        />
        
        <Link href={{
            pathname: '/Users/[user]',
            query:{users:'users', user:JSON.stringify(users), input:input }
          }}>Search</Link>
        
      </div>
      <button onClick={()=>console.log(users)} className={homeStyles.btn}>data</button>
      <div className={homeStyles.grid}>
      {users.users.map((user, index)=>(
        <div key={user.id} className={homeStyles.card}>
          <p>Name:{user.firstName} {user.lastName}</p>
          <p>Id: #{user.id}</p>
          <Link href={{
            pathname: '/Id/[id]',
            query:{ id: user.id, firstName: user.firstName, lastName:user.lastName, userName: user.username}
          }}>See Profile</Link>
        </div>
      ))}
      </div>
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
