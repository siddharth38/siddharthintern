import React from 'react';
import './Cards.css'
import strf from './star-fill.png'
import strnf from './star-no-fill.png'

const Card = [
    {
      display: "Graphics AI",
      url: "#",
    },
    {
      display: "Image AI",
      url: "#",
    },
    {
        display: "TOOLS",
        url: "#",
      },
   
   
  
   
  ];

  const Card1 = [
    {
      display: "Open API",
      url: "#",
    },
    {
      display: "Website AI",
      url: "#",
    },
    {
        display: "Remix",
        url: "#",
      },
   
   
  
   
  ];
  
const Cards = () => {
    return <div>
        <div className='mcard'>

       

        {Card.map((item, index) => (
                <div key={index} className="cards">
                  {" "}
                 {item.display}
                </div>
              ))}
        </div>
        <h2 className='you'>  Popular  Features</h2>
        <div className='mcard'>

       

        {Card1.map((item, index) => (
               <> <div key={index} className="card">
                     {item.display}
                   <div className="rating">
                        <img src={strf}className="star" alt="" />
                        <img src={strf}className="star" alt="" /> 
                        <img src={strf}className="star" alt="" /> 
                        <img src={strnf}className="star" alt="" />
                     
                      
                    </div>
            
                </div>
                </>
              ))}
        </div>
    </div>;
}



export default Cards;