import React, {Fragment, useState} from "react";
import "./card.css";
import phoneImage from '../../../assets/images/samsungGalaxy.jpg';
import ReactCardFlip from 'react-card-flip';
import CardFooter from "../../Molecules/CardFooter/CardFooter";
import Button from "../../Atoms/Button/Button";
import Modal from "../Modal/Modal";
interface ListType {
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
    item: ListType,
/*     edition?: boolean,
    styles?: any */
} 

function PhoneCard (props:Props) {

    const {item} = props;

    const [isFlipped, setIsFlipped] = useState(false);
    const [showModal, setShowModal] = useState(false);

    function flipCard () {
        setIsFlipped(!isFlipped)
    }

    function openModal() {
        setShowModal(!showModal)
      }
    
    let  content = <p>Jejeje</p>

    return(
        <Fragment>
            {showModal ?
                <Modal openModal={openModal} content={content}/>
                : null
            }
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
                <div className="card-container">
                    <div className="card-imageContainer">
                        <img alt="mobile" className="card-image" src={phoneImage}/>
                    </div>
                    <div className="card-textContainer">
                        <p className="text"><span className="text-title">Model:</span> {item.name}</p>
                        <p><span className="text-title">Manufacturer:</span> {item.manufacturer}</p>
                        <p><span className="text-title">Price:</span> {item.price}</p>
                    </div>
                    <CardFooter showModalFunction={openModal} flipFunction={flipCard}/>
                </div>
                <div className="card-backContainer">
                    <p><span className="text-title">Description:</span> {item.description}</p>
                    <p><span className="text-title">Color:</span> {item.color}</p>
                    <p><span className="text-title">Processor:</span> {item.processor}</p>
                    <p><span className="text-title">Ram:</span> {item.ram}</p>
                    <p><span className="text-title">Screen:</span> {item.screen}</p>
                    <Button flipFunction={flipCard} text="Volver atrás"/>
                </div>
            </ReactCardFlip>
        </Fragment>
    )
}

export default PhoneCard;