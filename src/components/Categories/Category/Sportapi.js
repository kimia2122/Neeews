import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import nytimes from '../../../API/nytimes';
import './costumseg.css';


const Sportapi = () => {

    let Sport = useParams();

    const [Sports, setSports] = useState([]);

    useEffect(() => {
        SearchSports()
    },[]);

    const SearchSports = async () => {
        const response = await nytimes.get('/everything', {
            params: {
                q: "sport",
                id: Sport
            }
        });
        setSports(response.data.articles);
        return [Sports];
    };

    const renderList = Sports.map((article, index) => {
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
            <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>All Result For Sports</h1>
            <div style= {{marginLeft: "250px"}}>{renderList}</div>
        </div>
    );
};

export default Sportapi;