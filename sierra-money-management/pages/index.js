import Head from 'next/head'
import Webpage from '../components/Webpage';
import {dbConnect, jsonify } from "../middleware/db"
import User from "../Models/user"
export async function getServerSideProps(context){
  dbConnect()
  const users = await User.find({}).exec()
  return {
    props:{
      users: jsonify(users),
    }
  }
}

export default function Home({users}) {
  return (
    <div>
        <Webpage/>
      {console.log(users)}
    </div>
  )
}
