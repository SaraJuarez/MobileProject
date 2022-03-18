import React, {useState} from 'react';
import Button from '../../Atoms/Button/Button';
import './editModal.css';

interface itemType {
    id: number,
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
    phoneInfo: itemType,
    editPhoneInfo: any,
    openModal: any
} 

function EditModal (props:Props) {
    const {phoneInfo, openModal, editPhoneInfo} = props;

    const [editedInfo, setEditedInfo] = useState({
        id: phoneInfo.id,
        color: phoneInfo.color,
        description: phoneInfo.description,
        imageFileName: phoneInfo.imageFileName,
        manufacturer: phoneInfo.manufacturer,
        name: phoneInfo.name,
        price: phoneInfo.price,
        processor: phoneInfo.processor,
        ram: phoneInfo.ram,
        screen: phoneInfo.screen
    })

    function getInfo(e:any) {
        console.log(e.target.value)
        console.log(e.target.type)
    }

    let mentira = {
        name: 'nana',
        jeje: 'nono'
    }


    return(
        <div className='editModal-container'>
            <p className='editModal-title'>Edit phone information</p>
            <div className='editModal-input'>
                <p>Model</p>
                <input placeholder={phoneInfo.name} onChange={getInfo} type='name'></input>
                <p>Manufacturer</p>
                <input placeholder={phoneInfo.manufacturer} type="manufacturer"></input>
                <p>Color</p>
                <input placeholder={phoneInfo.color} type='color'></input>
                <p>Price</p>
                <input placeholder={phoneInfo.price} type='price'></input>
                <p>Description</p>
                <input placeholder={phoneInfo.description} type='description'></input>
                <p>Processor</p>
                <input placeholder={phoneInfo.processor} type='processor'></input>
                <p>Ram</p>
                <input placeholder={phoneInfo.ram} type='ram'></input>
                <p>Screen</p>
                <input placeholder={phoneInfo.screen} type='screen'></input>
            </div>
            <Button text='Aceptar' onClickFunction={editPhoneInfo(mentira)}/>
            <Button text='Cancelar' onClickFunction={openModal}/>
        </div>
    )
}

export default EditModal;