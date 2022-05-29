import React, {useState} from 'react';
import AccordionTemplate from '../component/Accordion'
import '../component/Accordion.css'
// import {FormattedMessage} from "react-intl"; 
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const accordionData = [{
    id: 1,
    title: 'How to use this website' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 2,
    title: 'How do I use pratice after course?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 3,
    title: 'How long should I study for one lesson?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 3,
    title: 'How can I change language?' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 4,
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 5,
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 6,
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 7,
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
},{
    id: 8,
    title: 'I meet some problem when I log into my account!' ,
    content:'Lorem ipsum dolor, sit amet consectetur adipisicing elit.' +
        ' Quis sapiente laborum cupiditate possimus labore, ' +
        'hic temporibus velit dicta earum suscipit commodi eum enim atque at? ' +
        'Et perspiciatis dolore iure voluptatem.'
}];

const List = {
    list: accordionData,
    getList: function () {
        return (
            (localStorage.getItem("theList") &&
                JSON.parse(localStorage.getItem("theList"))) ||
            this.list
        );
    },
    saveList: (list) => {
        localStorage.setItem("theList", JSON.stringify(list));
    },
};


const Faq = () => {
    const list = List.getList();
    // const [isActive, setIsActive] = useState(false);
    return (
        <DragDropContext 
            onDragEnd={(param) => {
                const srcI = param.source.index;
//                 const desI = param.destination?.index;
                let desI;
                if (param.destination !== null && param.destination !== undefined) {
                    desI = param.destination.index;
                }
                if (desI) {
                list.splice(desI, 0, list.splice(srcI, 1)[0]);
                List.saveList(list);
                }
          }}>
            <div>
                <h3>Frequently asked question</h3>
                <Droppable droppableId="droppable-1">
                    {(provided, _) => (
                        <div ref={provided.innerRef} {...provided.droppableProps}>
                            {list.map(({ id, title, content }, i) => (
                                <Draggable
                                    key={id}
                                    draggableId={"draggable-" + id}
                                    index={i}
                                >
                                    {(provided, snapshot) => (
                                        <div ref={provided.innerRef}
                                        {...provided.draggableProps}>
                                            <AccordionTemplate 
                                                title={title} 
                                                content={content} 
                                                props= {{...provided.dragHandleProps}}
                                            />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                        </div>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );    
}

export default Faq;