import React from "react";
import servImg4 from "../../assets/img1.jpg";
import servImg2 from "../../assets/img2.jpg";
import servImg3 from "../../assets/img3.jpg";
import servImg1 from "../../assets/img4.jpg";
import servImg5 from "../../assets/img5.jpg";
import servImg6 from "../../assets/img6.jpg";

const Services = () => {
  let servicesArr = [
    {
      id: 1,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg1,
    },
    {
      id: 2,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg2,
    },
    {
      id: 3,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg3,
    },
    {
      id: 4,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg4,
    },
    {
      id: 5,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg5,
    },
    {
      id: 6,
      title: "lorem ipsum doller back",
      description: "this is a description that you help for align text",
      img: servImg6,
    },
  ];
  return (
    <div className="services-div" id="sevices">
      <h2 className="services-h2">Our Services</h2>
      <div className="service-info">
        {
          servicesArr.map((data)=>{
           return <div className="card" key={data.id}>
          <img src={data.img} alt={data.title} className="card-image" />
          <div className="card-cover">
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>
          })
        }

        {/* {servicesArr.map((data) => (
          <div className="service-data" key={data.id}>
            <img src={data.img} alt="servicesImg" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Services;
