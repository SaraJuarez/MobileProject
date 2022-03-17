import React, {useState, useEffect} from "react";
import './home.css';
import Card from "../../Components/Organisms/Card/Card";
import {getAllPhones, createNewPhone} from "../../api/index";
function Home () {

    const [phonesList, setPhonesList] = useState([]);

    const getPhonesInfo = async() => {
        let phonesInfo = await getAllPhones();
        setPhonesList(phonesInfo)
    }
      
    useEffect(() => {
        createNewPhone()
        getPhonesInfo()
    }, [])

    return(
        <div className="home-container">
            <header className="home-header">
                <h1>Phone Catalogue</h1>
                <small>Discover what phone suits you!</small>
            </header>
            <div className="home-grid">
                {phonesList.map((item, index)=> {
                    return(
                        <Card key={index} item={item}/>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;