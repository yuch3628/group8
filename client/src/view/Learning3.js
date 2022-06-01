/*
  CONTROLLER FUNCTIONS - Learning page
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/
import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

// get data from the backend and save them to Lesson3
let Lesson3 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Restaurant',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        Lesson3 = [];
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      //console.log(number);
                      Lesson3.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();

// Use Card component to show all the data from the backend in Lesson3
const Learning3 = () =>{
    return (
        <div className="card-wrapper">
            {Lesson3.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning3;
