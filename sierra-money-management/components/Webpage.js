import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";
import About from './About'
import Footer from './Footer'
import Navigation from './Navigation'
import Slider from './Slider'
import WhyUs from './WhyUs'
import styles from '../styles/Webpage/webpage.module.css'
const Webpage = ()=> {
    return (
        <div className = {styles.wrapper}>
            <Navigation/>
            <Slider/>
            <About/>
            <WhyUs/>
            <Footer/>
        </div>
    )
}

export default Webpage