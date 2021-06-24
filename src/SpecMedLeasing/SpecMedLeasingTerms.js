import React, { useState } from 'react';
import SpecMedLeasingTermsGraf from './SpecMedLeasingTermsGraf';
let dates = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let doctors = {
    "Д № 5 от 07.05.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#f14a4a"
    },
    "Д № 6 от 02.07.2020г. \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#4af150"
    },
    "Д № 7 ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#f0ae48"       
    },
    "Д № 9 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#0E9AC1"
    },
    "Д № 8 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#B9172E"
    },
    "Д № 17 ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#951B3E"       
    },
    "Д № 19 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#702A5F"
    },
    "Д № 14 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#712FCB"
    },
    "Д № 21 ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#951B3E"       
    },
    "Д № 29 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#702A5F"
    },
    "Д № 24 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "color": "#712FCB"
    }
}
export default function SpecMedLeasingDash(){
    const [selYear, setSelYear] = useState("2021")
    const [selDoctor, setSelDoctor] = useState(Object.keys(doctors)[0])
    
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
    }
    const DoctorClick = (event) =>{
        if(!event.target.classList.contains('selected')){
            let selectedOn = document.querySelectorAll('.SpecMedLeasingDash__contractList-list div')
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('selected')){
                    selectedOn[i].classList.remove('selected')
                    break;
                }
            }
            event.target.classList.add('selected');            
            setSelDoctor(event.target.innerText)
        }
    }
    const SelectNavbar = (event, name) =>{
        if(event.target.classList.contains('SpecMedLeasingTermsTopNavBarText')){
            if(!event.target.parentNode.classList.contains('SpecMedLeasingTermsTopNavBar__selected')){
                let selectedOn = document.querySelectorAll('.SpecMedLeasingTermsTop__NavBar div')
                for(let i in selectedOn){
                    if(selectedOn[i].classList.contains('SpecMedLeasingTermsTopNavBar__selected')){
                        selectedOn[i].classList.remove('SpecMedLeasingTermsTopNavBar__selected')
                        break;
                    }
                }
                event.target.parentNode.classList.add('SpecMedLeasingTermsTopNavBar__selected');
            }
        }
        else{
            if(!event.target.classList.contains('SpecMedLeasingTermsTopNavBar__selected')){
                let selectedOn = document.querySelectorAll('.SpecMedLeasingTermsTop__NavBar div')
                for(let i in selectedOn){
                    if(selectedOn[i].classList.contains('SpecMedLeasingTermsTopNavBar__selected')){
                        selectedOn[i].classList.remove('SpecMedLeasingTermsTopNavBar__selected')
                        break;
                    }
                }
                event.target.classList.add('SpecMedLeasingTermsTopNavBar__selected');
            }
        }
    }
    const SelectArticle = (event) =>{
        if(event.target.classList.contains("SpecMedLeasingTerms__contractList-article") || event.target.classList.contains("SpecMedLeasingTerms__contractList-term")){
            if(event.target.parentNode.classList.contains("SpecmedLeasingTerms__articleSelected")){
                event.target.parentNode.classList.remove("SpecmedLeasingTerms__articleSelected");
            }
            else{
                event.target.parentNode.classList.add("SpecmedLeasingTerms__articleSelected");
            }
        }
        else{
            if(event.target.classList.contains("SpecmedLeasingTerms__articleSelected")){
                event.target.classList.remove("SpecmedLeasingTerms__articleSelected");
            }
            else{
                event.target.classList.add("SpecmedLeasingTerms__articleSelected");
            }
        }
    }
    return(
        <div className = "MainHome">
            <div className = 'selects'>
                <div className='selects__year'>
                    <span>Год: </span>
                    <select className = 'Dash__YearSelect' defaultValue = "2021" onChange={SelectYear}>
                    {
                        dates.year.map((item, index) =>{
                            return(
                                <AddOptions date = {item} key = {index}/>
                            )
                        })
                    }
                    </select>
                </div>
            </div>
            <div className = "SpecMedLeasingTerms__content">
                <div className = "title">СпецМедЛизинг</div>
                <div className = "SpecMedLeasingTermsTop" >
                        <div className = "SpecMedLeasingTermsTop__NavBar">
                            <div className = "SpecMedLeasingTermsTopNavBar__item SpecMedLeasingTermsTopNavBar__selected" onClick = {(event)=>{SelectNavbar(event, "Коммерция")}}>
                                <div className = "SpecMedLeasingTermsTopNavBarText">Коммерция</div>
                            </div>
                            <div className = "SpecMedLeasingTermsTopNavBar__item" onClick = {(event)=>{SelectNavbar(event, "ОМС")}}>
                                <div className = "SpecMedLeasingTermsTopNavBarText">ОМС</div>
                            </div>
                        </div>
                        <div className = "SpecMedLeasingTermsTop__infoblock">
                            <div className = "SpecMedLeasingTermsTop__infoblock-item">
                                <div className = "SpecMedLeasingTermsTop__title">1 Год (2020)</div>
                                <div className = "SpecMedLeasingTermsTop__subtitle">523,23 млн</div>
                            </div>
                            <div className = "SpecMedLeasingTermsTop__infoblock-item">
                                <div className = "SpecMedLeasingTermsTop__title">3 Года (2020 - 2022)</div>
                                <div className = "SpecMedLeasingTermsTop__subtitle">51,66 млн</div>
                            </div>
                            <div className = "SpecMedLeasingTermsTop__infoblock-item">
                                <div className = "SpecMedLeasingTermsTop__title">5 лет (2020 - 2024)</div>
                                <div className = "SpecMedLeasingTermsTop__subtitle">504,20 млн</div>
                            </div>
                            <div className = "SpecMedLeasingTermsTop__infoblock-item">
                                <div className = "SpecMedLeasingTermsTop__title">8 лет (2020 - 2027)</div>
                                <div className = "SpecMedLeasingTermsTop__subtitle">13,37 млн</div>
                        </div>
                    </div>
                </div>
                <div className = "SpecMedLeasingTermsBottom" >
                    <div className = "SpecMedLeasingTermsBottom__contractList">
                        {
                            Object.keys(doctors).map((item, index) =>{
                                return(
                                    <LeasingTermsContractList article = {item} term = {doctors[item][selYear]} color = {doctors[item]["color"]} func = {SelectArticle} key = {index}/>
                                )
                            })                            
                        }
                    </div>
                    <SpecMedLeasingTermsGraf selyear = {selYear} selmonth = {"Все месяца"}/>
                </div>
            </div>
        </div>
    )
}
function LeasingTermsContractList(props){    
    return(
        <div className = "SpecMedLeasingTerms__contractList-line SpecmedLeasingTerms__articleSelected" onClick = {props.func}>
            <div className = "SpecMedLeasingTerms__contractList-article"><div className = "SpecMedLeasingTerms__contractList-articleCircle" style = {{background: props.color}}></div>{props.article}</div>
            <div className = "SpecMedLeasingTerms__contractList-term">Срок: 234 657 123 123(76,27%)</div>
        </div>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}