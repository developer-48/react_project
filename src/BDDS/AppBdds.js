import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import BddsSV from './BddsSV';
import BddsDash from './BddsDash';
import './Bdds.css';

export default class AppBdds extends React.Component{
  ActiveDash(){
    document.getElementById("navbar_dash").classList.add("navbarActive");
    document.getElementById("navbar_svod").classList.remove("navbarActive");
  }
  ActiveSvod(){
    document.getElementById("navbar_svod").classList.add("navbarActive");
    document.getElementById("navbar_dash").classList.remove("navbarActive");
  }  
  render(){
      return (
        <BrowserRouter>
          <div id = 'Bdds' >
                    <Switch>
                      <Route path = "/AppBdds">
                        <BddsDash />
                      </Route>
                      <Route path='/BddsSV'>
                          <BddsSV/>
                      </Route>
                    </Switch>
              <div className="navbar">
                <div id = "navbar_dash" className = "navbarActive" ><Link to= '/appbdds' onClick= {this.ActiveDash}>Дашборд</Link></div>
                  <div id = "navbar_svod"><Link to= '/bddssv' onClick= {this.ActiveSvod}>Сводная</Link></div>
                </div>
          </div>
        </BrowserRouter>
      )
  }
}

