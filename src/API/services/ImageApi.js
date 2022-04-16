import {useEffect, useState} from 'react';
import nytimes from '../nytimes';

const ImageApi = () => {

    const [Images, setImages] = useState([]);

    useEffect(() => {
        renderImage()
    },[]);
    
    const renderImage = async () => {
        const response = await nytimes.get('top-headlines?sources=techcrunch', {
            params: {
                sortBy: "popularity"
            }
        });
        setImages(response.data.articles);
        return [Images];
    };
    return  [Images];
};

export default ImageApi;