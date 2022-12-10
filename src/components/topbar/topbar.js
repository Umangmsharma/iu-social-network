import "./topbar.css"
import SearchBar from "./searchbar.js"
import React from 'react'
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

const saved = window.localStorage.getItem("user");
const username = JSON.parse(saved).name


export default function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">IU Social</span>
            </div>
            <div style={{color: "white"}}>
                Hello {username} !
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    {/* <input placeholder="Search for friend, post or video" className="searchInput"/>  */}
                    <SearchBar/>
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
    )
}