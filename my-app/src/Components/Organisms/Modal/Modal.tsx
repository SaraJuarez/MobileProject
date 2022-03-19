import React from 'react';
import './modal.css';
import CloseIcon from '@mui/icons-material/Close';
import EditModal from '../../Molecules/EditModal/EditModal';
import DeleteModal from '../../Molecules/DeleteModal/DeleteModal';

function Modal(props: any) {

    const {modalType, editPhoneInfo, openModal, item, getNewPhoneInfo, deletePhoneInfo} = props;
    let content;
    if(modalType === 'edit') {
        content = <EditModal type={modalType} openModal={openModal} editPhoneInfo={editPhoneInfo} phoneInfo={item}/>
    } else if (modalType === 'create') {
        content = <EditModal type={modalType} openModal={openModal} getNewPhoneInfo={getNewPhoneInfo} phoneInfo={item}/>
    } else if (modalType === 'delete') {
        content = <DeleteModal item={item} openModal={openModal} deletePhoneInfo={deletePhoneInfo} />
    }

    return (
        <div onClick={props.closeFunction} className='modal-container'>
            <div className='modal-subContainer'>
                <div className='modal-content'>
                    <div className='moda-crossIcon'  >
                        <CloseIcon className='crossIcon' onClick={props.openModal}/>
                    </div>
                    {content}
                </div>
            </div>
        </div>

    )
}

export default Modal;