import React from 'react';

import Article from './Article';
import Hot from './Hot';
import PopularAndReview from './Popular&Review';



const Home = () => {
    return(
        <div className='ui two column grid container'>
            <div className='column'><Article /></div>
            <div className='column'>
                <Hot/>
                <PopularAndReview titr="Most Popular"/>
                <PopularAndReview titr="Movie Reviews"/>
            </div>
        </div>
    );
};

export default Home;