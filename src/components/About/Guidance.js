import React from 'react';

const Guidance = () => {
    return (
        <div style={{fontFamily: "mu-bolder, Arial, Helvetica, sans-serif", marginBottom: "200px"}}>
            <h1 style={{fontSize: "32px", textAlign: "center"}}>Guidance Of The Sections And Their Names</h1>
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
                  I agree it's kind of confusing at first, but once you get used to it, it's not anymore! I'll explain it in this section.
                  Compare these names with those in the Home page.
                </div>
                <div className="ui cards" style={{marginLeft: "250px", marginTop: "30px"}}>
                    <div className="card" style={{margin: "10px"}}>
                        <div className="content">
                        <div className="header">1.The Newest</div>
                        <div className="description">
                        You can get links and metadata for Times' articles as soon as they are published on NYTimes.com. The Times API provides an up-to-the-minute stream of published articles.
                        </div>
                        </div>
                    </div>
                    <div className="card" style={{margin: "10px"}}>
                        <div className="content">
                        <div className="header">2. Hot News</div>
                        <div className="description">
                        The hotest articles by World category. Most viewed in past 48 hours. You can click on the image when they show up and go to the NYT to see it.</div>
                        </div>
                    </div>
                </div>
                <div className="ui cards" style={{marginLeft: "250px", marginTop: "10px"}}>
                    <div className="card" style={{margin: "10px"}}>
                        <div className="content">
                        <div className="header">3. The most Popular</div>
                        <div className="description">
                        The most popular articles in 2 days. Good shit! you can see moment they've published on the site by checking the published date below them.</div>
                        </div>
                    </div>
                    <div className="card" style={{margin: "10px"}}>
                        <div className="content">
                        <div className="header">4. Movie Reviews</div>
                        <div className="description">
                        I think there is no explanation for that. Be aware of what Critics said about the movie before you watch it.</div>
                        </div>
                    </div>
                </div>

        </div>
    );
};

export default Guidance;