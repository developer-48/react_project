import React from 'react';
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import SpecMedLeasingDash from './SpecMedLeasingDash';
import SpecMedLeasingSV from './SpecMedLeasingSV'
import SpecMedLeasingTerms from './SpecMedLeasingTerms'
import './SpecMedLeasing.css';

export default function Leasing(){
    const SelectNavbar = (index) =>{
        let selectedOn = document.querySelectorAll('.SpecMedLeasingNavbar div')           
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('navbarActive')){
                    selectedOn[i].classList.remove('navbarActive')
                    break;
                }
            }
            selectedOn[index].classList.add('navbarActive');
    }
    return (
        <BrowserRouter>
            <div className = "dashContent">
                <Switch>
                <Route path = "/AppSpecMedLeasing">
                    <SpecMedLeasingDash/>
                </Route>
                <Route path='/SpecMedLeasingTerms'>
                    <SpecMedLeasingTerms/>
                </Route>
                <Route path='/SpecMedLeasingSV'>
                    <SpecMedLeasingSV />
                </Route>
                </Switch> 
                <div className="SpecMedLeasingNavbar">
                    <div className = "SpecMedLeasingNavbar__item navbarActive" ><Link to= '/appspecmedleasing' onClick= {() => {SelectNavbar(0)}}>Дашборд</Link></div>
                    <div className = "SpecMedLeasingNavbar__item" style = {{display : "none"}} ><Link to= '/specmedleasingterms' onClick= {() => {SelectNavbar(1)}}>Сроки</Link></div>
                    <div className = "SpecMedLeasingNavbar__item"><Link to= '/specmedleasingsv' onClick= {() => {SelectNavbar(2)}}>Сводная</Link></div>
                </div>
            </div>
       </BrowserRouter>
    )
}