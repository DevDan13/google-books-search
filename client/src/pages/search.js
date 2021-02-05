// import axios from 'axios';
import React,{useState, useEffect} from 'react'
import API from "../utils/API";


function Search() {
    const [search, setSearch] = useState("");
    const [googleBooks, setGoogleBooks] = useState([]);

    const handleInputChange = (event) => {
        setSearch(event.target.value)
        // console.log(search);
    }
    const handleBtnClick = () => {
        API.getGoogleBooks(search)
        .then(res => {
            //console.log(res);
            setGoogleBooks(res.data.items);
        });
    }

    console.log(googleBooks);
    return (
        <div>
            <p>Here</p> 
            <input placeholder="Search Book" onChange={handleInputChange}/>
            <button onClick={handleBtnClick}>
                Search
            </button>


        </div>
    )
}

export default Search
