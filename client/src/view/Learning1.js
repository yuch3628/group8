/*
  CONTROLLER FUNCTIONS - Learning page
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/
import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

// get data from the backend and save them to Lesson1
let Lesson1 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Supermarket',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        Lesson1 = [];
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      //console.log(number);
                      Lesson1.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();

// Use Card component to show all the data from the backend in Lesson1
const Learning1 = () =>{
    return (
        <div className="card-wrapper">
            {Lesson1.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning1;
