import React from 'react';

const Aboutme = () => {
    return (
        <div style={{fontFamily: "mu-bolder, Arial, Helvetica, sans-serif", marginBottom: "200px"}}> 
            <h1 style={{fontSize: "32px", textAlign: "center"}}>About Me</h1>
            <div
                 style={{
                     color: "rgb(102, 102, 102)",
                     fontSize: "16px",
                     width: "840px",
                     textAlign: "center",
                     marginLeft: "150px",
                     marginTop: "30px",
                     lineHeight: "1.5"
                 }}>
                  Some information about me in case you wanna contact me.
                </div>
                <h1 style={{fontSize: "32px", marginTop: "50px"}}>Kimia Abbasi</h1>
                <div
                 style={{
                     color: "rgb(102, 102, 102)",
                     fontSize: "16px",
                     width: "840px",
                     marginTop: "30px",
                     lineHeight: "1.5"
                 }}>
                Get in touch with me if you want to make a website for your team, or need help on a project.
                <a className="ui button" href="mailto:kimiaerebous2122@gmail.com"style={{ marginLeft: "70px"}}>Contact me</a>
                </div>
                
        </div>
    );
};

export default Aboutme;