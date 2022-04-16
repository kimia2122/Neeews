import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import nytimes from '../../../API/nytimes';
import './costumseg.css';

const Worldapi = () => {

    let Worlds = useParams();
    const [World, setWorld] = useState([]);

    useEffect(() => {
        SearchWorld()
    },[]);

    const SearchWorld = async () => {
        const response = await nytimes.get('/everything', {
            params: {
                q: "world",
                id: Worlds
            }
        });
        setWorld(response.data.articles);
        return [World];
    };

    const renderList = World.map((article, index) => {
        return(
            <div key={index}>
                <div className="ui items">
                    <div className='ui segment cseg'>
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
            <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>All Result For World</h1>
            <div style= {{marginLeft: "250px"}}s>{renderList}</div>
        </div>
    );
};

export default Worldapi;