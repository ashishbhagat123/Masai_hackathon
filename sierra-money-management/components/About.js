import styles from '../styles/Webpage/about.module.css'

const About = () => {
    return (
        <div className = {styles.wrapper} style = {{backgroundColor:"rgba(0, 0, 0, 0.521)" }}>
            
            <div className = {styles.textbox}>
                <h1>Wecome are Paisa Vasool</h1>
                <p>
                    We believe in a world where people don't have to worry about managing finances. We are obsessed with our customers. We never stop listening to customers so we can understand both their dreams and the challenges they face -- and then get to work using technology to solve their most important problems.
                </p>
            </div>
        </div>
    )
}

export default About
