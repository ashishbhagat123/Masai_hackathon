import {useState} from 'react'
import styles from '../styles/Login/create.module.css'
import {FaUserAlt, FaLock} from 'react-icons/fa'
import { MdEmail } from "react-icons/md";
const initialState = {
    full_name: "",
    email: "",
    password: "",
    income:0,
    expenditure:0
}
function create() {
    const [data, setData] = useState(initialState)
    const handleChange = (e)=>{
        const {value, name} = e.target
        const newData = {
            ...data,
            [name]: value
        }
        setData(newData)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        fetch("api/Login", {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }).then(res => res.json()).then(res=> window.location.assign("/login")).catch(err=> console.log(err))
    }
    return (
        <div className = {styles.wrapper}>
            <div className = {styles.mainContainer}>
                <h2>Create Account</h2>
                <form className = {styles.form} onSubmit = {handleSubmit}>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Full Name</div> <FaUserAlt/> </div>
                        <input type="text" onChange = {handleChange} className= {styles.inputText} placeholder = "Please enter here ..." name="full_name" id=""/>
                    </div>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Email</div>  <MdEmail/> </div>
                        <input type="text" onChange = {handleChange} className= {styles.inputText} placeholder = "Please enter here ..." name="email   " id=""/>
                    </div>
                    <div>
                        <div style = {{width:"40%", textAlign:"left"}}> <div style = {{width:"80px",float:"left"}}>Password</div> <FaLock/> </div>
                         <input type="text" onChange = {handleChange} className= {styles.inputText} placeholder = "Please enter here ..." name="password" id=""/>
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
