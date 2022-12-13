import React from "react";



const Search = ({onSearchChange , value}) => 
        <form classname="App">
            <input onChange={onSearchChange} value={value} type="text" />
        </form>;


export default Search;