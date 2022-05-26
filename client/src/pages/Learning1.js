import React from 'react';
import Card from '../component/Card';
import './Learning1.css';

// const test = [{title: 'meat', content:'肉', audio_path:"meat.mp3", img_path:"meat.jpg"},
//                 {title: 'pork', content:'豬肉', audio_path:"pork.mp3", img_path:"pork.jpg"},
//                 {title: 'beef', content:'牛肉', audio_path:"beef.mp3", img_path:"beef.jpg"},
//                 {title: 'chicken', content:'雞肉', audio_path:"chicken.mp3", img_path:"chicken.jpg"},
//                 {title: 'seafood', content:'海鮮', audio_path:"seafood.mp3", img_path:"seafood.jpg"},
//                 {title: 'vegetable', content:'蔬菜', audio_path:"vegetable.mp3", img_path:"vegetable.jpg"},
//                 {title: 'chips', content:'洋芋片', audio_path:"chips.mp3", img_path:"chips.jpg"},
//                 {title: 'instant noodles', content:'泡麵', audio_path:"instantnoodles.mp3", img_path:"instantnoodles.jpg"},
//                 {title: 'rice', content:'米', audio_path:"rice.mp3", img_path:"rice.jpg"}];

const Lesson1 = [];
const getData = () => {
    fetch('http://localhost:9000/cards/Supermarket',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        console.log('data', data);
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

const Learning1 = () =>{
    getData();
    return (
        <div className="card-wrapper">
            {Lesson1.map(({ title, content}) => (
                <Card title={title} content={content} />
            ))}
        </div>

    );
}
export default Learning1;

// {test.map(({ title, content, audio_path, img_path }) => (
//                 <Card title={title} content={content} audio_path={audio_path} img_path={img_path} />
//             ))}