import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import DocIndicatorsDash from './DocIndicatorsDash';
import './DocIndicators.css';

export default function AppDocindicators(){
  const ActiveDash = () =>{
    document.getElementById("navbar_dash").classList.add("navbarActive");
    document.getElementById("navbar_svod").classList.remove("navbarActive");
  }
  const ActiveSvod = () =>{
    document.getElementById("navbar_svod").classList.add("navbarActive");
    document.getElementById("navbar_dash").classList.remove("navbarActive");
  }  
    return (
        <div className = 'dashContent'>
            <DocIndicatorsDash />
        </div>
    )
}