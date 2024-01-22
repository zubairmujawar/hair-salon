import React from "react";
import servImg4 from "../../assets/makeup.png";
import servImg2 from "../../assets/hairdryer.png";
import servImg3 from "../../assets/hair-cut-tool.png";
import servImg1 from "../../assets/knife-blade (1).png";

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
  ];
  return (
    <div className="services-div" id="sevices">
        <h2>Our Services</h2>
      <div className="service-info">
        {servicesArr.map((data) => (
          <div className="service-data" key={data.id}>
            <img src={data.img} alt="servicesImg" />
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
