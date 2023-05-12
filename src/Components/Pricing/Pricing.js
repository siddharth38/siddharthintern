import React from 'react';
import './pricing.css'
import{ Container, Row, Col }  from 'react-bootstrap';
import abt from './checked.png'
import { useNavigate } from 'react-router-dom'

const Pricing = () => {

    const history = useNavigate();
    return <div className='pricing'>
       <br/>
       <Container>
        <Row>
            <Col>
            <h1 style={{color:"grey" ,textAlign:"center"}}>Pricing</h1>
            </Col>
           
        </Row>
        <Row>
        <Col>
            <h1 className='trus'>The Right Place For Your Fitness Goals</h1>
            </Col>
        </Row>
        <Row>
            <Col>
            <h3 style={{color:"grey" ,textAlign:"center"}}>Work towards the best version of you.</h3>
            </Col>
           
        </Row>
    
        <Row>
            <Col lg="6" md="6">
            <div className="  cont">
            <div className="card-body">
    <div className='urtopper'>
    <span className='topper'>Free</span>
    </div>
    <br/>
    <h5 className=" main">$0<span style={{color:"grey" ,fontSize:"25px"}}>/mo.</span>
</h5> 
<p className='plans' >  Free Plan</p>

<p  className='para'> <span><img src={abt} className='imgt'/></span>1 Free Workout Routine Generated a Month</p>
  <p className='para'><span><img src={abt} className='imgt'/></span>1Get A New Workout Routine In Seconds</p>
    <button className="btn btn-primary btx"  onClick={() => history("/login")}>Get Started</button>
  </div>
 
</div>
            </Col>
            <Col lg="6" md="6">
            <div className=" cont">
  
  <div className="car">
    <div className='urtopper'>
    <span className='topper'>Premium</span>
    </div>
    <br/>
  <h5 className=" main">$2.99
  <span style={{color:"grey" ,fontSize:"25px"}}>/mo.</span></h5>
  <p className='plans' >  Access to upcoming new features 👀</p>
  <p className='para'> <span><img src={abt} className='imgt'/></span>No Limit on Workout Routines Generated</p>
  <p className='para'> <span><img src={abt} className='imgt'/></span>Access to GymGenie Meal Plan</p>
  <p className='para'> <span><img src={abt} className='imgt'/></span>Access to MacroTracker</p>
    <button className="btn btn-primary btx" onClick={() => history("/login")}>Get Started</button>
  </div>
 
</div>
            </Col>
        </Row>
       </Container>

    </div>;
}



export default Pricing;