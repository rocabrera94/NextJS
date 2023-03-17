import Head from "next/head"
import Link from "next/link"
import homeStyles from '../styles/Home.module.css'
import { useState } from "react"
export default function Home({users}) {
  const [input, setInput] = useState('');
 
  

  return (
    <div className={homeStyles.container} >
      <p className={homeStyles.title}>ROBOTS</p>
      <div className={homeStyles.form}>
        <input
        type='text'
        className={homeStyles.input} 
        value={input}
        onChange={(e)=>{setInput(e.target.value)}}
        />
      
        <Link 
          href={{
            pathname: '/Users/[user]',
            query:{users:'users', user:JSON.stringify(users), input: input.toLowerCase()}
          }}
          className={homeStyles.btnSearch}
          >Search
        </Link>
        
      </div>
      <button onClick={()=>console.log(users)} className={homeStyles.btn}>data</button>
      <div className={homeStyles.grid}>
      {users.users.map((user)=>(
        <div key={user.id} className={homeStyles.card}  >
          <div className={homeStyles.main}>
            <p>{user.firstName} {user.lastName}</p>
            <div className={homeStyles.pp} style={{backgroundImage: `url(${user.image})`}}></div>
          </div>
          
          <div className={homeStyles.data}>
            <p>Id: #{user.id}</p>
            <p>Email: {user.email}</p>
            <p>University: {user.university}</p>
            <p>Phone:{user.phone}</p>
            <Link 
              href={{
              pathname: '/Id/[id]',
              query:{ id: user.id, firstName: user.firstName, lastName:user.lastName, userName: user.username}
            }}
              className={homeStyles.link}
            >See Profile</Link>
          </div>
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
