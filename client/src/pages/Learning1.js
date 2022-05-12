import React from 'react';
import Card from '../component/Card';
const test = [{title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"},
                {title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"},
                {title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"},
                {title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"},
                {title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"},
                {title: 'title', content:'123', audio_path:"example.mp3", img_path:"home_bg2.jpg"}];

const Learning1 = () =>{
    return (
        <>
            <div class="row">
                {test.map(({ title, content, audio_path, img_path }) => (
                    <Card title={title} content={content} audio_path={audio_path} img_path={img_path} />
                ))}
            </div>
        </>
    );
}
export default Learning1;