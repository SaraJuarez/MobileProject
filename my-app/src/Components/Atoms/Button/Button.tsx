import React from "react";
import "./button.css";

interface Props {
    text: string,
    flipFunction: any
}   

function Button (props: Props) {
    const {text, flipFunction} = props;

    return(
        <div onClick={flipFunction}  className="button-container">
            <p className="button-text">{text}</p>
        </div>
    )
}

export default Button;