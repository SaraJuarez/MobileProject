import React, {useState} from 'react';
import Button from '../../Atoms/Button/Button';
import './editModal.css';

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
    phoneInfo: itemType,
    editPhoneInfo: any,
    openModal: any
} 

function EditModal (props:Props) {
    const {phoneInfo, openModal, editPhoneInfo} = props;

    const [name, setNewName] = useState(phoneInfo.name);
    const [color, setNewColor] = useState(phoneInfo.color);
    const [description, setNewDescription] = useState(phoneInfo.description);
    const [imageFileName, setNewImageFileName] = useState(phoneInfo.imageFileName);
    const [manufacturer, setNewManufacturer]= useState(phoneInfo.manufacturer)
    const [price, setNewPrice] = useState(phoneInfo.price);
    const [processor, setNewProcessor] = useState(phoneInfo.processor);
    const [ram, setNewRam] = useState(phoneInfo.ram);
    const [screen, setNewScreen] = useState(phoneInfo.screen);

    function getNewName(e:any) {
        setNewName(e.target.value);
    }
    
    function getNewManufacturer (e:any) {
        setNewManufacturer(e.target.value)
    }

    function controlInfo () {
        let editedPhoneObject = {
            name: '',
            id: phoneInfo.id,
            color: '',
            description: '',
            imageFileName: '',
            manufacturer: '',
            price: '',
            processor: '',
            ram: '',
            screen: ''

        };
        editedPhoneObject.name = name;
        editedPhoneObject.color = color;
        editedPhoneObject.description = description;
        editedPhoneObject.imageFileName = imageFileName;
        editedPhoneObject.manufacturer = manufacturer;
        editedPhoneObject.price = price;
        editedPhoneObject.processor = processor;
        editedPhoneObject.ram = ram;
        editedPhoneObject.screen = screen;
        editPhoneInfo(editedPhoneObject)
    }




    return(
        <div className='editModal-container'>
            <p className='editModal-title'>Edit phone information</p>
            <div className='editModal-input'>
                <p>Model</p>
                <input placeholder={phoneInfo.name} onChange={getNewName} type='name'></input>
                <p>Manufacturer</p>
                <input placeholder={phoneInfo.manufacturer} onChange={getNewManufacturer} type="manufacturer"></input>
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
            <div className='editModal-buttonContainer'>
                <Button text='Aceptar' onClickFunction={controlInfo}/>
                <Button text='Cancelar' onClickFunction={openModal}/>
            </div>

        </div>
    )
}

export default EditModal;