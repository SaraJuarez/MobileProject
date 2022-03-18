import React from "react";
import "./modal.css";
import CloseIcon from '@mui/icons-material/Close';
import EditModal from "../../Molecules/EditModal/EditModal";

function Modal(props: any) {

    const {modalType, editPhoneInfo, openModal, item} = props;
    let content;
    if(modalType === 'edit') {
        content = <EditModal openModal={openModal} editPhoneInfo={editPhoneInfo} phoneInfo={item}/>
    }

    return (
        <div onClick={props.closeFunction} className="modal-container">
            <div className="modal-subContainer">
                <div className="modal-content">
                    <div className="moda-crossIcon"  >
                        <CloseIcon className="crossIcon" onClick={props.openModal}/>
                    </div>
                    {content}
                </div>
            </div>
        </div>

    )
}

export default Modal;