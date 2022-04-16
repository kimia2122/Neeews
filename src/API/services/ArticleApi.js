import {useEffect, useState} from 'react';
import nytimes from '../nytimes';

const ArticleApi = () => {

    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        renderArticles()
    },[]);
    
    const renderArticles = async () => {
        const response = await nytimes.get('top-headlines?sources=techcrunch', {
            params: {
                sortBy: "popularity"
            }
        });
        setArticles(response.data.articles);
        return [Articles];
    };
    return  [Articles];
};

export default ArticleApi;