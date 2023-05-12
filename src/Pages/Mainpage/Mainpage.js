import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Home from '../../Components/Home/Home';
import About from '../../Components/About/About';
import Pricing from '../../Components/Pricing/Pricing';

const Mainpage = () => {
    return <div>
         <Navbar/>

<Home/>
<br/>
<About/>
<br/><br/>
<Pricing/>
      <Footer/>
     
    </div>;
}


export default Mainpage;