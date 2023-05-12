import React from 'react';
import './about.css'
import{ Container, Row, Col }  from 'react-bootstrap';

const About = () => {
    return <div>
        <Container>
            <Row>
                <Col>
                <h1 className='trust'>Trusted by people across the world</h1>
                <br/>
                <h3 style={{color:"grey" ,textAlign:"center"}}>GymGenie has helped people in USA, India, Canada, UAE, and 80 more countries</h3>
                </Col>
            </Row>
            <Row>
                <Col>
                <div className="contain">
                    <h1 className='content'> 100%</h1>
                    <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> Completion</h6>
                    </div>
                </Col>
                <Col>
                <div className="contain">
                <h1 className='content'>24/7 </h1>
                <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> Delivery</h6>
                    </div>
                </Col>
                <Col>
                <div className="contain">
                <h1 className='content'> 100K</h1>
                <h6 style={{color:"grey" ,textAlign:"center",fontSize:"18px" }}> Workout routines generated</h6>
                    </div>
                </Col>
            </Row>
        </Container>
        <br/>
    </div>;
}



export default About;