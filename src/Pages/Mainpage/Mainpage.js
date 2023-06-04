import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Pricing from '../../Components/Pricing/Pricing';
import Testimonials from '../../Components/About/Testimonials/Testimonials';
import Intro from '../../Components/Intro/Intro';
import './mainpage.css'
const Mainpage = () => {
    return <div className='mainx'>

         <Navbar/>
<Intro/>
<Home/>
<br/>
<About/>
<br/><br/>
<Pricing/>
<Testimonials/>
      <Footer/>
     
    </div>;
}


export default Mainpage;