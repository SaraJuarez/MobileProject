import React from "react";
import './deleteModal.css';
import Button from '../../Atoms/Button/Button';

interface itemType {
    id: string,
    color: string,
    description: string,
    imageFileName: string,
    manufacturer: string,
    name: string,
    price: string,
    processor: string,
    ram: string,
    screen: string
}
interface Props {
    deletePhoneInfo: any,
    item: itemType,
    openModal: any
}

function DeleteModal (props:Props) {
    const {deletePhoneInfo, openModal, item} = props;

    return(
        <div className="deleteModal-container">
            <p className="deleteModal-title">Are your sure you want to delete this phone?</p>
            <div className="deleteModal-buttonContainer">
                <Button text='Accept' onClickFunction={()=>deletePhoneInfo(item.id)}/>
                <Button text='Cancel' onClickFunction={openModal}/>
            </div>
        </div>
    )

}

export default DeleteModal;