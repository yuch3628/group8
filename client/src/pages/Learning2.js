import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

let Lesson2 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Campus',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        Lesson2 = [];
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      console.log(number);
                      Lesson2.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();
const Learning2 = () =>{
    return (
        <div className="card-wrapper">
            {Lesson2.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning2;
