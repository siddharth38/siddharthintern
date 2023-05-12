import React from 'react';
import{ Container, Row, Col }  from 'react-bootstrap';
import "./home.css";
import aboutImg from "./man-genie_1f9de-200d-2642-fe0f.png"
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup';
const Home = () => {
  const history = useNavigate();
    return <div>
<Container style={{position:"relative" ,left:"-2%" }}>
        <Row>
          <Col lg="8" md="8">
          <>
         <h1> Get fit with AI</h1>
  <h2>Introducing GymGenie: tailored workout routines for  </h2>
  <h2 className='you'>  you</h2>

  <h2> ✨ Just Released ✨</h2>
  <h2 style={{color:"blue"}}>
GymGenie MealPlan 🥗  </h2>
<h5>
Supercharge your personalized workout with AI-powered meal plans tailored to your fitness goals </h5>

 <h2 style={{color:"green"}}> MacroTracker ✏️</h2> 
 <h5>
Effortlessly enter your food and snacks and get an instant analysis of calories, protein, carbohydrates, and fats </h5>
<p >
        <CountUp
          start={0}
          end={100000}
          duration={3}
        />   workout routines generated so far.<br/> 
      

No credit card required.</p> 
<button type="button" class="btn btn-primary butt "  onClick={() => history("/register")}>Get started</button>
        </>  </Col>
          <Col lg="4" md="4"  className=" d-flex align-items-center justify-content-center">
          <div>
              <img src={aboutImg} alt="" className="w-40" />
            </div>
          </Col>
          </Row>

          
      
          </Container>
    </div>;
}


export default Home;