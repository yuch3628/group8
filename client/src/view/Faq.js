/*
  CONTROLLER FUNCTIONS - FAQ page and Drag and Drop
  --------------------------------
  contributors:
    - Yun-Chien (frontend functionality)
*/

import React from 'react';
import Accordion from '../component/Accordion'
import '../component/Accordion.css'
import {FormattedMessage} from "react-intl";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


// define List object
// list : store the faq data, getList : get data from localStorage, saveList : save data to localStorage
let accordionData = [];
let List = {
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

// get data from the backend and save them to List['list']
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

// 1. Use react-beautiful-dnd package to implement drag and drop feature
// 2. Use Accordion to show the question and answer in FAQ
const Faq = () => {
    const list = List.getList();
    return (

        <DragDropContext
            onDragEnd={(param) => {
                //  record the index from source to destination
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
                                            <Accordion
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