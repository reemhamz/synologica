import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
// import useForm from "react-hook-form"


const Search = () => {
    
const handleChange = (e) => {
    e.preventDefault();
    const lookUp = e.target.value
    setSearchTerm(lookUp)
    // console.log(lookUp)
    return lookUp
}



    // useState for searcing the term in the search box
    const [searchTerm, setSearchTerm] = useState('');

    // useState for submitting the form and getting a result
    const [searchResult, setSearchResults] = useState('');

    // useState for the loading screen
    const [loading, setLoading] = useState(false);
    
    const handleSubmit = (e) => {
        const thesKey = '0bebbce6-ec99-40ee-8c2b-9f15a76caa72';
        const dictKey = 'aabc74eb-3a0d-48c2-aa09-f35372ef16b8';
        const apiURL = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${thesKey}`;
        e.preventDefault();
        
        axios({
            method: 'GET',
            url: apiURL,
            dataResponse: 'json'
        }).then(result => {
            
            
            setSearchResults(result)
        })

    }

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
                    
                    Object.values(searchResult).map((word) => {
                        console.log(word)
                    })
                }


            </div>
        </div>
    )
} 

export default Search;