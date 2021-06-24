import React, { useState } from 'react';
import DocIndicatorsInfoblockLeft from './DocIndicatorsInfoblockLeft';
import DocIndicatorsInfoblock from './DocIndicatorsInfoblock';
import DocIndicatorsGrafOne from './DocIndicatorsGrafOne';
import DocIndicatorsGrafTwo from './DocIndicatorsGrafTwo';
let data = {
    "2019": {
        "pat": [2333, 1678, 875, 1345, 2000, 1600, 1445, 1234, 1500, 1340, 1200, 780],
        "ser": [2550, 1740, 940, 1450, 1927, 1459, 1562, 1407, 1552, 1330, 1226, 807],
        "summ": [2232333, 2223322, 4454544, 6451133, 5422333, 5656577, 3455543, 2343545, 4565688, 6767678, 5787872, 4976673]
    },
    "2020": {
        "pat": [2600, 2934, 1956, 2994, 2497, 1692, 1403, 607, 1522, 2653, 3095, 2547],
        "ser": [2723, 2980, 1993, 2921, 2520, 1627, 1448, 653, 1497, 2675, 3132, 2513],
        "summ": [3491200, 7819128, 17485911, 25235412, 23466938, 26951835, 32246675, 31982047, 30470499, 34912466, 33661213, 33522627]
    },
    "2021": {
        "pat": [2333, 1678, 875, 1345, 2000, 1600, 1445, 1234, 1500, 1340, 1200, 780],
        "ser": [2550, 1740, 940, 1450, 1927, 1459, 1562, 1407, 1552, 1330, 1226, 807],
        "summ": [2232333, 2223322, 4454544, 6451133, 5422333, 5656577, 3455543, 2343545, 4565688, 6767678, 5787872, 4976673]
    }
}
let date = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let infoblockData = {sum: 12312321, sumPlan: 2213213, patients: 12332, patientsPlan: 12345, services: 45353, servicesPlan: 36754}
export default function DocIndicatorsDash(){
    const [selYear, setSelYear] = useState("2021")
    const [OneGrafColor, setOneGrafColor] = useState("blue");
    const [TwoGrafColor, setTwoGrafColor] = useState("blue");
    const [OneGraf, setOneGraf] = useState("pat");
    const [TwoGraf, setTwoGraf] = useState("pat");
    
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
    }
    const SelGraf = (event, clas, select) =>{
        if(event.target.innerText == "Сумма"){
            if(clas == "DocIndicatorsOneGraf__Navbar"){
                setOneGrafColor((infoblockData.sum < infoblockData.sumPlan)? "red": "green")
                setOneGraf("summ")
            }
            else{
                setTwoGrafColor((document.getElementById("DocIndicatorsInfoblock__suminterest").innerText < 0)? "red": "green")
                setTwoGraf("summ")
            }         
        }
        else if(event.target.innerText == "Пациенты"){
            if(clas == "DocIndicatorsOneGraf__Navbar"){
                setOneGrafColor("blue")
                setOneGraf("pat")
            }
            else{
                setTwoGrafColor("blue")
                setTwoGraf("pat")
            }   
        }
        else{
            if(clas == "DocIndicatorsOneGraf__Navbar"){
                setOneGrafColor("")
                setOneGraf("ser")
            }
            else{
                setTwoGrafColor("")
                setTwoGraf("ser")
            }
        }
        if(!event.target.classList.contains(select)){
            let selectedOn = document.querySelectorAll(`.${clas} div`)
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains(select)){
                    selectedOn[i].classList.remove(select)
                    break;
                }
            }
            event.target.classList.add(select);
        }
    }
    return(
        <React.Fragment>
            <div className = "Test">
            <div className = 'DocIndicators__sidebar'>
                <div className = 'selects'>
                    <div className='selects__year'>
                        <span>Год: </span>
                        <select className = 'Dash__YearSelect' defaultValue = "2021" onChange={SelectYear}>
                        {
                            date.year.map((item, index) =>{
                                return(
                                    <AddOptions date = {item} key = {index}/>
                                )
                            })
                        }
                    </select>
                    </div>
                </div>
                <DocIndicatorsInfoblockLeft data = {infoblockData}/>
                
            </div>
            <div className = "DocIndicatorsContent">
                <div className = "DocIndicatorsTop">
                    <div className = 'DocIndicatorsTop__Left'>
                        <div className = 'DocIndicatorsOneGraf__Navbar'>
                            <div className = 'DocIndicatorsOneGraf__Navbar-item DocIndicatorsGraf_selected' onClick = {(event)=>{SelGraf(event, "DocIndicatorsOneGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                            Пациенты
                            </div>
                            <div className = 'DocIndicatorsOneGraf__Navbar-item' onClick = {(event)=>{SelGraf(event, "DocIndicatorsOneGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                            Услуги
                            </div>
                            <div className = 'DocIndicatorsOneGraf__Navbar-item' onClick = {(event)=>{SelGraf(event, "DocIndicatorsOneGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                            Сумма
                            </div>
                        </div>
                        <DocIndicatorsGrafOne data = {data[selYear][OneGraf]} color = {OneGrafColor}/>
                    </div>
                    <DocIndicatorsInfoblock data = {infoblockData}/>
                </div>
                <div className = "DocIndicatorsBottom">
                    <div className = 'DocIndicatorsTwoGraf__Navbar'>
                        <div className = 'DocIndicatorsTwoGraf__Navbar-item DocIndicatorsGraf_selected' onClick = {(event)=>{SelGraf(event, "DocIndicatorsTwoGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                        Пациенты
                        </div>
                        <div className = 'DocIndicatorsTwoGraf__Navbar-item' onClick = {(event)=>{SelGraf(event, "DocIndicatorsTwoGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                        Услуги
                        </div>
                        <div className = 'DocIndicatorsTwoGraf__Navbar-item' onClick = {(event)=>{SelGraf(event, "DocIndicatorsTwoGraf__Navbar", "DocIndicatorsGraf_selected")}}>
                        Сумма
                        </div>
                    </div>
                    <DocIndicatorsGrafTwo data = {data[selYear][TwoGraf]} color = {TwoGrafColor}/>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}