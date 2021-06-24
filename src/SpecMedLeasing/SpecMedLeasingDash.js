import React, { useState } from 'react';
import SpecMedLeasingDashGrafOne from './SpecMedLeasingDashGrafOne';
import SpecMedLeasingDashGrafTwo from './SpecMedLeasingDashGrafTwo';

let infoblockData = {
    "Д № 5 от 07.05.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2020": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2021": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}]
    },
    "Д № 6 от 02.07.2020г. \"СпецМедЛизинг\"": {
        "2019": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2020": [{name: "Остаток задолженности", sum: 324324}, {name: "Оплачено", sum: 12333}],
        "2021": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}]
    },
    "Д № 7 ООО \"СпецМедЛизинг\"": {
        "2019": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2020": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2021": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}]       
    },
    "Д № 9 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2020": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2021": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}]
    },
    "Д № 4 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2020": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}],
        "2021": [{name: "Остаток задолженности", sum: 735454}, {name: "Оплачено", sum: 735454}]
    }
} 
let dates = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let doctors = {
    "Д № 5 от 07.05.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
    },
    "Д № 6 от 02.07.2020г. \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
    },
    "Д № 7 ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]       
    },
    "Д № 9 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
    },
    "Д № 4 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
    }
}
let infoblockTextData = {
    "Д № 5 от 07.05.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2020": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2021": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
    },
    "Д № 6 от 02.07.2020г. \"СпецМедЛизинг\"": {
        "2019": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2020": {
            totalDebt: 890980,
            paid: 45645,
            remainingDebt: 9809809800,
            monthRemainingDebt: 124134
        },
        "2021": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 890879,
            monthRemainingDebt: 124134
        },
    },
    "Д № 7 ООО \"СпецМедЛизинг\"": {
        "2019": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2020": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2021": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
    },
    "Д № 9 от 22.10.2021г. (МК /СпецМедЛизинг)": {
        "2019": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2020": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2021": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
    },
    "Д № 4 от 25.03.2020г. ООО \"СпецМедЛизинг\"": {
        "2019": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2020": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
        "2021": {
            totalDebt: 214213,
            paid: 4355,
            remainingDebt: 34534234,
            monthRemainingDebt: 124134
        },
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
        if(event.target.classList.contains('SpecMedLeasingDashNavBarText')){
            if(!event.target.parentNode.classList.contains('SpecMedLeasingDashNavBar__selected')){
                let selectedOn = document.querySelectorAll('.SpecMedLeasingDashTop__right-NavBar div')
                for(let i in selectedOn){
                    if(selectedOn[i].classList.contains('SpecMedLeasingDashNavBar__selected')){
                        selectedOn[i].classList.remove('SpecMedLeasingDashNavBar__selected')
                        break;
                    }
                }
                event.target.parentNode.classList.add('SpecMedLeasingDashNavBar__selected');
            }
        }
        else{
            if(!event.target.classList.contains('SpecMedLeasingDashNavBar__selected')){
                let selectedOn = document.querySelectorAll('.SpecMedLeasingDashTop__right-NavBar div')
                for(let i in selectedOn){
                    if(selectedOn[i].classList.contains('SpecMedLeasingDashNavBar__selected')){
                        selectedOn[i].classList.remove('SpecMedLeasingDashNavBar__selected')
                        break;
                    }
                }
                event.target.classList.add('SpecMedLeasingDashNavBar__selected');
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
            <div className = "SpecMedLeasingDash__content">
                <div className = "title">СпецМедЛизинг</div>
                <div className = "SpecMedLeasingDashTop" >
                    <div className = "SpecMedLeasingDashTop__left">                    
                        <SpecMedLeasingDashGrafOne data = {infoblockData[selDoctor][selYear]}/>
                    </div>
                    <div className = "SpecMedLeasingDashTop__right" >
                        <div className = "SpecMedLeasingDashTop__right-NavBar">
                            <div className = "SpecMedLeasingDashNavBar__item SpecMedLeasingDashNavBar__selected" onClick = {(event)=>{SelectNavbar(event, "Коммерция")}}>
                                <div className = "SpecMedLeasingDashNavBarText">Коммерция</div>
                            </div>
                            <div className = "SpecMedLeasingDashNavBar__item" onClick = {(event)=>{SelectNavbar(event, "ОМС")}}>
                                <div className = "SpecMedLeasingDashNavBarText">ОМС</div>
                            </div>
                        </div>
                        <div className = "SpecMedLeasingDashTop__right-infoblock">
                            <div className = "SpecMedLeasingDashTop__right-infoblock-item">
                                <div className = "SpecMedLeasingDashTop__right-title">Общая задолженность</div>
                                <div className = "SpecMedLeasingDashTop__right-subtitle">{infoblockTextData[selDoctor][selYear].totalDebt} млн</div>
                            </div>
                            <div className = "SpecMedLeasingDashTop__right-infoblock-item">
                                <div className = "SpecMedLeasingDashTop__right-title">Оплачено</div>
                                <div className = "SpecMedLeasingDashTop__right-subtitle">{infoblockTextData[selDoctor][selYear].paid} млн</div>
                            </div>
                            <div className = "SpecMedLeasingDashTop__right-infoblock-item">
                                <div className = "SpecMedLeasingDashTop__right-title">Остаток задолженности</div>
                                <div className = "SpecMedLeasingDashTop__right-subtitle">{infoblockTextData[selDoctor][selYear].remainingDebt} млн</div>
                            </div>
                            <div className = "SpecMedLeasingDashTop__right-infoblock-item">
                                <div className = "SpecMedLeasingDashTop__right-title">Остаток задолженности на конец месяца</div>
                                <div className = "SpecMedLeasingDashTop__right-subtitle">{infoblockTextData[selDoctor][selYear].monthRemainingDebt} млн</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "SpecMedLeasingDashBottom" >
                    <div className = "SpecMedLeasingDashBottom__left" >
                        <div className ='SpecMedLeasingDash__contractList'>
                            <div className = 'SpecMedLeasingDash__contractList-title'>Договора</div>
                            <div className = 'SpecMedLeasingDash__contractList-list'>
                                {
                                    Object.keys(doctors).map((item, index) =>{
                                        if(doctors[item][selYear]!= undefined){
                                            return(
                                                <DocIndicatorsTwoDocList doctor = {item} index = {index} func = {DoctorClick} key = {index}/>
                                            )
                                        }
                                        return null
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className = "SpecMedLeasingDashBottom__right">
                        <SpecMedLeasingDashGrafTwo paid =  {doctors[selDoctor][selYear]} timing = {doctors[selDoctor][selYear]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
function DocIndicatorsTwoDocList(props){    
    if(props.index == 0){
        return(
            <div className = "SpecMedLeasingDash__contractList-line selected" onClick = {props.func}>
                {props.doctor}
            </div>
        )
    }
    return(
        <div className = "SpecMedLeasingDash__contractList-line" onClick = {props.func}>
            {props.doctor}          
        </div>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}