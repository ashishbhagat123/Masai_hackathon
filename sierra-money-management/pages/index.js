import Head from 'next/head'
import React, {useState} from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Navbar from '../Component/Navbar'
import Sidebar from '../Component/Sidebar'
import Loan from './Loan'

export default function Home() {
  const [slide, setSlide] = useState(true);
  const handleSlide = () => {
    setSlide(!slide)
  }


  return (
    <div className={styles.container}>
      <Sidebar slide = {slide} handleSlide = {handleSlide}/>
      <Loan slide = {slide}/>
    </div>
  )
}
