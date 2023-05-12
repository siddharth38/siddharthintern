import React, { useState } from "react"
import "./register.css"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Register = () => {

    const navigate = useNavigate()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://mernintern.onrender.com/register", user)
            .then( res => {
                alert(res.data.message)
                localStorage.setItem("user_email", user.email)
                navigate("/login");
            })
        } else {
            alert("invlid input")
        }
        
    }

    return (
        <div className="register">
        
            <h1>Sign up<br/> for an account</h1>
            <div style={{color:"black"}}> Already have account <span className="xyz"  onClick={() => navigate("/login")}> Signin</span></div>
           
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
            <div className="button" onClick={register} >Register</div>
            <div style={{color:"black"}}>{ localStorage.getItem("user_email") ? <><p>Your account has been created for &nbsp;
           { localStorage.getItem("user_email")} Please sign in now </p></> :" " }</div>

        </div>
    )
}

export default Register