import React from 'react';
import './cardFooter.css';
import Button from '../../Atoms/Button/Button';

interface Props {
    flipFunction: any,
    showModalFunction: any
}   

function CardFooter (props: Props) {
    const { flipFunction, showModalFunction } = props;

    return(
        <div className='cardFooter-container'>
            <Button text='Edit' onClickFunction={()=>showModalFunction('edit')}/>
            <Button text='Delete' onClickFunction={()=>showModalFunction('delete')}/>
            <Button text='More' onClickFunction={flipFunction}/>
        </div>
    )
}

export default CardFooter;