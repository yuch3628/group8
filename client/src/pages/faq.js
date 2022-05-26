import React, {useState} from 'react';
import Accordion_template from '../component/Accordion'
import '../component/Accordion.css'
import {FormattedMessage} from "react-intl";

const accordionData = [{
    title: 'How to use this website' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'How do I use pratice after course?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'How long should I study for one lesson?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'How can I change language?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
}]

const Faq = () => {
    return(
        <div>
            <h3>Frequently asked question</h3>
            {accordionData.map(({ title, content }) => (
                <Accordion_template title={title} content={content} />))}
        </div>
    )
    };
   
export default Faq;
