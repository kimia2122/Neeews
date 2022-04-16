import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import nytimes from '../../../API/nytimes';
import './costumseg.css';

const Movieapi = () => {

    let Movie = useParams();
    const [Movies, setMovies] = useState([]);

    useEffect(() => {
        SearchMovies()
    },[]);

    const SearchMovies = async () => {
        const response = await nytimes.get('/everything', {
            params: {
                q: "movie",
                id: Movie
            }
        });
        setMovies(response.data.articles);
        return [Movies];
    };

    const renderList = Movies.map((article, index) => {
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
            <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>All Result For Movie</h1>
            <div style= {{marginLeft: "250px"}}>{renderList}</div>
        </div>
    );
};

export default Movieapi;