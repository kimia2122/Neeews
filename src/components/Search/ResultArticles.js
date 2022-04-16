import React from 'react';
import '../Categories/Category/costumseg.css';

const ResultArticles = ({Articles}) =>{

    const renderList = Articles.map((article, index) => {
        return (
            <div key={index} className="ui container">
                <div className="ui items" >
                    <div className='cseg'>
                    <div className='ui segment'>
                            <div className="ui middle aligned tiny image ">
                            <img src={article.urlToImage}/>
                            </div>
                            <div className="content">
                                <a className="ui meduim header" href={article.url}>{article.title}</a>
                                <div className="description">
                                    <p>{article.description}</p>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
                <br></br> 
            </div>
        );
    });

    return(
        <div style= {{marginLeft: "450px"}}>{renderList}</div>
    );
};

export default ResultArticles;