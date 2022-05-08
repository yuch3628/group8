import React from 'react';
import Card from '../component/Card';
const test = [{title: 'title', content:'123'}, {title: 'title', content:'123'}, {title: 'title', content:'123'}, {title: 'title', content:'123'}, {title: 'title', content:'123'}, {title: 'title', content:'123'}];
const Learning1 = () =>{
    return (
        <>
            <div class="row">
                {test.map(({ title, content }) => (
                    <Card title={title} content={content} />
                ))}
            </div>
        </>
    );
}
export default Learning1;