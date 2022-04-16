import React, { useState } from 'react';

const SearchBar = ({onFormSubmit}) => {

    const [term, setTerm] = useState([]);

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
      };

    return (
        <div>
            <div className="ui container">
                
                <h2 
                style={{
                    textAlign: 'center',
                    color: 'black',
                    fontFamily: 'mu-bolder, Arial, Helvetica, sans-serif',
                    fontSize: '65px',
                    alignItems: 'center',
                    paddingTop: '150px'
                }}
                >
                    NEEEWS
                </h2>
                <form className="ui search"
                      onSubmit={onSubmit}
                      style={{padding: '30px', marginLeft: "270px"}}
                >
                    <div className="ui icon input" style={{width: '500px'}}>
                        <input 
                        className="prompt"
                        type="text"
                        placeholder="Search for an article or event ..."
                        onChange={(event) => setTerm(event.target.value)}
                        value={term}
                        />
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchBar;