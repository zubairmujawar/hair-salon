import React, { useState } from 'react'
import footerImg from "../../assets/makeup (1).png"

const Services = () => {
    const [servicewsData, setServicesData] = useState('')
    let services = [
        {
            id: 1,
            title: "lorem ipsum doller back",
            description: "this is a description that you help for align text",
            img : {footerImg}
        },
        {
            id: 2,
            title: "lorem ipsum doller back",
            description: "this is a description that you help for align text",
            img : {footerImg}
        },
    ]
  return (
    <div className='services-div'>
       <div className="service-info">
        <div className="service-data">
            <img src={footerImg} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={footerImg} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={footerImg} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
        <div className="service-data">
            <img src={footerImg} alt='FooterImg'/>
            <h3>This is a Title</h3>
            <p>This is a description that is back to Home gradern.</p>
        </div>
       </div>
    </div>
  )
}

export default Services
