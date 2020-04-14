import React, { Component, useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const Search = () => {
    const [searchTerm, setsearchTerm] = useState('')
    useEffect(() => {
        const thesKey = '0bebbce6-ec99-40ee-8c2b-9f15a76caa72';
        const dictKey = 'aabc74eb-3a0d-48c2-aa09-f35372ef16b8';
        const apiURL = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${setsearchTerm}?key=${thesKey}`;
        axios({
                    method: 'GET',
                    url: apiURL,
                    dataResponse: 'json'
                }).then(result => {
                    console.log(result)
                })
    }, []);

    return (
    <div>
            <form action="">
                <input type="text"/>
                <input type="submit" value="Search me!"/>
        </form>
    </div>
    )
} 

export default Search;