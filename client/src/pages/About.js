import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg3 from "../image/home_bg3.jpg";
import "./Home.css";
import {useHistory} from "react-router-dom";

 const About = () =>{
     const history = useHistory();
     const routeChange = (path) =>{
         history.push(path);
     }
     return (
         <div>
             <div>
                 <Carousel fade>
                 <Carousel.Item class="Home-content" interval={600}>
                     <img className="d-block w-100" src={bg3} alt="First slide"/>
                     <Carousel.Caption>
                         <div className="content-box">
                             <h1>哈囉!</h1>
                             <p>現在就開始您的中文旅程!</p>
                         </div>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item class="Home-content" interval={600}>
                     <img className="d-block w-100" src={bg3} alt="Second slide"/>
                     <Carousel.Caption>
                         <div className="content-box">
                             <h1>Hej!</h1>
                             <p>Börja din kinesiska resa från och med nu!!</p>
                         </div>
                     </Carousel.Caption>
                 </Carousel.Item>
                 <Carousel.Item class="Home-content" interval={600}>
                     <img className="d-block w-100" src={bg3} alt="Third slide"/>
                     <Carousel.Caption>
                         <div className="content-box">
                             <h1>Hello!</h1>
                             <p>Start your Chinese journey from now on!</p>
                         </div>
                         {/*<h1 class="content-box"}>Hello!</h1>*/}
                         {/*<p>Prepare to learn your chinese.</p>*/}
                     </Carousel.Caption>
                 </Carousel.Item>
             </Carousel></div>
             <div className="content">
                 <h1> Lessons Information </h1>
                 <div className="parents" >
                     <div className= "child" onClick={ () => routeChange("/learning/lesson1")} >
                         <p>Restaurant</p>
                     </div>
                     <div className= "child" onClick={ () => routeChange("/learning/lesson2")} >
                         <p>Supermarket</p>
                     </div>
                     <div className= "child" onClick={ () => routeChange("/learning/lesson3")}>
                         <p>Campus</p>
                     </div>
                 </div>
                 <div className="parents">
                     <div className= "child" onClick={ () => routeChange("/learning/lesson4")}>
                         <p>Jail</p>
                     </div>
                     <div className= "child" onClick={ () => routeChange("/learning/lesson5")}>
                         <p>Court</p>
                     </div>
                     <div className= "child" onClick={ () => routeChange("/learning/lesson6")}>
                         <p>Zoo</p>
                     </div>
                 </div>
             </div>
         </div>
         // <div>
         //     <h1>Please contct us</h1>
         //     <h3>Daliy Mandarin</h3>
         //     <h5>Write about yourself</h5>
         // </div>

     );
 }
 export default About;