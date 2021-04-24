
import styles from '../styles/Webpage/slider.module.css'
import Carousel from 'react-bootstrap/Carousel'

const Slider = () => {
    const zoomOutProperties = {
        indicators: false,
        scale: 0.4
    }

    const images = [
        'tiredMoney.jpeg',
        'saveMoney.jpeg',
        'oldManmoney.jpeg',
        'chooseUS.jpeg'
    ];

    return (
        <div className = {styles.wrapper} id = "home">
            <Carousel className = {styles.mainContainer} fade = "true" interval = "4000" indicators = "false" keyboard = "false">
                <Carousel.Item className = {styles.sliderContainer} interval = "5000">  
                    <img className ="d-block w-100" src={images[0]} alt="first" className = {styles.image}/>
                    <Carousel.Caption>
                         <h3 className = {styles.caption}> Tired of keeping a tab for your expenditure?</h3>
                     </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className = {styles.sliderContainer}>
                    <img className ="d-block w-100" src={images[1]}  className = {styles.image} alt="second"/>
                    <Carousel.Caption>
                         <h3 className = {styles.caption} > Are you not able to save Money?</h3>
                     </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className = {styles.sliderContainer}>
                    <img className ="d-block w-100" src={images[2]}  className = {styles.image} alt="third"/>
                    <Carousel.Caption>
                         <h3 className = {styles.caption}> Well how about using tech to manage all your expenses</h3>
                     </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item className = {styles.sliderContainer}>
                    <img className ="d-block w-100" src={images[3]}  className = {styles.image} alt="forth"/>
                    <Carousel.Caption>
                         <h3 className = {styles.caption} > Join Paisa Vasool and gain control over your expenses.</h3>
                     </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default Slider
