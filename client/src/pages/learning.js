import React from 'react';
// import { useNavigate } from 'react-router-dom';
import './Learning.css';

import { useHistory } from 'react-router-dom';

const Learning = () => {
    const history = useHistory();
    const routeChange = (path) =>{
        history.push(path);
    }
    return (
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
    );
}


export default Learning;