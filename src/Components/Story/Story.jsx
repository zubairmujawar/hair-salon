import React from "react";
import storyImg from "../../assets/story.jpg";
const Story = () => {
  return (
    <div className="story-div"id="about">
      <h2>Our Story</h2>
      <div className="info-story-div">
        <div className="left">
          <p>
          Step into our salon and experience decades of dedication to hair care and style. Established in 1984, we have been serving our community with passion and expertise, delivering exceptional salon services that stand the test of time.
          </p>
          <br/>
          <p>
          At our salon, we understand that your hair is your crowning glory. With over three decades of experience, our skilled stylists blend timeless techniques with the latest trends to create stunning looks tailored to each client's unique personality and lifestyle.
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
