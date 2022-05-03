import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import bg1 from "../image/home_bg1.jpg";
import bg2 from "../image/home_bg2.jpg";
import bg3 from "../image/home_bg3.jpg";
import "./Home.css";

const Home = () =>{
    return (
        <div>
            <Carousel fade>
                <Carousel.Item class="Home-content" >
                    <img class="d-block w-100" src={bg3} alt="First slide"/>
                    <Carousel.Caption>
                        <div className="content-box">
                            <h1>哈囉!</h1>
                            <p>現在就開始您的中文旅程!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img class="d-block w-100" src={bg3} alt="Second slide"/>
                    <Carousel.Caption>
                        <div className="content-box">
                            <h1>Hej!</h1>
                            <p>Börja din kinesiska resa från och med nu!!</p>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item class="Home-content">
                    <img class="d-block w-100" src={bg3} alt="Third slide"/>
                    <Carousel.Caption>
                        <div class="content-box">
                            <h1>Hello!</h1>
                            <p>Start your Chinese journey from now on!</p>
                        </div>
                        {/*<h1 class="content-box"}>Hello!</h1>*/}
                        {/*<p>Prepare to learn your chinese.</p>*/}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}
export default Home;

