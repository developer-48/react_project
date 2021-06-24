import React, { useState } from 'react';
import LeasingGrafOne from './LeasingGrafOne';
import LeasingGrafTwo from './LeasingGrafTwo'
let data = {
    "Иванов Сергей Петрович": {
        "2019": {
            "Все месяца": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]
        },
        "2020": {
            "Все месяца": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]
        },
        "2021": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
    },
    "Петров Семен Васильевич": {
        "2019": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
        "2020": {
            "Все месяца": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]
        },
        "2021": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
    },
    "Сергеев Василий Александрович": {
        "2019": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
        "2020": {
            "Все месяца": [9433315, 4745623, 5543872, 2734732, 5348384, 7323121, 9743434, 4243242, 3353544, 5132742, 1434215, 3435345]
        },
        "2021": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },        
    },
    "Семенов Петр Васильевич": {
        "2019": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
        "2020": {
            "Все месяца": [3233315, 3345623, 2343872, 1834732, 1348384, 2323121, 1343434, 3243242, 3353544,5932742, 5134215, 2335345]
        }
        
    },
    "Русаков Константин Захарович": {
        "2019": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
        "2020": {
            "Все месяца": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
        },
        "2021": {
            "Все месяца": [3233315, 3345623, 2343872, 1834732, 1348384, 2323121, 1343434, 3243242, 3353544,5932742, 5134215, 2335345]
        }
    }
}
let date = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let infoblockdata = {
    "Иванов Сергей Петрович": {
        "2019": {
            "Все месяца": {
                "SummCosts": 54288232,
                "SummKMC": 3293933,
                "SummOMS": 78822232,
                "paid": 144
            }
        },
        "2020": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2021": {
            "Все месяца": {
                "SummCosts": 65288232,
                "SummKMC": 45293933,
                "SummOMS": 7222232,
                "paid": 244
            }
        }
    },
    "Петров Семен Васильевич": {
        "2019": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2020": {
            "Все месяца": {
                "SummCosts": 65288232,
                "SummKMC": 45293933,
                "SummOMS": 7222232,
                "paid": 244
            }
        },
        "2021": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        }
    },
    "Сергеев Василий Александрович": {
        "2019": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2020": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2021": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        }     
    },
    "Семенов Петр Васильевич": {
        "2019": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2020": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2021": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        }
    },
    "Русаков Константин Захарович": {
        "2019": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2020": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
        "2021": {
            "Все месяца": {
                "SummCosts": 40288232,
                "SummKMC": 23293933,
                "SummOMS": 11222232,
                "paid": 344
            }
        },
    }
}
export default function CFOSV(){
    const stewards = data;
    const [selYear, setSelYear] = useState("2020")
    const [selMonth, setSelMonth] = useState("Все месяца")
    const [selList, setSelList] = useState("Лизинг");
    const [OneGrafColor, setOneGrafColor] = useState("");
    const [TwoGrafColor, setTwoGrafColor] = useState("");
    
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
    }
    const SelectMonth=(event)=>{
        setSelMonth(event.target.value)        
    }
    const TypeText = (field) =>{
        let num = (infoblockdata["Иванов Сергей Петрович"][selYear][selMonth][field]);
        if((num+'').length > 6){
            if((num+'').length > 9){
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000000).toFixed(2))} млрд.`
            }
            else{
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000).toFixed(2))} млн.`
            }
        }
        else{
            return `${new Intl.NumberFormat('ru-RU').format((num / 1000).toFixed(1))} тыс.`
        }            
    }
    const SelectList = (event) =>{
        setSelList(event.target.innerText);
        if(!event.target.classList.contains('LeasingNavBar__selected')){
            let selectedOn = document.querySelectorAll('.LeasingNavBar div')
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('LeasingNavBar__selected')){
                    selectedOn[i].classList.remove('LeasingNavBar__selected')
                    break;
                }
            }
            event.target.classList.add('LeasingNavBar__selected');
        }
    }
    const OneGraf = (event, clas, select) =>{
        if(event.target.innerText == "Оплата"){
            if(clas == "LeasingOneGraf__Navbar"){
                setOneGrafColor("red")
            }
            else{
                setTwoGrafColor("red")
            }         
        }
        else{
            if(clas == "LeasingOneGraf__Navbar"){
                setOneGrafColor("")
            }
            else{
                setTwoGrafColor("")
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
        <div className = "Leasing__MainHome">
            <div className = 'Leasing__sidebar'>
                <div className = 'selects'>
                    <div className='selects__year'>
                        <span>Год: </span>
                        <select className = 'Dash__YearSelect' defaultValue = "2020" onChange={SelectYear}>
                        {
                            date.year.map((item, index) =>{
                                return(
                                    <AddOptions date = {item} key = {index}/>
                                )
                            })
                        }
                    </select>
                    </div>
                    <div className='selects__month displayNone'>
                        <span>Месяц: </span>
                        <select className = 'Dash__MonthSelect' onChange={SelectMonth}>
                        {
                            date.month.map((item, index) =>{
                                return(
                                    <AddOptions date = {item} key = {index}/>
                                )
                            })
                        }
                    </select>
                    </div>
                </div>
                <div className = "Leasing__Infoblocks">
                        <div className = "Leasing__Infoblock-One">
                            <div className = "LeasingInfoblock__title">Сумма поступления по лизингу</div>
                            <div className = "LeasingInfoblock__subTitle">19,47 млн</div>
                        </div>
                        <div className = "Leasing__Infoblock-Two">
                            <div className = "LeasingInfoblock__title">Сумма выплат по лизингу</div>
                            <div className = "LeasingInfoblock__subTitle">19,47 млн</div>
                        </div>
                        <div className = "Leasing__Infoblock-Three">
                            <div className = "LeasingInfoblock__title">Остаток по лизингу</div>
                            <div className = "LeasingInfoblock__subTitle">19,47 млн</div>
                        </div>
                </div>
            </div>
            <div className = "LeasingContent">
                <div className = "LeasingNavBar">
                    <div className = "LeasingNavBar__item LeasingNavBar__selected" onClick = {SelectList}>Лизинг</div>
                    <div className = "LeasingNavBar__item" onClick = {SelectList}>СпецМедЛизинг</div>
                </div>
                <div className = "LeasingTop">
                    <div className = 'LeasingTop__Left'>
                        <div className = 'LeasingOneGraf__Navbar'>
                            <div className = 'LeasingOneGraf__Navbar-item LeasingGraf_selected' onClick = {(event)=>{OneGraf(event, "LeasingOneGraf__Navbar", "LeasingGraf_selected")}}>
                            Поступление
                            </div>
                            <div className = 'LeasingOneGraf__Navbar-item' onClick = {(event)=>{OneGraf(event, "LeasingOneGraf__Navbar", "LeasingGraf_selected")}}>
                            Оплата
                            </div>
                        </div>
                        <LeasingGrafOne data = {stewards["Иванов Сергей Петрович"][selYear][selMonth]} color = {OneGrafColor}/>
                    </div>
                    <div className = "LeasingTop__Right">
                        <div className = "LeasingRight-itemOne">
                            <div className = "LeasingRight__title">Остаток</div>
                            <div className = "LeasingRight__subtitle LeasingSubTitle__remainder">19,47 млн</div>
                            <div className = 'Leasing__sircle LeasingCircle__remainder'>
                                <div><span>114</span>%</div>                                
                            </div>
                        </div>
                        <div className = "LeasingRight-itemTwo">
                            <div className = "LeasingRight__title">Выплаты</div>
                            <div className = "LeasingRight__subtitle LeasingSubTitle__payments">19,47 млн</div>
                            <div className = 'Leasing__sircle LeasingCircle__payments'>
                                <div><span>123</span>%</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "LeasingBottom">
                <div className = 'LeasingTwoGraf__Navbar'>
                            <div className = 'LeasingTwoGraf__Navbar-item LeasingGraf_selected' onClick = {(event)=>{OneGraf(event, "LeasingTwoGraf__Navbar", "LeasingGraf_selected")}}>
                            Поступление
                            </div>
                            <div className = 'LeasingTwoGraf__Navbar-item' onClick = {(event)=>{OneGraf(event, "LeasingTwoGraf__Navbar", "LeasingGraf_selected")}}>
                            Оплата
                            </div>
                        </div>
                    <LeasingGrafTwo data = {stewards["Иванов Сергей Петрович"][selYear][selMonth]} color = {TwoGrafColor}/>
                </div>
            </div>
        </div>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}