import React, { useState } from 'react';
import CFOSVGrafOne from './CFOSVGrafOne';
import CFOSVGrafTwo from './CFOSVGrafTwo'
let stewards = {
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
    
    const [selSteward, setSelSteward] = useState(Object.keys(infoblockdata)[0])
    const [selYear, setSelYear] = useState("2021")
    const [selMonth, setSelMonth] = useState("Все месяца")
    const StewardsClick = (event) =>{
        if(!event.target.classList.contains('selected')){
            let selectedOn = document.querySelectorAll('.stewards__list div')
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('selected')){
                    selectedOn[i].classList.remove('selected')
                    break;
                }
            }
            event.target.classList.add('selected');            
            setSelSteward(event.target.innerText)
        }
    }
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
        let selectedOn = document.querySelectorAll('.stewards__list div')
        if(!selectedOn[0].classList.contains('selected')){            
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('selected')){
                    selectedOn[i].classList.remove('selected')
                    break;
                }
            }
            selectedOn[0].classList.add('selected');
        }
    }
    const SelectMonth=(event)=>{
        setSelMonth(event.target.value)
        let selectedOn = document.querySelectorAll('.stewards__list div')
        if(!selectedOn[0].classList.contains('selected')){            
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('selected')){
                    selectedOn[i].classList.remove('selected')
                    break;
                }
            }
            selectedOn[0].classList.add('selected');
        }
        
    }
    const TypeText = (field) =>{
        let num = (infoblockdata[selSteward][selYear][selMonth][field]);
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
    return(
        <div>
            <div className = 'sidebar'>
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
                <div className ='stewards'>
                    <div className = 'stewards__title'>Распорядители</div>
                    <div className = 'stewards__list'>
                        {
                            Object.keys(stewards).map((item, index) => {
                                if(stewards[item][selYear]!= undefined && stewards[item][selYear][selMonth] != undefined){
                                    return(
                                        <StewardsList steward = {item} index = {index} func = {StewardsClick} key = {index}/>
                                    )
                                }
                                return null
                                
                            })
                        }
                    </div>
                </div>
            </div>
            <div className = "CFOSVcontent content">
                <div className = "CFOSV__top">
                    <CFOSVGrafOne data = {stewards[selSteward][selYear][selMonth]}/>
                    <div className = "CFOSV__infoblock">
                        <div className = "CFOSVInfoBlock__title">Расходование средств</div>
                        <div className = "CFOSVInfoBlock__top">
                        <div className = "CFOSVInfoBlock__right">
                                <div>
                                    <div className = "CFOSVInfoBlock__cont-title">Сумма затрат</div>
                                    <div className = "CFOSVInfoBlock__cont-subtitle">{TypeText("SummCosts")}</div>
                                </div>
                            </div>
                            <div className = "CFOSVInfoBlock__left">
                                <div>
                                    <div className = "CFOSVInfoBlock__cont-title">Оплаченных</div>
                                    <div className = "CFOSVInfoBlock__cont-subtitle">{new Intl.NumberFormat('ru-RU').format((infoblockdata[selSteward][selYear][selMonth].paid))} чел.</div>
                                </div>
                            </div>
                        </div>
                        <div className = "CFOSVInfoBlock__bottom">
                            <div className = "CFOSVInfoBlock__right">
                                <div>
                                    <div className = "CFOSVInfoBlock__cont-title">Сумма по<br/>коммерции</div>
                                    <div className = "CFOSVInfoBlock__cont-subtitle">{TypeText("SummKMC")}</div>
                                </div>
                            </div>
                            <div className = "CFOSVInfoBlock__left">
                                <div>
                                    <div className = "CFOSVInfoBlock__cont-title">Сумма по<br/>ОМС</div>
                                    <div className = "CFOSVInfoBlock__cont-subtitle">{TypeText("SummOMS")}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "CFOSV__bottom">
                    <CFOSVGrafTwo data = {stewards[selSteward][selYear][selMonth]}/>
                </div>
            </div>
        </div>
    )
}

function StewardsList(props){    
    if(props.index == 0){
        return(
            <div className = "steward selected" onClick = {props.func}>
                {props.steward}
            </div>
        )
    }
    return(
        <div className = "steward" onClick = {props.func}>
            {props.steward}          
        </div>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}