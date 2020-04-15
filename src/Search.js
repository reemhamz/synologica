import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import useForm from "react-hook-form"





const Search = () => {
    
const handleChange = (e) => {
    e.preventDefault();
    const lookUp = e.target.value
    setSearchTerm(lookUp)
    // console.log(e.target.value)
    return lookUp
}

const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(searchTerm)
    return searchTerm
}

    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResults] = useState('')
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const thesKey = '0bebbce6-ec99-40ee-8c2b-9f15a76caa72';
        const dictKey = 'aabc74eb-3a0d-48c2-aa09-f35372ef16b8';
        const apiURL = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${thesKey}`;

        // axios call to the dictionary api
        axios({
                    method: 'GET',
                    url: apiURL,
                    dataResponse: 'json'
                }).then(result => {
                    // console.log(result)
                    setSearchResults(result)
                })
    }, [searchTerm]);

    if (loading) {
        return <p>Loading explanations...</p>
    }

    

    return (
        <div>
        <div className="searchForm">
            {searchTerm}
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="searchBox">Search a word</label>
                <input type="text" id="searchBox" onChange={handleChange}/>
                <input type="submit" value="Search me!" />
        </form>
            </div>
            
            <div className="wordInfo">
                {
                    // console.log(Object.values(searchResult))
                    Object.values(searchResult).map((word) => {
                        console.log(word)
                    })
                }


            </div>
        </div>
    )
} 

export default Search;