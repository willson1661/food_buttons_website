import image3 from "./images/about-background.png";
import image4 from "./images/about-background-image.png";
import "../src/styles.css"

const Bdypt2=()=>{
    return(
    <div>
        <div className="second_image_1">
        <img src={image3} alt="" />
      </div>
      <div className="second_image_2">
   

        <img className="reg1" src={image4} alt="" />
       
      </div>
    <div className="text222">
      <h1 className="primary-heading3">
        Food Is An Important Part Of A Balanced Diet
      </h1>
      <h2 className="secondary-heading4">
        Healthy switcher chefs do all the prep work, like peeding, chopping &
        marinating, so you can cook a fresh food.
      </h2>
      <button className="primary-button2">Learn more</button>
      </div> 
      </div>
        );
}


export default Bdypt2;