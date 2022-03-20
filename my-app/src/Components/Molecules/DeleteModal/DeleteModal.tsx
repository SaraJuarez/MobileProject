import React from 'react';
import './deleteModal.css';
import Button from '../../Atoms/Button/Button';
import {ListType} from '../../../Types/listType';
interface Props {
    deletePhoneInfo: any,
    item: ListType,
    openModal: any
}

function DeleteModal (props:Props) {
    const {deletePhoneInfo, openModal, item} = props;

    function sendInfoToDelete () {
        openModal()
        deletePhoneInfo(item.id)
    }

    return(
        <div className='deleteModal-container'>
            <p className='deleteModal-title'>Are your sure you want to delete this phone?</p>
            <div className='deleteModal-buttonContainer'>
                <Button text='Accept' onClickFunction={sendInfoToDelete}/>
                <Button text='Cancel' onClickFunction={openModal}/>
            </div>
        </div>
    )

}

export default DeleteModal;