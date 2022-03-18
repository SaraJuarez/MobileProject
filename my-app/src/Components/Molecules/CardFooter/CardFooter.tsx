import React from "react";
import "./cardFooter.css";
import Button from "../../Atoms/Button/Button";

interface Props {
    flipFunction: any,
    showModalFunction: any
}   

function CardFooter (props: Props) {
    const { flipFunction, showModalFunction } = props;

    return(
        <div className="cardFooter-container">
            <Button text="Editar" flipFunction={showModalFunction}/>
            <Button text="Borrar" flipFunction={flipFunction}/>
            <Button text="Ver más" flipFunction={flipFunction}/>
        </div>
    )
}

export default CardFooter;