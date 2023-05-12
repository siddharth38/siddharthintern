import React from 'react';
import { useState } from 'react';
import './routine.css'
import { Col, Container ,Row } from 'react-bootstrap';
import aboutImg from './man-genie_1f9de-200d-2642-fe0f.png'
import { useNavigate } from 'react-router-dom'
import CountUp from 'react-countup';
import Chatgpt from '../../Components/Chatgpt/Chatgpt';
const Routine = (props) => {
    const [textarea, setTextarea] = useState(
        ""
      );
      const history = useNavigate();
      const [slider, setslider] = useState(null);

      const handle = (event) => {
        setslider(event.target.value)
      }
       
    
      const handleChange = (event) => {
        setTextarea(event.target.value)
      }
   

   
    
    return <div>

        <Container >
            <br/>
            <Row >
                <Col lg="10" md="8" >
                <h1 className="routine-logo"> GymGenie <span>   <img src={aboutImg} alt=""style={{ height:"35px",width :"35px"}}/></span></h1>
                </Col>
                <Col lg="2" md="4" >

                    <h6  className='p' onClick={() => history("/meal")}>Manage Subscription →</h6>
                    <h6  className='p' onClick={() => history("/meal")}>GymGenie Meal Plan →</h6>
                </Col>
            </Row>
            <br/>
            <hr/>
            <Row>
                <Col>
                <h1 style={{textAlign:"center"}}>Generate your next <br></br>workout routine in<br/> seconds 💪</h1>
                <p  style={{textAlign:"center"}}>
        <CountUp
          start={0}
          end={100000}
          duration={3}
        />   workout routines generated so far.<br/> </p>
                </Col>
            </Row>
        </Container>
        <Container>

        <Row style={{textAlign:"center"}}>
            <Col>
            <br/> <br/>
            <label style={{textAlign:"left"}}/>
            1.
Select your fitness level.
            <br/> <br/>
<select style={{width:"500px"}}>

<option value="fruit"> Beginer</option>

<option value="vegetable">Intermediate</option>

<option value="meat">Advance </option>

</select>
<br/> <br/>
            <label style={{textAlign:"left"}}/>2.
Enter your height (enter in your local measurement system).
            <br/> <br/>
      <textarea value={textarea} onChange={handleChange} rows={5}
          cols={60} />
           <br/> <br/>
            <label style={{textAlign:"left"}}/>3.
Enter your weight.
            <br/> <br/>
      <textarea value={textarea} onChange={handleChange} rows={5}
          cols={60} />  <br/> <br/>
            <label style={{textAlign:"left"}}/>4.
Enter your goal weight.
            <br/> <br/>
            
      <textarea value={textarea} onChange={handleChange} rows={5}
          cols={60}   step="1" />  <br/> <br/>
          <br/> <br/>
          <label style={{textAlign:"left"}}/>
            5. Enter how many days a week you can workout.
            <br/> <br/>
          <input  style={{width:"500px"}} type="range" min="1" max="7" onChange={handle} />
        <p> {slider}day(s) a week</p>  
          <br/> <br/>
            <label style={{textAlign:"left"}}/>6.
Select whether you'll workout in the gym or at home.
<br/> <br/>
<select style={{width:"500px"}}>

<option value="fruit"> Gym</option>

<option value="vegetable">Home Workout -no equipment</option>

<option value="meat">Home Workout -basic equipment</option>

</select>
            <br/> <br/>
            <label style={{textAlign:"left"}}/>7.
Select your top gym goals.
<br/> <br/>

<select style={{width:"500px"}}>

<option value="fruit"> Gym</option>

<option value="vegetable">Home Workout -no equipment</option>

<option value="meat">Home Workout -basic equipment</option>

</select>

            <br/> <br/>
            <label style={{textAlign:"left"}}/>8.
Select your second top gym goal.
<br/> <br/>

<select style={{width:"500px"}}>

<option value="fruit"> Gym</option>

<option value="vegetable">Home Workout -no equipment</option>

<option value="meat">Home Workout -basic equipment</option>

</select>
<br/> <br/>
<button className='black' onClick={props.doStuff}> Generate</button>
            </Col>
        </Row>
        <br/> <br/>
        <Row>
            <Col  className='px-5 mx-5'> <h6 className="">{props.result.length > 0 ? props.result : "Please Wait.."}</h6></Col>
       
        </Row>
        <br/> <br/>
        <Row >
            <Col  lg="8" md="8">
                
Powered by OpenAI  <br/> 
Terms and Conditions  <br/> 
<p  className='p' onClick={() => history("/")}>Sign Out</p>

            </Col>
            <Col lg="4" md="4"  >
            Liked GymGenie? Check out GlowAI ✨ 
                </Col>
             
               
   
        </Row>

        
        </Container>
     
    </div>;
}



export default Routine;