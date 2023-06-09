
import React, { useState } from "react";

import "./navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { useNavigate } from 'react-router-dom'



function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)
  const history = useNavigate();
const handleShowNavbar = () => {
  setShowNavbar(!showNavbar)
}
const [click, setClick] = useState(false);
const [close, setclose] = useState("on");


const handleClick = () => {setClick(!click);
    if(close=="on")
   setclose("off")
   else 
   setclose("on")
  }


  return (
    <>
      <IconContext.Provider value={{ color: "white" }} >
        <nav className="navbar">
          <div className="navbar-container container">
           
          
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                Home
          
              </li>
           <hr/>
              <li className="nav-item">
                About
               
              </li> 
              <hr className="hr"></hr>
              <li className="nav-item">
             Pricing
               
              </li> 
              <hr className="hr"></hr>
              <li className="nav-item">
              Premium Features <span style={{color:"green"}}>  &nbsp;NEW!</span>
               
              </li> 
              <li className="nav-item">
              MacroTracker <span style={{color:"green"}}>&nbsp; NEW!</span>
               
              </li> 
              <li >
              <p className= "bt"  onClick={() => history("/login")}>SignUp</p>
              </li> 
              
            <li >
              <button className= "buttons"  onClick={() => history("/register")}>SignUp</button>
              </li> 
       
            </ul>
            
           

          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
