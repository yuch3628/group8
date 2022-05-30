import React from 'react';
import Card from '../component/Card';
import '../style/Learning1.css';

let Lesson4 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Zoo',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        Lesson4 = [];
        data.forEach(
        number => {
                     let obj = {title:number.name, content:number.mandarin } ;
                      console.log(number);
                      Lesson4.push(obj);
                    });
    }).catch(e =>{
        //Error
    });
}
getData();
const Learning4= () =>{
    return (
        <div className="card-wrapper">
            {Lesson4.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning4;
