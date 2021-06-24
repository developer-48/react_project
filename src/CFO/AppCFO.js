import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import CFODash from './CFODash';
import CFOSV from './CFOSV';
import './CFO.css'


export default function AppBdds(){
  const ActiveDash = () =>{
    document.getElementById("navbar_dash").classList.add("navbarActive");
    document.getElementById("navbar_svod").classList.remove("navbarActive");
  }
   const ActiveSvod = () =>{
    document.getElementById("navbar_svod").classList.add("navbarActive");
    document.getElementById("navbar_dash").classList.remove("navbarActive");
  }
    return (
      <BrowserRouter>
        <div className = "dashContent">
          
                  <Switch>
                    <Route path = "/AppCFO">
                      <CFODash/>
                    </Route>
                    <Route path='/CFOSV'>
                        <CFOSV/>
                    </Route>
                  </Switch> 
            
            <div className="navbar">
              <div id = "navbar_dash" className = "navbarActive" ><Link to= '/appcfo' onClick= {ActiveDash}>Дашборд</Link></div>
                <div id = "navbar_svod"><Link to= '/cfosv' onClick= {ActiveSvod}>Сводная</Link></div>
              </div>
        </div>
      </BrowserRouter>
    )
}