import React, {useState} from "react";
import {FormattedMessage} from "react-intl";
import {addLocalData} from "react-intl";

export const ItemTypes = {
    CARD : 'Card',
}

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