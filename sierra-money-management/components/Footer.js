import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn} from "react-icons/fa";
import styles from '../styles/Webpage/footer.module.css'
const Footer = () => {
    return (
        <div className = {styles.wrapper}>
            <div>
                <div>Privacy</div>
                <div>Terms</div>
                <div>Contact us</div>
                <div> 	&#169; Paisa Vasool</div>
            </div>
            <div>
                <FaFacebookF/>
                <FaTwitter/>
                <FaInstagram/>
                <FaLinkedinIn/>
            </div>
        </div>
    )
}

export default Footer
