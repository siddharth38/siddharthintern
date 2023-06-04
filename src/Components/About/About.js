import React from 'react';
import './about.css'
import { useState } from 'react';
import CountUp from 'react-countup';
import{ Container, Row, Col }  from 'react-bootstrap';
import ScrollTrigger from 'react-scroll-trigger';

const About = () => {
    const [count, setcount] = useState(false)
    return <div>
        <Container>
            <hr/>
            <Row>
                <Col>
                
                <p>
                No matter the industry, artificial intelligence is making its way into just about every business process. Enterprises that leverage AI-based technologies are seeing solid returns – and gaining on their competition.
<br/>
In our AI in the Enterprise eBook, you’ll learn:
<ul>
<li>How quickly AI adoption is really happening</li>
<li>How AI supports strategic business goals</li>
<li>Which AI capabilities drive the most value</li>
<li>Ways to turn AI-based insights into action</li>
<li>Smart ways to get started with AI</li>
</ul>

Learn how your business can transform with the help of AI.
                </p>
                </Col>
            </Row>
            <hr/>
            <Row>
                <Col>
                <h1 className='trust'>Trusted by Buisness across the world</h1>
                <br/>
                <h3 style={{color:"grey" ,textAlign:"center"}}>Drivind  has helped people in USA, India, Canada, UAE, and 80 more countries</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="contain">
                    <h1 className='content'>
                        <   ScrollTrigger onEnter={()=>setcount(true)} onExit={()=>setcount(false)}>
                        { count && <CountUp
          start={300}
          end={500}
          duration={7}
        /> }+ 
                        </ScrollTrigger> 
        
      </h1>
                    <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> Content and Features</h6>
                    </div>
                </Col>
                <Col>
                <div className="contain">
                <h1 className='content'>24/7 </h1>
                <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> UP TIME</h6>
                    </div>
                </Col>
                <Col>
                <div className="contain">
                <h1 className='content'>  
                <ScrollTrigger>
                { count && <CountUp
          start={50}
          end={80}
          duration={7}
        /> }+</ScrollTrigger>       
           </h1>
                <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> Tools Avilable</h6>
                    </div>
                </Col>
            </Row>
        </Container>
        <br/>
    </div>;
}



export default About;