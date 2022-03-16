import React from "react";
import './home.css';
import Card from "../../Components/Organisms/Card/Card";
function Home () {

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