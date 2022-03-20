import React, {Fragment, useState} from 'react';
import './card.css';
import phoneImage from '../../../assets/images/samsungGalaxy.jpg';
import ReactCardFlip from 'react-card-flip';
import CardFooter from '../../Molecules/CardFooter/CardFooter';
import Button from '../../Atoms/Button/Button';
import Modal from '../Modal/Modal';
interface ListType {
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
    item: ListType,
    editPhoneInfo: any,
    getNewPhoneInfo: any,
    deletePhoneInfo: any
/*     edition?: boolean,
    styles?: any */
} 

function Card (props:Props) {

    const {item, editPhoneInfo, getNewPhoneInfo, deletePhoneInfo} = props;

    const [isFlipped, setIsFlipped] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState('')

    function flipCard () {
        setIsFlipped(!isFlipped)
    }

    function openModal(modalType: string) {
        setModalType(modalType)
        setShowModal(!showModal)
    }
    
    return(
        <Fragment>
            {showModal ?
                <Modal deletePhoneInfo={deletePhoneInfo} item={item} modalType={modalType} getNewPhoneInfo={getNewPhoneInfo} editPhoneInfo={editPhoneInfo} openModal={openModal}/>
                : null
            }
            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                <div className='card-container'>
                    <div className='card-imageContainer'>
                        <img alt='mobile' className='card-image' src={item.imageFileName ? item.imageFileName : phoneImage}/>
                    </div>
                    <div className='card-textContainer'>
                        <p className='text'><span className='text-title'>Model:</span> {item.name}</p>
                        <p className='text'><span className='text-title'>Manufacturer:</span> {item.manufacturer}</p>
                        <p className='text'><span className='text-title'>Price:</span> {item.price}</p>
                    </div>
                    <CardFooter showModalFunction={openModal} flipFunction={flipCard}/>
                </div>
                <div className='card-backContainer'>
                    <div className='backContainer-text'>
                        <p className='text'><span className='text-title'>Description:</span> {item.description}</p>
                        <p className='text'><span className='text-title'>Color:</span> {item.color}</p>
                        <p className='text'><span className='text-title'>Processor:</span> {item.processor}</p>
                        <p className='text'><span className='text-title'>Ram:</span> {item.ram}</p>
                        <p className='text'><span className='text-title'>Screen:</span> {item.screen}</p>
                    </div>
                    <div className='backButton'>
                        <Button onClickFunction={flipCard} text='Back'/>
                    </div>
                </div>
            </ReactCardFlip>
        </Fragment>
    )
}

export default Card;