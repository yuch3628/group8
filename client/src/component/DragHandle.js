// import { DragIconWrapper } from "../styles";
import React from "react";
import './DragHandle.css';
import { ReactComponent as DragHandleIcon } from "../image/drag_handle.svg";

const DragHandle = (props) => {
  return (
    <div className="drag-handle" {...props}>
      <DragHandleIcon className="drag-svg" />
    </div>
  );
}

export default DragHandle;