import React from "react";
import image_1 from "./images/pick-meals-image.png";
import image_2 from "./images/choose-image.png";
import image_3 from "./images/delivery-image.png";

const Work = () => {
  return (
    <div >
      <div className="wrk1">
      <h1 className="wrk2">Work</h1>
      <h2 className="wrk3">How It Works</h2>
      <h3 className="wrk4">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit.
        Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </h3>
      </div>
      <div className="allbx">
      <div className="wrk5">
        <img src={image_1} alt="" />
        <h1 className="wrk5_1">Pick Meals</h1>
        <h2 className="wrk5_2">
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis
          elementum interdum facilisi bibendum.
        </h2>
      </div>
      <div className="wrk6">
        <img src={image_2} alt="" />
        <h1 className="wrk6_1">Choose How Often</h1>
        <h2 className="wrk6_2">
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis
          elementum interdum facilisi bibendum.
        </h2>
      </div>
      <div className="wrk7">
        <img src={image_3} alt="" />
        <h1 className="wrk7_1">Fast Deliveries</h1>
        <h2 className="wrk7_2">
          Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis
          elementum interdum facilisi bibendum.
        </h2>
      </div>
      </div>
      <div className="lst_1">
       <h1 className="h1"> Have Question In Mind? Let Us Help You</h1>
        <div className="input_1">
          <div className="inp_1">
            <input type="text" placeholder="yourmail@gmail.com" />
          </div>
          <button className="secondary-button_11">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Work;
