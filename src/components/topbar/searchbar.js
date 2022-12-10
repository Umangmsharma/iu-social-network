import React, {useState} from 'react'
import "./topbar.css"
import "./searchbar.css"
import axios from "axios";
import { Button} from 'react-bootstrap';
import {Routes, Route, useNavigate} from 'react-router-dom';

const SearchBar = () => {
const navigate = useNavigate();

const [searchInput, setSearchInput] = useState("");
const [searchList, setSearchList] = useState([]);
const [searchSelect, setSearchSelect] = useState("");
const [flagValue, setFlagValue] = useState(false);

const navigateSearch=()=>{
    navigate(`/plot/individualsearch` , {
        state: {
            search: searchInput
        }
    });
}

const onOptionChangeHandler=(event) =>{
    console.log("onOptionChangeHandler called---->",event.target.value)
    setFlagValue(true);
    setSearchSelect(event.target.value)
    setSearchList([])
}

const flagChange=()=>{
    console.log("flagChange called---->")
    setFlagValue(false);
}

const handleChange = async (e) => {
    
    e.preventDefault();
    setSearchInput(e.target.value);
    
    var name = e.target.value;
    console.log("name=",name)

    //Api Call
    let {data} = await axios.post(`http://localhost:8000/api/search`, {
        name
    });
    setSearchList(data.name)
    if (name.length==0){
        setSearchList([])
    }

    
    setFlagValue(false);
    console.log("--->",searchList.length,flagValue)
};

return <div>
    <div>
    {flagValue ? <input
        className="searchInputBar"
        onChange={flagChange}
        value={searchSelect} /> : 
        <input
        type="search"
        placeholder="Search for friend, post or video...."
        onChange={handleChange}
        className="searchInputBar"
        value={searchInput} /> 
         } 
    </div>

    <div>
    {searchList.length>0 ? 
    <select value={searchSelect} onChange={onOptionChangeHandler} className="dropdown-menu">
        {searchList.map(function(sl) {
           return <option key={sl}>{sl}</option>
        })} </select> 
    : ""} 
    {searchList.length>0 ? <Button
        onClick={navigateSearch}
        color="grey"
    >See More Items</Button> : ""}

      </div>
</div>

};
export default SearchBar;