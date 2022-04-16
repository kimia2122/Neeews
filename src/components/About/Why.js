import React from 'react';

const Why = () => {
    return (
        <div style={{fontFamily: "mu-bolder, Arial, Helvetica, sans-serif", marginBottom: "200px"}}>
            <h1 style={{fontSize: "32px", textAlign: "center"}}>Why Should I Choose This Website?</h1>
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
                  Well, numbers don't lie. Here you can see the site's performance.Fabulous, isn't it? 😅
                </div>
                <div className='ui three column grid' style={{marginLeft: "100px", marginTop: "30px"}}>
                    <div className='row'>
                        <div className='column'>
                        <img
                        className="ui medium circular image"
                        src={require ('../../assets/Asset 1-8.png')} 
                        style={{width: "120px", marginTop: "30px", marginLeft: "40px"}}
                        />
                        <div  style={{textAlign: "center", marginTop: "20px", width: "200px"}}>
                            <h3>Real Experience Score</h3>
                            <div>By 309 users</div>
                            <br />
                            <div>The combined score of the Web Vitals experienced by the visitors.</div>
                        </div>
                        </div>
                        <div className='column ui cards'style={{marginTop: "10px"}}>
                            <div className="card" style={{margin: "20px", height: "120px"}}>
                                <div className="content">
                                <div className="description" style={{fontSize: "12px", color: "gray"}}>
                                First Contentful Paint
                                </div>
                                <div className="header" style={{fontSize: "32px", color: "blue" }}>2.3 s</div>
                                <div className="description">
                                When the pages first content is displayed.</div>
                                </div>
                            </div>
                            <div className="card" style={{margin: "20px", height: "120px"}}>
                                <div className="content">
                                <div className="description" style={{fontSize: "12px", color: "gray"}}>
                                First Input Delay
                                </div>
                                <div className="header" style={{fontSize: "32px", color: "blue" }}>40 s</div>
                                <div className="description">
                                The pages time to react to the users first interaction.</div>
                                </div>
                            </div>
                        </div>
                        <div className='column ui cards'>
                            <div className="card" style={{margin: "20px", height: "120px"}}>
                                <div className="content">
                                <div className="description" style={{fontSize: "12px", color: "gray"}}>
                                Largest Contentful Paint
                                </div>
                                <div className="header" style={{fontSize: "32px", color: "blue" }}>3.5 s</div>
                                <div className="description">
                                When all the pages content has been displayed.</div>
                                </div>
                            </div>
                            <div className="card" style={{margin: "20px", height: "120px"}}>
                                <div className="content">
                                <div className="description" style={{fontSize: "12px", color: "gray"}}>
                                Cumulative Layout Shift
                                </div>
                                <div className="header" style={{fontSize: "32px", color: "blue" }}>0.1 s</div>
                                <div className="description">
                                How much the pages elements move when loaded.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Why;