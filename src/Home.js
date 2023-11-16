import React from "react";
import image2 from "./images/home-banner-background.png";
import image1 from "./images/home-banner-image.png";
import image3 from "./images/about-background.png";
import image4 from "./images/about-background-image.png";
import "../src/styles.css"

const Home = () => {
  return (
    <div className="Home-contatiner">
      <section>
      <div className="Home_banner1">
        <img src={image1} alt="" />
      </div>
      <div className="Home-banner-image-contatiner2">
        <img src={image2} alt="" />
      </div>
      <div className="text111">
      <h1 className="primary-heading">
        Your Favourite Food Delivered Hot & Fresh
      </h1>

      <h2 className="secondary-heading">
        Healthy switcher chefs do all the prep work, like peeding, chopping &
        marinating, so you can cook a fresh food.
      </h2>
      <button className="primary-button1">Order Now</button>

     
      </div>
   

    
  
      </section>
    </div>
  );
};

export default Home;
