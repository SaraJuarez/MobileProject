import React from "react";
import "./modal.css";
import CloseIcon from '@mui/icons-material/Close';

function Modal(props: any) {

    return (
        <div onClick={props.closeFunction} className="modal-container">
            <div className="modal-subContainer">
                <div className="modal-content">
                    <div className="moda-crossIcon"  >
                        <CloseIcon className="crossIcon" onClick={props.openModal}/>
                    </div>
                    {props.content}
                </div>
            </div>
        </div>

    )
}

export default Modal;