import React, { useState } from 'react'
import servImg1 from "../../assets/makeup.png"
import servImg2 from "../../assets/hairdryer.png"
import servImg3 from "../../assets/hair-cut-tool.png"
import servImg4 from "../../assets/knife-blade (1).png"

const Services = () => {
   
  return (
    <div className='services-div'>
       <div className="service-info">
        <div className="service-data">
            <img src={servImg1} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={servImg4} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={servImg3} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={servImg2} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
       </div>
    </div>
  )
}

export default Services
