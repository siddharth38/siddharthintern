import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    
  
    const history = useNavigate();
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

   

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
   
    const login = () => {
        axios.post("https://mernintern.onrender.com/login", user)
        .then(res => {
            alert(res.data.message)
          
            if(typeof(res.data.userId)!="undefined" )
          {  
         
        
          history("/routine")}
           
      
          
        })
    }

    return (
        <div className="container">
        <div className="login">
        <h1 className="heads">GymGenie</h1>
            <h1>Signin</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
            <div style={{color:"black"}}> or </div>
            <div style={{color:"black"}}>  Create an account <span className="xyz"  onClick={() => history("/register")}> Register </span></div>
            <div style={{color:"black"}}> Forgot password?</div>
        </div>
        </div>
    )
}

export default Login