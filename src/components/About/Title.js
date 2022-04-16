import React from 'react';
import background from '../../assets/about1-3b8d28c152afba234fa837d8a7fb58db.svg';


const Title = () => {
    return (
        <div style={{fontFamily: "mu-bolder, Arial, Helvetica, sans-serif", backgroundImage: `url(${background})`, backgroundSize: "cover" }}>
           <div style={{marginTop: "150px", marginBottom: "200px"}}>
                <h3 style={{fontSize: "60px", textAlign: "center",color: "black"}}>
                    About this Website!
                </h3>
                <div
                 style={{
                     color: "rgb(102, 102, 102)",
                     fontSize: "24px",
                     width: "840px",
                     textAlign: "center",
                     marginLeft: "150px",
                     marginTop: "30px",
                     lineHeight: "1.5"
                 }}>
                  Get the news the moment they are on New York Times. Click on a article, immediately go and read them where they're actually published.
                </div>
                <button className="ui blue button" style={{marginLeft: "500px", marginTop: "30px"}}>Read  About</button>
            </div>
        </div>
    );
};

export default Title;