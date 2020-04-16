import React, { useState } from "react";
import "./styles/App.scss";
import axios from "axios";

const Search = () => {

// takes information written in input field.
  const handleChange = (e) => {
    e.preventDefault();
    const lookUp = e.target.value;
    setSearchTerm(lookUp);
    return lookUp;
  };

  // useState for searcing the term in the search box
  const [searchTerm, setSearchTerm] = useState("");

  // useState for submitting the form and getting a result
    const [word, setWord] = useState("")
    const [definitions, setDefinitions] = useState("")


  const handleSubmit = (e) => {
    const thesKey = "0bebbce6-ec99-40ee-8c2b-9f15a76caa72";
    const apiURL = `https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${searchTerm}?key=${thesKey}`;
      e.preventDefault();
      
    axios({
      method: "GET",
      url: apiURL,
      dataResponse: "json",
    }).then((res) => {
        // setSearchResult(res.data);
        res.data.map(wordInfo => {
            // console.log(wordInfo.meta.syns)
            const wordArray = Object.values(wordInfo)
            setWord(wordInfo.hwi.hw)

            if (wordInfo.hwi.hw === searchTerm) {
                const defsArray = wordInfo.shortdef;
                // console.log(defsArray)
                setDefinitions(defsArray)
                
                const syns = wordInfo.meta.syns;
                syns.map(synWords => {
                    synWords.map(wordsLol => {
                        // console.log(def,wordsLol)
                        
                    })
                })
            }
        })
    });
  };

return (
  <div>
    <div className="searchForm">
      
      <form action="" onSubmit={handleSubmit} class="wrapper">
        <label htmlFor="searchBox">Search a word</label>
        <input type="text" id="searchBox" onChange={handleChange} />
        <input type="submit" value="Search me!" />
      </form>
    </div>
        <div className="wordInfo">
          
        </div>
  </div>
);
};

export default Search;
