import "./styles.css";
import Home from "../src/Home";
import Navbar from "./Navbar/Navbar";

import Footer from "./Footer";
import Work from "./Work";
import Bdypt2 from "./BdyPt2"


function App() {
  return (
    <div className="App">
            <Navbar />
 <Home/>
 <Bdypt2/>
 <Work/>
    <Footer/>

     
    </div>
  );
}

export default App;
