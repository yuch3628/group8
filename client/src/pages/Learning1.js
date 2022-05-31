import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

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
                      console.log(number);
                      Lesson1.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();
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
