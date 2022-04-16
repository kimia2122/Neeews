import React from "react";
import History from "../History";

const Categories = () => {

    return (
            <div className='ui container'>
                <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>Select A Category</h1>
                <div className="ui three column grid" style={{marginTop: "30px"}}>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Art")}}>
                            <div className="content">
                                <div className="header">Arts</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/alice-donovan-rouse-yu68fUQDvOI-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Sport")}}>
                            <div className="content">
                                <div className="header">Sports</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/jose-francisco-morales-hKzmPs8Axh8-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Book")}}>
                            <div className="content">
                                <div className="header">Books</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/daria-nepriakhina-xY55bL5mZAM-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Food")}}>
                            <div className="content">
                                <div className="header">Foods</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/lily-banse--YHSwy6uqvk-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Movie")}}>
                            <div className="content">
                                <div className="header">Movies</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/tyson-moultrie-BQTHOGNHo08-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Healthy")}}>
                            <div className="content">
                                <div className="header">Health</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/vitalii-pavlyshynets-kcRFW-Hje8Y-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/United")}}>
                            <div className="content">
                                <div className="header">US</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/markus-gjengaar-9h-e_uD3mG4-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Technology")}}>
                            <div className="content">
                                <div className="header">Technology</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/possessed-photography-g29arbbvPjo-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="ui fluid card" onClick={() => {History.push("Categories/Worlds")}}>
                            <div className="content">
                                <div className="header">Worlds</div>
                            </div>
                            <div className="image">
                                <img src={require ('../../assets/christian-lue-7dEyTJ7-8os-unsplash.png')}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Categories;