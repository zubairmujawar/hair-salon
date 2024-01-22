import React from "react";
import storyImg from "../../assets/story.jpg";
const Story = () => {
  return (
    <div className="story-div"id="about">
      <h2>Our Story</h2>
      <div className="info-story-div">
        <div className="left">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            asperiores optio voluptate at, modi omnis commodi assumenda eum
            dolorum itaque quisquam numquam corrupti eius. Sint totam nesciunt
            suscipit possimus incidunt. Animi ad quisquam odit corporis quia.
            Facilis, debitis maxime ipsam accusantium dolorum vel hic? Nobis
            dicta nemo voluptates dolorum, odit quibusdam modi autem. Recusandae
            impedit, atque pariatur eius dolorem accusantium?
          </p>
        </div>
        <div className="right">
          <img src={storyImg} alt="storyImg" id="storyImg" />
        </div>
      </div>
    </div>
  );
};

export default Story;
