import React from 'react';
import{ Container, Row, Col }  from 'react-bootstrap';
import "./home.css";
import aboutImg from "./xyz.png"
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup';
import Login from '../../Pages/Login/Login';
import Cards from '../Cards/Cards';
import Model from '../Model/Model';
const Home = () => {
  const history = useNavigate();
    return <div>

        <Row>
          <Col lg="8" md="8">
          <>
          <Model/>
     
  

  <h2 style={{position:"relative" ,left:"3%"}}> ✨ Just Released ✨</h2>
      <Cards/>
       
      

 
<button type="button" class="btn btn-primary butt "  onClick={() => history("/register")}>Get started</button>
        </>  </Col>
          <Col lg="4" md="4"  className=" d-flex align-items-center justify-content-center">
          <div>
             <Login/>
            <span> </span> 
            </div>
          </Col>
          </Row>

          
      
        
    </div>;
}


export default Home;