import React, { useContext, useState } from "react";
import { Context } from "../context";
import { Input, SubmitButton } from "../components/AuthForm/AuthFormStyles";
import axios from "axios";
import { toast } from "react-toastify";
import USAMap from "react-usa-map";
import { YearPicker, MonthPicker, DayPicker } from "react-dropdown-date";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Switch from "react-switch";
import { TimePicker } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import Popup from './popup';
import Topbar from '../components/topbar/topbar'
import Sidebar from '../components/sidebar/sidebar'
import Feed from "../components/feed/feed";
import Rightbar from "../components/rightbar/Rightbar"



const LandingPage = () => {
	console.log("landing page")
	return (
        <>
        <Topbar />
        <div>
            <Sidebar />
            <Feed />
            <Rightbar />
        </div>
        </>
        
    );
}


export default LandingPage;
