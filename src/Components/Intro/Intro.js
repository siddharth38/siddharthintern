import React from 'react';
import './intro.css'
import sd from "./0.jpg"
import kd from "./1.png"
const Intro = () => {
    return <div>
        
    <img className='img' src={sd}></img>
    <img className='imx' src={kd}></img>
   <div className='popup'>
   <h1 className='drivid'>Drivind</h1>
   <h5 className='drivi'>Platform to Start your AI Buisness

   <button className='grt'>
 Start
  
</button>
   </h5>
 
   </div>
    </div>;
}



export default Intro;