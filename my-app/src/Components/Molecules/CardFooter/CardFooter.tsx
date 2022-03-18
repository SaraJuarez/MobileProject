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
            <Button text="Editar" onClickFunction={()=>showModalFunction('edit')}/>
            <Button text="Borrar" onClickFunction={()=>showModalFunction('delete')}/>
            <Button text="Ver más" onClickFunction={flipFunction}/>
        </div>
    )
}

export default CardFooter;