/*
  CONTROLLER FUNCTIONS - About Page
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import bg3 from "../image/home_bg3.jpg";
import "../style/About.css";
import {useHistory} from "react-router-dom";
import {FormattedMessage} from "react-intl";
import FadeInSection from '../component/FadeInSection';
import {Button} from "react-bootstrap";


// 1. Use react-bootstrap component like Carousel to change different frames in the website.
// 2. Use Fade in effects to show each div when user scroll down the page

const About = () => {
    const history = useHistory();
    const routeChange = (path) => {
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
            <div className="about_content">
                <FadeInSection>
                    <br/>
                    <br/>
                    <h1><FormattedMessage id="introinfo" defaultMessage="How to start your Mandarin journey?"/></h1>
                </FadeInSection>
                <FadeInSection>
                    <div className='column_content'>
                        <FormattedMessage id="intro-content" defaultMessage="aaa" values={{br: <br/>}}/></div>
                </FadeInSection>
            </div>
            <hr className="solid"/>
            <div className="about_content">
                <FadeInSection>
                    {/*<h1> Lessons Information </h1>*/}
                    <h1><FormattedMessage id="lessoninfo" defaultMessage="Lessons Information"/></h1>
                </FadeInSection>
                <FadeInSection>
                    <div className="parents">
                        <div className="child" onClick={() => routeChange("/learning/lesson1")}>
                            <p><FormattedMessage id="lesson1" defaultMessage="Supermarket"/></p>
                        </div>
                        <div className="child" onClick={() => routeChange("/learning/lesson2")}>
                            <p><FormattedMessage id="lesson2" defaultMessage="Campus"/></p>
                        </div>
                        <div className="child" onClick={() => routeChange("/learning/lesson3")}>
                            <p><FormattedMessage id="lesson3" defaultMessage="Restaurant"/></p>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="parents">
                        <div className="child" onClick={() => routeChange("/learning/lesson4")}>
                            <p><FormattedMessage id="lesson4" defaultMessage="Zoo"/></p>
                        </div>
                        <div className="child" onClick={() => routeChange("/learning/lesson5")}>
                            <p><FormattedMessage id="lesson5" defaultMessage="Breakfast"/></p>
                        </div>
                        <div className="child" onClick={() => routeChange("/learning/lesson6")}>
                            <p><FormattedMessage id="lesson6" defaultMessage="Soft drinks"/></p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
            <hr className="solid"/>
            <div className="about_content">
                <br/>
                <br/>
                <FadeInSection>
                    <h3><FormattedMessage id="probleminfo" defaultMessage="probleminfo"/></h3>
                </FadeInSection>
                <FadeInSection>
                    <div className='column_content'>
                        <FormattedMessage id="problemcontent" defaultMessage="problemcontent"/>
                    </div>
                    <div className="btn-space">
                        <Button className='nav-faq' onClick={() => routeChange("/faq")}><FormattedMessage
                            id="seemore" defaultMessage="See More"/></Button>
                    </div>
                </FadeInSection>
            </div>
        </div>
    );
};

export default About;

