import { useRef } from 'react';
import React from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import bg from '../image/home_bg2.jpg';
import './Card.css';

const Card = (title, content) => {
    const path = 'example.mp3';
    const audioUrl = require('../audio/'+path);
    const audio = new Audio(audioUrl);
    const start = () => {
        audio.play();
        console.log('1111');
      };

    return (

        <Flippy
            flipOnHover={true} // default false
            // flipOnClick={true} // default false
            flipDirection="horizontal" // horizontal or vertical
            // ref={(r) => this.flippy = r} // to use toggle method like this.flippy.toggle()
            // if you pass isFlipped prop component will be controlled component.
            // and other props, which will go to div
            style={{ width: '50vh', height: '50vh', marginLeft: '15%', marginTop: '6%' }} /// these are optional style, it is not necessary
        >
            <FrontSide
                style={{
                    backgroundColor: '#41669d',
                    alignItems: 'center',
                    flex: 1,
                    fontSize: 28,
                    fontWeight: 'bold',
                    borderRadius:  20
//                     border: '3px solid black'
                }}>
                <img src={bg}  style={{ maxWidth: '100%', maxHeight: '100%', borderRadius:  20 }}></img>
                <div style={{ textAlign: 'center',
                              textAlignVertical: 'center',
                              lineHeight: '3em'
                            }}> Milk
                </div>
            </FrontSide>
{/*             <BackSide class = 'back-card' */}
{/*                 style={{ backgroundColor: '#175852'}}> */}
{/*                 Milk */}
{/*             </BackSide> */}
            <BackSide style={{ backgroundColor: 'lightgrey',
                               borderRadius:  20}}>
                <div class = 'center' style={{ textAlign: 'center', textAlignVertical: 'center', height:'40vh'}}>
                    <br/> 牛奶
                </div>
                <div class="center">
                    <button onClick={start}>Play</button>
                </div>

            </BackSide>
        </Flippy>
    )
}
export default Card;