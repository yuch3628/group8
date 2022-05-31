import React from 'react';
import AccordionTemplate from '../component/Accordion'
import '../component/Accordion.css'
import {FormattedMessage} from "react-intl";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

let accordionData = [];

let List = {
    list: [],
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

const getData = () => {
    fetch('http://localhost:9000/faq',{
        method:'GET',
        header: new Headers({'Content-Type': 'application/json'})})
    .then((res) => res.json())
    .then(data => {
        accordionData = [];
        data.forEach(
        accordion => {
                     let obj = {id: accordion.id , title: accordion.title, content:accordion.content } ;
                      accordionData.push(obj);
                    });
        List['list'] = accordionData;
    }).catch(e =>{
        //Error
    });
}

getData();


const Faq = () => {
    const list = List.getList();
    // const [isActive, setIsActive] = useState(false);
    return (
        <DragDropContext 
            onDragEnd={(param) => {
                const srcI = param.source.index;
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
                <h3><FormattedMessage id = "faq-title" defaultMessage="Frequently asked question"/></h3>
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