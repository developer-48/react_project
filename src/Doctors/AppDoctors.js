import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import DoctorsSV from './DoctorsSV';
import DoctorsDash from './DoctorsDash';
import DoctorsCreate from './DoctorsCreate';
import './Doctors.css'

export default class AppDoctors extends React.Component{
    ActiveDash(){
      document.getElementById("navbar_dash").classList.add("navbarActive");
      document.getElementById("navbar_svod").classList.remove("navbarActive");
      document.getElementById("navbar_create").classList.remove("navbarActive");
      }
    ActiveSvod(){
      document.getElementById("navbar_svod").classList.add("navbarActive");
      document.getElementById("navbar_dash").classList.remove("navbarActive");
      document.getElementById("navbar_create").classList.remove("navbarActive");
      }
    ActiveCreate(){
      document.getElementById("navbar_create").classList.add("navbarActive");
      document.getElementById("navbar_svod").classList.remove("navbarActive");
      document.getElementById("navbar_dash").classList.remove("navbarActive");
      }
    render(){
        return(
            <BrowserRouter>
          <div id = 'Doctors' >
            
                    <Switch>
                      <Route path = "/AppDoctors">
                        <DoctorsDash />
                      </Route>
                      <Route path='/DoctorsSV'>
                          <DoctorsSV/>
                      </Route>
                      <Route path='/DoctorsCreate'>
                          <DoctorsCreate/>
                      </Route>
                    </Switch> 
              
              <div className="navbar">
              <div id = "navbar_dash" className = "navbarActive" ><Link to= '/appdoctors' onClick= {this.ActiveDash}>Дашборд</Link></div>
                <div id = "navbar_svod"><Link to= '/doctorssv' onClick= {this.ActiveSvod}>Сводная</Link></div>
                <div id = "navbar_create"><Link to= '/doctorscreate' onClick= {this.ActiveCreate}>Нормативы</Link></div>
              </div>
          </div>
          </BrowserRouter>
        )
    }
}