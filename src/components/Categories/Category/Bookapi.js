import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import nytimes from '../../../API/nytimes';
import './costumseg.css';

const Bookapi = () => {

    let Book = useParams();
    const [Books, setBooks] = useState([]);
    
    useEffect(() => {
        SearchBooks()
    },[]);
  
    const SearchBooks = async () => {
        const response = await nytimes.get('/everything', {
            params: {
                q: "book",
                id: Book
            }
        });
        setBooks(response.data.articles);
        return [Books];
    };

    const renderList = Books.map((article, index) => {
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
            <h1 style={{fontSize: "64px", textAlign: "center", marginTop: "100px"}}>All Result For Book</h1>
            <div style= {{marginLeft: "250px"}}>{renderList}</div>
        </div>
    );
};
export default Bookapi;