import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg3 from "../image/home_bg3.jpg";
import "./Home.css";
import "./About.css";
import {useHistory} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import FadeInSection from '../component/FadeInSection';
import {Button} from "react-bootstrap";


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
                     </Carousel.Caption>
                 </Carousel.Item>
             </Carousel>
             </div>
             <div className="content">
                 <FadeInSection>
                     <h3>How to start your madarin jounrey?</h3>
                 </FadeInSection>
                 <FadeInSection>
                     <div className = 'about_content'>
                         How to start your madarin jounrey?How to start your madarin jounrey? How to start your madarin jounrey? How to start your madarin jounrey? How to start your madarin jounrey?</div>
                 </FadeInSection>
             </div>
                 <div className="content">
                     <FadeInSection>
                        <h1> Lessons Information </h1>
                     </FadeInSection>
                     <FadeInSection>
                         <div className="parents" >
                             <div className= "child" onClick={ () => routeChange("/learning/lesson1")} >
                                 <p><FormattedMessage id = "lesson1" defaultMessage="Supermarket"/></p>
                             </div>
                             <div className= "child" onClick={ () => routeChange("/learning/lesson2")} >
                                 <p><FormattedMessage id = "lesson2" defaultMessage="Campus"/></p>
                             </div>
                             <div className= "child" onClick={ () => routeChange("/learning/lesson3")}>
                                 <p><FormattedMessage id = "lesson3" defaultMessage="Restaurant"/></p>
                             </div>
                         </div>
                     </FadeInSection>
                     <FadeInSection>
                         <div className="parents">
                             <div className= "child" onClick={ () => routeChange("/learning/lesson4")}>
                                 <p><FormattedMessage id = "lesson4" defaultMessage="Zoo"/></p>
                             </div>
                             <div className= "child" onClick={ () => routeChange("/learning/lesson5")}>
                                 <p>Court</p>
                             </div>
                             <div className= "child" onClick={ () => routeChange("/learning/lesson6")}>
                                 <p>Zoo</p>
                             </div>
                         </div>
                     </FadeInSection>
                 </div>
             <div className="content">
                 <FadeInSection>
                     <h3>If you have more problem?</h3>
                 </FadeInSection>
                 <FadeInSection>
                     <div className = 'about_content'>How to start your madarin jounrey?How to start your madarin jounrey? How to start your madarin jounrey? How to start your madarin jounrey? How to start your madarin jounrey?</div>
                     <div className= "btn-space">
                         <Button className = 'nav-faq'  onClick={ () => routeChange("/faq")}>See More</Button>
                     </div>

                 </FadeInSection>
             </div>

         </div>

     );
 }
 export default About;

