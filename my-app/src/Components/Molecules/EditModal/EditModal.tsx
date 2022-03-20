import React, {useState} from 'react';
import Button from '../../Atoms/Button/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import './editModal.css';
import {storage} from '../../../api/firebase/index';
import {ListType} from '../../../Types/listType';

interface LooseObject {
    [key: string]: any
}

interface Props {
    phoneInfo: ListType,
    editPhoneInfo?: any,
    openModal: any,
    type: string,
    getNewPhoneInfo?: any
} 

function EditModal (props:Props) {
    const {phoneInfo, openModal, editPhoneInfo, type, getNewPhoneInfo} = props;

    const [name, setNewName] = useState(phoneInfo ? phoneInfo.name : '');
    const [color, setNewColor] = useState(phoneInfo ? phoneInfo.color : '');
    const [description, setNewDescription] = useState(phoneInfo ? phoneInfo.description : '');
    const [imageFileName, setNewImageFileName] = useState(phoneInfo ? phoneInfo.imageFileName : '');
    const [manufacturer, setNewManufacturer]= useState(phoneInfo ? phoneInfo.manufacturer : '')
    const [price, setNewPrice] = useState(phoneInfo ? phoneInfo.price : '');
    const [processor, setNewProcessor] = useState(phoneInfo ? phoneInfo.processor : '');
    const [ram, setNewRam] = useState(phoneInfo ? phoneInfo.ram : '');
    const [screen, setNewScreen] = useState(phoneInfo ? phoneInfo.screen : ''); 
    const [showAlert, setShowAlert] = useState(false);
    const [alertText, setAlertText] = useState('');
    const [progress, setProgess] = useState(0);

    function getNewName(e:any) {setNewName(e.target.value)}; 
    function getNewManufacturer (e:any) {setNewManufacturer(e.target.value)}; 
    function getNewColor (e:any) {setNewColor(e.target.value)};
    function getNewDescription(e:any) {setNewDescription(e.target.value)};
    function getNewPrice ( e:any) {setNewPrice(e.target.value)};
    function getNewProcessor ( e:any) {setNewProcessor(e.target.value)};
    function getNewRam(e:any) {setNewRam(e.target.value)};
    function getNewScreen( e:any) {setNewScreen(e.target.value)};

    function controlInfo () {
        let newPhoneObject = {
            name: name,
            color: color,
            description: description,
            imageFileName: imageFileName,
            manufacturer: manufacturer,
            price: price,
            processor: processor,
            ram: ram,
            screen: screen,

        };
        if(type === 'edit') {
            let editedPhoneObject : LooseObject = {};
            editedPhoneObject = newPhoneObject;
            editedPhoneObject.id = phoneInfo.id;
            editPhoneInfo(editedPhoneObject) 
            openModal()
        } else if (type === 'create'){
            let k: keyof typeof newPhoneObject;
            for (k in newPhoneObject) {
                if(newPhoneObject[k] === '') {
                    setAlertText(`${k} missing`);
                    setShowAlert(true)
                    return
                } 
            }
            getNewPhoneInfo(newPhoneObject)
            openModal()
        }
    }


    function getNewFileName(e:any) {
        let image = e.target.files[0];
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on("state_changed",
            (snapshot: any) => {
                const imageProgress = Math.round(
                    (snapshot._delegate.bytesTransferred/ snapshot._delegate.totalBytes) * 100
                );
                setProgess(imageProgress)
            },
            (error:any)=>{
              console.log(error)
            },
            () =>{
            storage
                .ref('images')
                .child(image.name)
                .getDownloadURL()
                .then((url:any) =>{
                    setNewImageFileName(url)
            })
        }); 
    }




    let title = type === 'edit' ? 'Edit phone information' : 'Create phone information';


    return(
        <div className='editModal-container'>
            <p className='editModal-title'>{title}</p>
            <div className='editModal-input'>
                <p className='editModal-text'>Model</p>
                <input placeholder={name} onChange={getNewName} name='name' required={type === 'create'}/>
                <p className='editModal-text'>Manufacturer</p>
                <input placeholder={manufacturer} onChange={getNewManufacturer} name='manufacturer' required={type === 'create'}/>
                <p className='editModal-text'>Color</p>
                <input placeholder={color} onChange={getNewColor} name='color' required={type === 'create'}/>
                <p className='editModal-text'>Price</p>
                <input placeholder={price} onChange={getNewPrice} name='price' required={type === 'create'}/>
                <p className='editModal-text'>Description</p>
                <input placeholder={description} onChange={getNewDescription} name='description' required={type === 'create'}/>
                <p className='editModal-text'>Processor</p>
                <input placeholder={processor} onChange={getNewProcessor} name='processor' required={type === 'create'}/>
                <p className='editModal-text'>Ram</p>
                <input placeholder={ram} onChange={getNewRam} name='ram' required={type === 'create'}/>
                <p className='editModal-text'>Screen</p>
                <input placeholder={screen} onChange={getNewScreen} name='screen' required={type === 'create'}/>
                <p className='editModal-text'>Image</p>
                <input onChange={getNewFileName} type={'file'} name='imageFileName' required={type === 'create'}/>
            
                {imageFileName !== '' ?
                  <img className='editModal-image' alt='Uploaded mobile' src={imageFileName}/>
                  :
                  <progress value={progress} max={'100'}/>
                }
              
            </div>
            <div className='editModal-footer'>
                {showAlert ?
                    <div className='editModal-alert'>
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity='error'> {alertText}</Alert>
                        </Stack>
                    </div> 

                    : null
                }
                <div className='editModal-buttonContainer'>
                    <Button text='Accept' onClickFunction={controlInfo}/>
                    <Button text='Cancel' onClickFunction={openModal}/>
                </div>
            </div>

        </div>
    )
}

export default EditModal;