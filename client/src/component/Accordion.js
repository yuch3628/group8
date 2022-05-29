import React, {useState} from "react";

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
                        <div>{title}</div>
                        <div onClick={()=>setIsActive(!isActive)}>{isActive ? '-' : '+'}</div>
                    </div>
                    {isActive && <div className="accordion-content">{content}</div>}
                </div>
            </div>
        </React.Fragment>
    );
};


export default Accordion;