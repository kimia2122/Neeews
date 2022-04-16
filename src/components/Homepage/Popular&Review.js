import React from 'react';
import ArticleApi from '../../API/services/ArticleApi';


const PopularAndReview = (prop) => {

    const [Articles] = ArticleApi();
    const renderCards = Articles.map((article, index) => {
        return(
            <div className='ui ten column grid container' key={index}>
                <div className='ui card' style={{ width: '230px', height: '300px', marginLeft: '10px', marginRight: '10px'}}>
                    <a className="image" href={article.url}>
                        <img src={article.urlToImage}/>
                    </a>
                  <div className="content">
                    <a className="header" href={article.url} style={{fontSize: '16px'}}>{article.title}</a>
                    <div className="meta">
                        <a style={{fontSize: '14px'}}>{article.publishedAt}</a>
                    </div>
                  </div>
                </div>
                <br></br>
            </div>
        );
    });

    
    
    return(
        <div>
            <div className='titles'>
                <h2 className='ui dividing header'>{prop.titr}</h2>
            </div>
            <div style={{display: "flex"}}>
            {renderCards}
            </div>
            
        </div>
    );
};

export default PopularAndReview;