import React, {useState} from "react";
import "./card.css";
import phoneImage from '../../../assets/images/samsungGalaxy.jpg';
import ReactCardFlip from 'react-card-flip';
import CardFooter from "../../Molecules/CardFooter/CardFooter";
import Button from "../../Atoms/Button/Button";

/*  interface Props {
    item: CollectionType,
    edition?: boolean,
    styles?: any
} */

function PhoneCard () {
    const [isFlipped, setIsFlipped] = useState(false);

    function flipCard () {
        setIsFlipped(!isFlipped)
    }

    return(
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className="card-container">
            <div className="card-imageContainer">
                <img alt="mobile" className="card-image" src={phoneImage}/>
            </div>
            <div className="card-textContainer">
                <p>Modelo: Samsung Galaxy</p>
                <p>Marca: Samsung</p>
                <p>Precio: 300 euros</p>
            </div>
            <CardFooter flipFunction={flipCard}/>
        </div>
        <div className="card-backContainer">
            <p>Creador por: blablaba</p>
            <p>Creador por: blablaba</p>
            <p>Creador por: blablaba</p>
            <p>Creador por: blablaba</p>
            <Button flipFunction={flipCard} text="Volver atrás"/>
        </div>
        </ReactCardFlip>
    )
}

export default PhoneCard;