import { useRef } from 'react';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// import bg from '../image/home_bg2.jpg';
import {FormattedMessage} from "react-intl";
import './Card.css';

const Card = ({title, content}) => {
//     const audio_path = 'example.mp3';
    title = title.replace(/ /g, "");
    const audioUrl = require('../audio/'+title+'.mp3');
    const imageUrl = require('../image/'+title+'.jpg');
    const audio = new Audio(audioUrl);
    const start = () => {
        audio.play();
      };

    return (

        <Flippy
            flipOnHover={true} // default false
            flipDirection="horizontal"
            className='flip-card'>
            <FrontSide className='front-side'>
                <div className='frame'><img src={imageUrl}  className='img-card' alt="card"/></div>
                <div className='title'><FormattedMessage id = {title} defaultMessage={title}/></div>
            </FrontSide>
            <BackSide className='back-side'>
                <div className = 'center card-content-box'>
                    <br/>
                    <span className = 'backcard-word'>{content}</span>
                </div>
                    <div className="center">
                        <button onClick={start} className = 'play-btn'>Play</button>
                </div>

            </BackSide>
        </Flippy>

    )
}
export default Card;