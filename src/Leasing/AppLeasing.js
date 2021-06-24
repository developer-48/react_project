import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import LeasingDash from './LeasingDash';
import LeasingSV from './LeasingSV'
import './Leasing.css';

export default function Leasing(){
    const ActiveDash = () =>{
        document.getElementById("navbar_dash").classList.add("navbarActive");
        document.getElementById("navbar_svod").classList.remove("navbarActive");
      }
    const ActiveSvod = () =>{
    document.getElementById("navbar_svod").classList.add("navbarActive");
    document.getElementById("navbar_dash").classList.remove("navbarActive");
    }
    return (
        // <BrowserRouter>
            <div className = "dashContent">
                {/* <Switch>
                <Route path = "/AppLeasing"> */}
                    <LeasingDash/>
                {/* </Route>
                <Route path='/LeasingSV'>
                    <LeasingSV/>
                </Route>
                </Switch>  */}
                {/* <div className="navbar">
                    <div id = "navbar_dash" className = "navbarActive" ><Link to= '/appleasing' onClick= {ActiveDash}>Дашборд</Link></div>
                    <div id = "navbar_svod"><Link to= '/leasingsv' onClick= {ActiveSvod}>Сводная</Link></div>
                </div> */}
            </div>
        // </BrowserRouter>
    )
}