import React, {useState} from 'react'
import "./topbar.css"
import "./searchbar.css"
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Search, Person, Chat, Notifications } from "@mui/icons-material"


const IndividualSearchBar = () => {
const { state } = useLocation();
const {search} = state;

const [searchInput, setSearchInput] = useState("");
const [searchList, setSearchList] = useState([]);
const [searchSelect, setSearchSelect] = useState("");
const [flagValue, setFlagValue] = useState(false);

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
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">IU Social</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    {/* <input placeholder="Search for friend, post or video" className="searchInput"/>  */}
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
                        </div>
                    </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">5</span>
                </div>
            </div>
        </div>
    <div>
        <ul className='first'>
            <div style={{float: "left"}}>
            <li className="second">All</li>
            <li className="second">People</li>
            <li className="second">Posts</li>
            <li className="second">Pages</li>
            <li className="second">Events</li>
            <li className="second">Photos</li>
            <li className="second">Apps</li>
            <li className="second">Links</li>
            </div> 
        </ul>
    </div>

    </div>
};
export default IndividualSearchBar;