import React from 'react';
import './Titles.css';
import ArticleApi from '../../API/services/ArticleApi';

const Article = () => {

    const [Articles] = ArticleApi();
    const renderList = Articles.map((article, index) => {
        return(
            <div key={index}>
                <div className="ui items">
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
                <br></br> 
            </div>
        );
    });

        return (
            <div>
                <div className='titles'>
                  <h2 className='ui dividing header'>The Newest Articles</h2>
                </div>
                {renderList}
            </div>
        );
};

export default Article;