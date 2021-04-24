import {useEffect, useState} from 'react'
import styles from "../styles/Webpage/nav.module.css"
const Navigation = () => {
   

    return (
        <div className = {styles.nav} >
         
            <div className = {styles.logoContainer}>
                <img src="logoMain.png" alt="logo" className = {styles.img}/>
            </div>
            {/* <div>
                <Link activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={-70}
                duration={500}>
                                Home
                </Link>
            </div>
            <div>
                <Link activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                                
                >
                    About
                </Link>
            </div>

            <div>
                <Link activeClass="active"
                    to="whyUS"
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={-10}
                    duration={500}>

                        Why us?
                    </Link>
            </div> */}
            <div>
                <button className = {styles.btn}> Create Account</button>

                <a href="/login"> <button className = {styles.btn}> LOGIN</button> </a>
            </div>
        </div>
    )
}

export default Navigation
