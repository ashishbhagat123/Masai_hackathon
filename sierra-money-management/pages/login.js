import {useState, useEffect} from "react"
import styles from "../styles/Login/login.module.css"
import {FaUserAlt, FaLock} from 'react-icons/fa'

const payload = {
    email: "",
    password:""
}


const login = () => {

    const [user, setUser] = useState(payload)
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        fetch("api/Login").then(res => res.json()).then(res => setData(res)).catch(err=> console.log(err))
    },[])
    console.log(data)


    const handleChange = (e)=>{
        const {name, value} = e.target
        const newData = {
            ...user,
            [name]: value
        }
        setUser(newData)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        const ans = data.find((item)=> item.email === user.email && item.password === user.password)
        if(ans){
            localStorage.setItem("user", JSON.stringify(ans))
            window.location.assign("/Dashboard")
        } else {
            setError("Invalid crediantials, please try to login again !")
        }
    }

    return (
        <div className = {styles.wrapper}>
            <div style = {{fontSize:"20px"}}> {error}</div>
            <div className = {styles.mainContainer}>
                <h2>Login into your account</h2>                
                <form className = {styles.formContainer} onSubmit = {handleSubmit}>
                    <div>
                        <FaUserAlt/>
                        <input className = {styles.inputText} type="text" placeholder = "Email" name = "email" onChange = {handleChange}/> 
                    </div>

                    <div>
                        <FaLock/>
                        <input className = {styles.inputText} type="password" placeholder = "Password"  name = "password" onChange = {handleChange} />
                    </div>

                    <div className = {styles.btns}>
                        <div>
                            <input type="submit" value="Login"  className = {styles.btn}/>
                        </div>
                        <div>   
                            <a href="/"> forgot password? </a> 
                        </div>
                    </div>
                </form>
                <div className = {styles.disclaimer}>
                    If you don't have a account click <a href="/create">here</a> to create one
                </div>
            </div>
        </div>
    )
}

export default login
