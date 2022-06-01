/*
  CONTROLLER FUNCTIONS - Learning page
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/
import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

// get data from the backend and save them to Lesson6
let Lesson6 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Softdrinks',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        Lesson6 = [];
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      //console.log(number);
                      Lesson6.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();

// Use Card component to show all the data from the backend in Lesson6
const Learning6= () =>{
    return (
        <div className="card-wrapper">
            {Lesson6.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning6;
