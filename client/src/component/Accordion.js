/*
  CONTROLLER FUNCTIONS - Learning page
  --------------------------------
  contributors:
    - Yun-Chien (Accordion in FAQ page)
*/

import React, {useState} from "react";
import {FormattedMessage} from "react-intl";
import {addLocalData} from "react-intl";

export const ItemTypes = {
    CARD : 'Card',
}

// implement show and hide section of Accordion and put all the content about question and answer
const Accordion = ( {title,content, props})=>{
    const [isActive, setIsActive] = useState(false);
    return (
        <React.Fragment>
            <div className="accordion" {...props}>
                <div className="accordion-item">
                    <div className="accordion-title">
                        <div><FormattedMessage id = {title} defaultMessage={title}/></div>
                        <div onClick={()=>setIsActive(!isActive)}>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content"><FormattedMessage id = {content} defaultMessage={content}/></div>}
                </div>
            </div>
        </React.Fragment>
    );
};


export default Accordion;