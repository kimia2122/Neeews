import React from 'react';
import ImageApi from '../../API/services/ImageApi';



const Hot = () => {

    const [Images] = ImageApi();
    
    if (Images.length > 0) {
        return(
            <div>
                <div className='titles'>
                  <h2 className='ui dividing header'>Hot News</h2>
                </div>
                <a className="ui fluid image">
                     <img src={Images[0].urlToImage} />
                </a>
                <h4>{Images[0].title}</h4>
            </div>
        );
    }else {
        return(
            <div>
                <div className='header'>
                  <h2 className='ui dividing header'>Hot News</h2>
                </div>
                <a className="ui big image">
                     <img />
                </a>
            </div>
        );
    }

    
};

export default Hot;