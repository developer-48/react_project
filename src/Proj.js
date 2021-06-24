import React, {useState} from 'react';
import AppBdds from './BDDS/AppBdds';
import AppDoctors from './Doctors/AppDoctors';
import AppCFO from './CFO/AppCFO';

import AppSpecMedLeasing from './SpecMedLeasing/AppSpecMedLeasing';
import AppDocindicators from './DocIndicators/AppDocIndicators';
import AppDocIndicatorsServices from './DocIndicatorsServices/AppDocIndicatorsServices';
import AppDocIndicatorsSumm from './DocIndicatorsSumm/AppDocIndicatorsSumm';
import AppDocIndicatorsPatients from './DocIndicatorsPatients/AppDocIndicatorsPatients';
import AppBranchesIndicatorsServices from './BranchesIndicatorsServices/AppBranchesIndicatorsServices';
import AppBranchesIndicatorsSumm from './BranchesIndicatorsSumm/AppBranchesIndicatorsSumm';
import AppBranchesIndicatorsPatients from './BranchesIndicatorsPatients/AppBranchesIndicatorsPatients';
import './index.css';
import './Home.css';
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import * as am4core from "@amcharts/amcharts4/core";

am4core.options.autoDispose = true;
//localStorage.clear()
// console.log(localStorage)
export default function Proj() {
    return (
        <div className='main'>
            <BrowserRouter>
                <div className="mainHome">
                    <header id = "header">
                        <Link to='/'> <div className="logo">Лого</div></Link>
                        <div className="lk">
                            <img src="img/потребите-ь-персона-вектор-значка-учета-запо-ни-п-оский-знак-твер-ую-95992530.jpg" alt="" className="avatar"/>
                        </div>                        
                    </header>
                    <Switch>
                        <Route path='/AppBdds'>
                           <AppBdds />
                        </Route>
                        <Route path="/AppDoctors">
                           <AppDoctors />                 
                        </Route>
                        <Route path="/AppCFO">
                           <AppCFO />                    
                        </Route>
                        <Route path="/AppDocindicators">
                            <AppDocindicators />         
                        </Route>
                        <Route path="/AppDocIndicatorsServices">
                            <AppDocIndicatorsServices />  
                        </Route>
                        <Route path="/AppDocIndicatorsPatients">
                            <AppDocIndicatorsPatients />  
                        </Route>
                        <Route path="/AppDocIndicatorsSumm">
                            <AppDocIndicatorsSumm />       
                        </Route>
                        <Route path="/AppBranchesIndicatorsServices">
                           <AppBranchesIndicatorsServices />
                        </Route>
                        <Route path="/AppBranchesIndicatorsSumm">
                            <AppBranchesIndicatorsSumm />
                        </Route>
                        <Route path="/AppBranchesIndicatorsPatients">
                            <AppBranchesIndicatorsPatients />                            
                        </Route>
                        <Route path="/AppSpecMedLeasing">
                            <AppSpecMedLeasing />                    
                        </Route>                        
                        <Route path='/'>                                                     
                            <div>
                                <div id='content'>
                                    <div className="title">Отчеты</div>
                                    <div className="content__text">
                                        <p>Графики</p>
                                    </div>
                                        <div className = "reports">
                                            <Link to='/appbdds' >
                                                <div className="char topchar">
                                                    <img src="img/BDDS.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appdoctors'>
                                                <div className="char topchar">
                                                    <img src="img/Doctors.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appcfo'>
                                                <div className="char topchar">
                                                    <img src="img/CFO.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appspecmedleasing'>
                                                <div className="char">
                                                    <img src="img/SpecmedLeasing.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appdocindicators'>
                                                <div className="char">
                                                    <img src="img/DocIndicators.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appdocindicatorspatients'>
                                                <div className="char">
                                                    <img src="img/DocIndicatorsPatients.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appdocindicatorssumm'>
                                                <div className="char">
                                                    <img src="img/DocIndicatorsSumm.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appdocindicatorsservices'>
                                                <div className="char">
                                                    <img src="img/DocIndicatorsServices.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appbranchesindicatorspatients'>
                                                <div className="char">
                                                    <img src="img/BranchesIndicatorsPatients.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appbranchesindicatorssumm'>
                                                <div className="char">
                                                    <img src="img/BranchesIndicatorsSumm.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                            <Link to='/appbranchesindicatorsservices'>
                                                <div className="char">
                                                    <img src="img/BranchesIndicatorsServices.svg" alt="" className="char_date" />
                                                </div>
                                            </Link>
                                        </div>
                                    <footer>
                                        <p>© 2021 ---------------</p>
                                        <p>Политика конфиденциальности</p>
                                    </footer>
                                </div>
                            </div>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}