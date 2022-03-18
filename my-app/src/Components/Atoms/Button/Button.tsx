import React from "react";
import "./button.css";

interface Props {
    text: string,
    onClickFunction: any
}   

function Button (props: Props) {
    const {text, onClickFunction} = props;

    return(
        <div onClick={onClickFunction}  className="button-container">
            <p className="button-text">{text}</p>
        </div>
    )
}

export default Button;