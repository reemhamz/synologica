import React, { Component, useState, useEffect, useForm } from 'react';
import './App.css';
import axios from 'axios';
// import useForm from "react-hook-form"

const Search = () => {
    
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false)
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
                    console.log(result)
                })
    }, [searchTerm]);

    if (loading) {
        return <p>Loading explanations...</p>
    }

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        console.log(e.target.value)
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("idk what im testeing",handleChange())
        console.log(`submitting ${searchTerm}`)
    }

    return (
        <div>
            {searchTerm}
            <form action="">
                <input type="text" placeholder="search a word" onChange={handleChange}/>
                <input type="submit" value="Search me!" onSubmit={handleSubmit}/>
        </form>
    </div>
    )
} 

export default Search;