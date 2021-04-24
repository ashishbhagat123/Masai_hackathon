import styles from '../styles/Login/create.module.css'
import {FaUserAlt, FaLock} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";

function create() {
    return (
        <div className = {styles.wrapper}>
            <div className = {styles.mainContainer}>
                <h2>Create Account</h2>
                <form className = {styles.form}>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Full Name</div> <FaUserAlt/> </div>
                        <input type="text" className= {styles.inputText} placeholder = "Please enter here ..." name="" id=""/>
                    </div>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Email</div>  <MdEmail/> </div>
                        <input type="text" className= {styles.inputText} placeholder = "Please enter here ..." name="" id=""/>
                    </div>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Password</div> <FaLock/> </div>
                         <input type="text" className= {styles.inputText} placeholder = "Please enter here ..." name="" id=""/>
                    </div>
                    <div>
                        <input type="submit" value="Create Account"/>
                    </div>
                </form>
            </div> 
        </div>
    )
}

export default create
