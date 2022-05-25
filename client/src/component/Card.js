import { useRef } from 'react';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
// import bg from '../image/home_bg2.jpg';
import './Card.css';

const Card = ({title, content, audio_path, img_path}) => {
//     const audio_path = 'example.mp3';
    const audioUrl = require('../audio/'+audio_path);
    const imageUrl = require('../image/'+img_path);
    const audio = new Audio(audioUrl);
    const start = () => {
        audio.play();
      };

    return (

        <Flippy
            flipOnHover={true} // default false
            // flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            className='flip-card' /// these are optional style, it is not necessary
        >
            <FrontSide className='front-side'>
                <img src={imageUrl}  className='img-card' ></img>
                <div className='title'> {title}</div>
            </FrontSide>
            <BackSide className='back-side'>
                <div className = 'center content-box'>
                    <br/> {content}
                </div>
                    <div class="center">
                        <button onClick={start}>Play</button>
                </div>

            </BackSide>
        </Flippy>

    )
}
export default Card;