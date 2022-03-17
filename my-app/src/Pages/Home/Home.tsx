import React, {useState, useEffect} from "react";
import './home.css';
import Card from "../../Components/Organisms/Card/Card";
import {getAllPhones} from "../../api/index";
function Home () {

    const [phonesList, setPhonesList] = useState([]);

    const getPhonesInfo = async() => {
        let phonesInfo = await getAllPhones();
        console.log(phonesInfo)
        setPhonesList(phonesInfo)
    }
      

    useEffect(() => {
        getPhonesInfo()
    }, [])

    let items = [
        'lalala',
        'lololo',
        'lululu'
    ]
    return(
        <div className="home-container">
            <header className="home-header">
                <h1>Phone Catalogue</h1>
                <small>Discover what phone suits you!</small>
            </header>
            <div className="home-grid">
                
                <Card/>
            {items.map((item, index)=> {
                return(
                    <p>{item}</p>
                )
            })}
            </div>
        </div>
    )
}

export default Home;