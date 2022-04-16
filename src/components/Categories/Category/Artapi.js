import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import nytimes from '../../../API/nytimes';
import './costumseg.css';

const Artapi = () => {
     
    let Art = useParams();
    
    const [Arts, setArts] = useState([]);

    useEffect(() => {
        SearchArts()
    },[]);

    const SearchArts = async () => {
        const response = await nytimes.get('/everything', {
            params: {
                q: "art",
                id: Art
            }
        });
        setArts(response.data.articles);
        return [Arts];
    };

    const renderList = Arts.map((article, index) => {
        return(
            <div key={index}>
                <div className="ui items">
                    <div className='ui segment cseg' style={{marginBottom: "20px"}}>
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
        <div className='ui container'>
            <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>All Result For Art</h1>
            <div style= {{marginLeft: "250px"}}>{renderList}</div>
        </div>
    );
};

export default Artapi;