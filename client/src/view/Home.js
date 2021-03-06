/*
  CONTROLLER FUNCTIONS - React router dom, Home page
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg3 from "../image/home_bg3.jpg";
import "../style/Home.css";
import {icons} from "react-icons";

// 1. Use react-bootstrap component like Carousel to change different frames in the website.

const Home = () =>{
    return (
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
                <Carousel.Item class="Home-content" interval={600}>
                     <img className="d-block w-100" src={bg3} alt="First slide"/>
                     <Carousel.Caption>
                         <div className="content-box">
                             <h1>Hola!</h1>
                             <p>¡Comienza tu viaje chino ahora mismo!</p>
                         </div>
                     </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Home;

