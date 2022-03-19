import React, {useState, useEffect} from 'react';
import './home.css';
import Card from '../../Components/Organisms/Card/Card';
import {getAllPhones, createNewPhone, deletePhone, editPhone} from '../../api/index';
import CircularProgress from '@mui/material/CircularProgress';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '../../Components/Organisms/Modal/Modal';

function Home () {

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

    const [phonesList, setPhonesList] = useState([]);
    const [showModalNew, setShowModalNew] = useState(false);

    function openModal () {
        setShowModalNew(!showModalNew)
    }

    const getPhonesInfo = async() => {
        setPhonesList([])
        let phonesInfo = await getAllPhones();
        setPhonesList(phonesInfo)
    }

          
    useEffect(() => {
        getPhonesInfo();
    }, [])

    const getNewPhoneInfo = async (infoObject:any) => {
        openModal()
        let result = await createNewPhone(infoObject);
        if(result!.data) {
            let arrayList : any = phonesList;
            let newPhone = result!.data;
            arrayList.push(newPhone);
            setPhonesList(arrayList)
            getPhonesInfo()
        } else {
            console.log('Error create')
        }
    }

    const editPhoneInfo = async (editedPhoneInfo:itemType) => {
        let result = await editPhone(editedPhoneInfo);

        if(result!.status === 200) {
            let fullList : any = phonesList;
            let indexOldPhone = fullList.findIndex((element: any) => element.id === editedPhoneInfo.id);
            let removeOld = fullList.splice(indexOldPhone,1);

 /*            let 
            console.log(indexOldPhone) */
            getPhonesInfo()
        } else if(result!.status === 404){
            console.log('Phone id not found')
        } else {
            console.log('Error edit')
        }
    }

    const deletePhoneInfo = async (phoneId: string) => {
        let result = await deletePhone(phoneId, phonesList)
        if(result!.status === 200) {
            getPhonesInfo()
        } else {
            console.log('Error delete')
        }
    }


    return(
        <div className='home-container'>
            <header className='home-header'>
                <h1>Phone Catalogue</h1>
                <small>Discover what phone suits you!</small>
                <AddCircleIcon onClick={openModal} className='addCircle'/>
            </header>
            {showModalNew ? 
                <Modal openModal={openModal}  modalType='create' getNewPhoneInfo={getNewPhoneInfo} />
                : null
            }
            {phonesList !== undefined && phonesList.length > 0 ?
                <div className='home-grid'>
                   {phonesList.map((item, index)=> {
                       return(
                           <Card deletePhoneInfo={deletePhoneInfo} getNewPhoneInfo={getNewPhoneInfo} editPhoneInfo={editPhoneInfo} key={index} item={item}/>
                       )
                   })}
               </div>
               : 
                <div className='home-loader'>
                    <CircularProgress className="circular-loader" size={60} />
                </div>                  

            }
     
        </div>
    )
}

export default Home;