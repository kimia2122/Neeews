import React from 'react';


const Footer = () => {
    
    return(
        <div className='ui container'>
            <div className='ui five column grid container'>
                <div className='column'>
                    <h4>General</h4>
                    <div className="ui link list">
                        <a className="item" href='http://localhost:3000/'>Home</a>
                        <a className="item" href='http://localhost:3000/Categories'>Caregories</a>
                        <a className="item" href='http://localhost:3000/Search'>Search</a>
                        <a className="item" href='http://localhost:3000/About'>About</a>
                    </div>
                </div>
                <div className='column'>
                    <h4>Other Projects</h4>
                    <div className="ui link list">
                        <a className="item" href='https://www.verkoopgarantie.nu/'>verkoop Garantie</a>
                        <a className="item" href='https://kimiaerebous2122.wixsite.com/my-site-k'>My Resume</a>
                    </div>
                </div>
                <div className='column'>
                    <h4>Contact</h4>
                    <div className="ui link list">
                        <a className="item" href="mailto:kimiaerebous2122@gmail.com">kimiaerebous2122@gmail.com</a>
                        <a className="item" href="tel:+98(935)9854434">+98(935)9854434</a>
                        <a className="item" href='https://stackoverflow.com/users/16667659/kimia-erebous'>Stackoverflow</a>
                        <a className="item" href='https://www.linkedin.com/in/kimia-erebous-880109186/'>Linkdin</a>
                    </div>
                </div>
                <div className='column'>
                    <h4>privacy</h4>
                    <div className="ui link list">
                        <a className="item">Nothing here !</a>
                    </div>
                </div>
            </div>
            <br></br>
            <div className='ui middle aligned selection list'>
              <div className='item'>
                 <img className='ui avatar image' src={require ('../assets/download.png')}/>
                 <div className='content'>NEEEWS</div>
              </div>
            </div>
            <div>Copyright © 2022 NewsLand, Inc. All rights reserved.</div>
            <br></br>
        </div>
    );
};

export default Footer;