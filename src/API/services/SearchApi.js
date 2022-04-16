import { useState } from 'react';
import nytimes from '../nytimes';

const SearchApi = () => {

    const [Articles, setArticles] = useState([]);

    const Search = async (term) => {
        const response = await nytimes.get('/everything', {
            params: {
                q: term
            }
        });
        setArticles(response.data.articles);
    };
    return  [Articles, Search];
};

export default SearchApi;