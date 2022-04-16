import React, { useEffect, useState } from "react";
import SearchApi from "../../API/services/SearchApi";
import SearchBar from "./SearchBar";
import ResultArticles from "./ResultArticles";
import background from '../../assets/about1-3b8d28c152afba234fa837d8a7fb58db.svg';


const Search = () => {

    const [Articles, Search] = SearchApi(null);

    return (
        <div className="pusher">
            <div style={{ marginBottom: "300px", backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
               <SearchBar onFormSubmit={Search}/>
               <ResultArticles Articles={Articles}/>
            </div>          
        </div>
    );
};

export default Search;