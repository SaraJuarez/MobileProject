import React, {useState, useEffect} from "react";
import './home.css';
import Card from "../../Components/Organisms/Card/Card";
import {getAllPhones, createNewPhone, deletePhone} from "../../api/index";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '../../Components/Organisms/Modal/Modal';
import { AxiosResponse } from "axios";

function Home () {

    const [phonesList, setPhonesList] = useState([]);
    const [showModalNew, setShowModalNew] = useState(false);

    function openModal () {
        setShowModalNew(!showModalNew)
    }

    const getPhonesInfo = async() => {
        let phonesInfo = await getAllPhones();
        setPhonesList(phonesInfo)
    }

    function editPhoneInfo(e:any) {
        console.log(e)
    }

    const getNewPhoneInfo = async (infoObject:any) => {
        openModal()
        let result = await createNewPhone(infoObject);
        if(result!.status === 204) {
            getPhonesInfo()
        } else {
            console.log('Error create')
        }
    }

    const deletePhoneInfo = async (phoneId: string) => {
        openModal()
        let result = await deletePhone(phoneId, phonesList)
        if(result!.status === 200) {
            getPhonesInfo()
        } else {
            console.log('Error delete')
        }
    }
      
    useEffect(() => {
        getPhonesInfo();
    }, [])

    return(
        <div className="home-container">
            <header className="home-header">
                <h1>Phone Catalogue</h1>
                <small>Discover what phone suits you!</small>
                <AddCircleIcon onClick={openModal} className="addCircle"/>
            </header>
            {showModalNew ? 
                <Modal openModal={openModal}  modalType='create' getNewPhoneInfo={getNewPhoneInfo} />
                : null
            }
            {phonesList !== undefined ?
                   <div className="home-grid">
                   {phonesList.map((item, index)=> {
                       return(
                           <Card deletePhoneInfo={deletePhoneInfo} getNewPhoneInfo={getNewPhoneInfo} editPhoneInfo={editPhoneInfo} key={index} item={item}/>
                       )
                   })}
               </div>
               : null
            }
     
        </div>
    )
}

export default Home;