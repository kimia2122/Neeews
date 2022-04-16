import React from 'react';
import History from './History';
import './menu.css';


const Header = () => {
    return(
        <div className='ui container'>
            <div className="ui borderless menu">
                <div className="ui item" onClick={() => History.push("/")}>
                    <img src={require ('../assets/download.png')}/>
                    NEEEWS
                </div>
                <div className="right menu">
                    <div className="item" onClick={() => History.push("/")}>Home</div>
                    <div className="item" onClick={() => History.push("/Categories")}>Categories</div>
                    <div className="item" onClick={() => History.push("/Search")}>Search</div>
                    <div className="item" onClick={() => History.push("/About")}>About</div>
                </div>
            </div>
        </div>
    );
};

export default Header;