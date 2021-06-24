import React, { useState } from 'react';
import DocIndicatorsPatientsDashGrafOne from './DocIndicatorsPatientsDashGrafOne';
import Calendaries from '../AdditionalModules/Calendaries';
let dates = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let doctorsId = {
    "Сайдалхаджиев Мухаммад Салманович": 234,
    "Петров Семен Васильевич": 123,
    "Сергеев Василий Александрович": 34,
    "Эзарбаев Аслан Хасанович": 98,
    "Изнауров Ислам Саид-Хасанович": 12334
}
let doctors = {
    "Сайдалхаджиев Мухаммад Салманович": {
        "2019": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "2020": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345],
        "2021": [3433315, 6745623, 4543872, 7734732, 9348384, 10323121, 6743434, 8243242, 7353544, 12132742, 7434215, 5435345]
    },
    "Петров Семен Васильевич": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]
    },
    "Сергеев Василий Александрович": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]      
    },
    "Эзарбаев Аслан Хасанович": {
        "2019": [32123, 22321, 39878, 29456, 45343, 12321, 12434, 31455, 23213, 23712, 42678, 12323],
        "2020": [32123, 22321, 39878, 29456, 45343, 12321, 12434, 31455, 23213, 23712, 42678, 12323],
        "2021": [32123, 22321, 39878, 29456, 45343, 12321, 12434, 31455, 23213, 23712, 42678, 12323]
    },
    "Изнауров Ислам Саид-Хасанович": {
        "2019": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2020": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345],
        "2021": [2233315, 7345623, 5343872, 9834732, 12348384, 12323121, 2343434, 3243242, 4353544, 6932742, 5434215, 7435345]
    }
}

let infoblockData = {
    "Сайдалхаджиев Мухаммад Салманович": {
        "2019": {
            quarter: {
                fact: 560,
                plan: 420
            },
            month: {
                fact: 123,
                plan: 100
            },
            week: {
                fact: 31,
                plan: 25
            }
        },
        "2020": {
            quarter: {
                fact: 659,
                plan: 645
            },
            month: {
                fact: 33,
                plan: 20
            },
            week: {
                fact: 6,
                plan: 5
            }
        },
        "2021": {
            quarter: {
                fact: 423,
                plan: 400
            },
            month: {
                fact: 127,
                plan: 90
            },
            week: {
                fact: 38,
                plan: 25
            }
        }
    },
    "Петров Семен Васильевич": {
        "2019": {
            quarter: {
                fact: 340,
                plan: 280
            },
            month: {
                fact: 15,
                plan: 20
            },
            week: {
                fact: 4,
                plan: 5
            }
        },
        "2020": {
            quarter: {
                fact: 340,
                plan: 280
            },
            month: {
                fact: 15,
                plan: 20
            },
            week: {
                fact: 4,
                plan: 5
            }
        },
        "2021": {
            quarter: {
                fact: 340,
                plan: 280
            },
            month: {
                fact: 15,
                plan: 20
            },
            week: {
                fact: 4,
                plan: 5
            }
        }
    },
    "Сергеев Василий Александрович": {
        "2019": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        },
        "2020": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        },
        "2021": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        }
    },
    "Эзарбаев Аслан Хасанович": {
        "2019": {
            quarter: {
                fact: 123,
                plan: 80
            },
            month: {
                fact: 20,
                plan: 15
            },
            week: {
                fact: 3,
                plan: 5
            }
        },
        "2020": {
            quarter: {
                fact: 123,
                plan: 80
            },
            month: {
                fact: 20,
                plan: 15
            },
            week: {
                fact: 3,
                plan: 5
            }
        },
        "2021": {
            quarter: {
                fact: 123,
                plan: 80
            },
            month: {
                fact: 20,
                plan: 15
            },
            week: {
                fact: 3,
                plan: 5
            }
        }
    },
    "Изнауров Ислам Саид-Хасанович": {
        "2019": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        },
        "2020": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        },
        "2021": {
            quarter: {
                fact: 60,
                plan: 120
            },
            month: {
                fact: 60,
                plan: 120
            },
            week: {
                fact: 60,
                plan: 120
            }
        }
    }
}
export default function DocIndicatorsServicesDash(){
    const [selYear, setSelYear] = useState("2021")
    const [showDate, setShowDate] = useState(false)
    const [date, setDate] = useState(null)
    const [selDoctor, setSelDoctor] = useState(Object.keys(doctors)[0])
    const [data, setData] = useState([160, 173, 156, 158, 97, 80, 91, 62, 44, 98, 117])
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
    }
    const onChange = date => {
        setDate(date);
        setShowDate(true);
        DisplayCalend({target: "block"})
    }
    const reset = () => {
        setDate(null);
        setShowDate(false);
    }
    const DisplayCalend = (event) =>{
        let calen = document.getElementById("DocIndicatorsCalend");
        if(event.target.localName != "img"){
            if(calen.classList.contains("CalendOf")){
                calen.classList.remove("CalendOf")
                calen.classList.add("CalendOn")
                calen.style.display = "block";
                calen.style.opacity = "0"
                setTimeout(() => {
                    calen.style.opacity = "1"
                }, 200)                
            }
            else{
                calen.style.opacity = "0";
                setTimeout(() => {
                    calen.style.display = 'none'
                }, 300)
                calen.classList.remove("CalendOn")
                calen.classList.add("CalendOf")            
            }
        }
    }
    const DoctorClick = (event) =>{
        if(!event.target.classList.contains('DocIndicatorsTwo__doc_selected')){
            let selectedOn = document.querySelectorAll('.DocIndicatorsTwo__docList-list div')
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('DocIndicatorsTwo__doc_selected')){
                    selectedOn[i].classList.remove('DocIndicatorsTwo__doc_selected')
                    break;
                }
            }
            event.target.classList.add('DocIndicatorsTwo__doc_selected');            
            setSelDoctor(event.target.innerText)
        }
    }
    const DoctorMouseOver = (event) =>{
        let tagid;
        if(event.target.id == ""){
            tagid = event.target.parentNode.id;
        }
        else{
            tagid = event.target.id;
        }
        let id = +/\d+/.exec(tagid)
        let doc = document.getElementById(`DocIndicatorsDoc__${id}`)
        let info = document.getElementById(`DocIndicatorsHoverText__${id}`)
        info.style.opacity = "1"
        doc.style.opacity = "0"
        setTimeout(() => {
            info.style.display = "block";
        }, 300)
    }
    const DoctorMouseOut = (event) =>{
        let tagid;
        if(event.target.id == ""){
            tagid = event.target.parentNode.id;
        }
        else{
            tagid = event.target.id;
        }
        let id = +/\d+/.exec(tagid)
        let doc = document.getElementById(`DocIndicatorsDoc__${id}`)
        let info = document.getElementById(`DocIndicatorsHoverText__${id}`)
        info.style.opacity = "0"
        doc.style.opacity = "1"
        setTimeout(() => {
            info.style.display = "none";
        }, 300)
    }
    const DocTopSel = (event) =>{
        let tagid;
        if(event.target.id == ""){
            tagid = event.target.parentNode.id;
        }
        else{
            tagid = event.target.id;
        }
        let id = +/\d+/.exec(tagid)
        let doctor = document.getElementById(`DocIndicatorsDoc__${id}`).classList[0]
        let selectedOn = document.querySelectorAll('.DocIndicatorsTwo__docList-list div')
        for(let i in selectedOn){
            if(selectedOn[i].classList.contains('DocIndicatorsTwo__doc_selected')){
                selectedOn[i].classList.remove('DocIndicatorsTwo__doc_selected')
                break;
            }
        }
        let doc = document.getElementById(doctor);
        doc.classList.add('DocIndicatorsTwo__doc_selected');            
        setSelDoctor(doc.innerText);
    }
    const InterestRet = (field) =>{
        let fact = infoblockData[selDoctor][selYear][field].fact;
        let plan = infoblockData[selDoctor][selYear][field].plan;
        return (fact / plan * 100).toFixed(2);
    }
    return(
        <div className = "MainHome">
            <div className = "title">Показатели Работы Врачей(Пациенты)</div>
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
                <Calendaries DisplayCalend = {DisplayCalend} onChange = {onChange} reset = {reset} showDate = {showDate} date = {date}/>
            </div>
            <div className = "DocIndicatorsTwo__content">
                <div className = "DocIndicatorsTwoTop" >
                    <div className = "DocIndicatorsTwoTop__left">
                        <div className = "DocIndicatorsTwoTop__left-line DocIndicatorsTwoTop__left-linePrompt">
                            <div className = "DocIndicatorsTwoTop__left-title">Топ врачей</div>
                            <div className = "DocIndicatorsTwoTop__left-servicesPrompt">Пациенты</div>
                        </div>
                        <div id = "DocIndicatorsline__1" onClick = {DocTopSel} onMouseOver = {DoctorMouseOver} onMouseOut = {DoctorMouseOut} className = "DocIndicatorsTwoTop__left-line">
                            <div id = "DocIndicatorsDoc__1" className = "Doc__234 DocIndicatorsTwoTop__left-doc docindOneDoc">Сайдалхаджиев Мухаммад Салманович</div>
                            <div id = "DocIndicatorsHoverText__1">Отобразить данные</div>
                            <div className = "DocIndicatorsTwoTop__left-services">(30)</div>
                        </div>
                        <div id = "DocIndicatorsline__2" onClick = {DocTopSel} onMouseOver = {DoctorMouseOver} onMouseOut = {DoctorMouseOut} className = "DocIndicatorsTwoTop__left-line">
                            <div id = "DocIndicatorsDoc__2" className = "Doc__98 DocIndicatorsTwoTop__left-doc docindTwoDoc">Эзарбаев Аслан Хасанович</div>
                            <div id = "DocIndicatorsHoverText__2">Отобразить данные</div>
                            <div className = "DocIndicatorsTwoTop__left-services">(25)</div>
                        </div>
                        <div id = "DocIndicatorsline__3" onClick = {DocTopSel} onMouseOver = {DoctorMouseOver} onMouseOut = {DoctorMouseOut} className = "DocIndicatorsTwoTop__left-line">
                            <div id = "DocIndicatorsDoc__3" className = "Doc__12334 DocIndicatorsTwoTop__left-doc docindThreeDoc">Изнауров Ислам Саид-Хасанович</div>
                            <div id = "DocIndicatorsHoverText__3">Отобразить данные</div>
                            <div className = "DocIndicatorsTwoTop__left-services">(23)</div>
                        </div>
                    </div>
                    <div className = "DocIndicatorsTwoTop__right" >
                        <div className = "DocIndicatorsTwoTop__right-infoblock">
                            <div className = "DocIndicatorsTwoTop__right-title">Колличество пациентов за 7 дней</div>
                            <div className = "DocIndicatorsTwoTop__right-services">{infoblockData[selDoctor][selYear].week.fact}</div>
                            <div className = "DocIndicatorsTwoTop__right-plan">План: {infoblockData[selDoctor][selYear].week.plan} <span className = {(InterestRet("week") < 99? "interestRed": "interestGreen")}>({InterestRet("week")}%)</span></div>
                            <div className = "DocIndicatorsTwoTop__right-period">7 дней</div>
                        </div>
                        <div className = "DocIndicatorsTwoTop__right-infoblock">
                            <div className = "DocIndicatorsTwoTop__right-title">Колличество пациентов за 30 дней</div>
                            <div className = "DocIndicatorsTwoTop__right-services">{infoblockData[selDoctor][selYear].month.fact}</div>
                            <div className = "DocIndicatorsTwoTop__right-plan">План: {infoblockData[selDoctor][selYear].month.plan} <span className = {(InterestRet("month") < 99? "interestRed": "interestGreen")}>({InterestRet("month")}%)</span></div>
                            <div className = "DocIndicatorsTwoTop__right-period">30 дней</div>
                        </div>
                        <div className = "DocIndicatorsTwoTop__right-infoblock">
                            <div className = "DocIndicatorsTwoTop__right-title">Колличество пациентов за последний квартал</div>
                            <div className = "DocIndicatorsTwoTop__right-services">{infoblockData[selDoctor][selYear].quarter.fact}</div>
                            <div className = "DocIndicatorsTwoTop__right-plan">План: {infoblockData[selDoctor][selYear].quarter.plan} <span className = {(InterestRet("quarter") < 99? "interestRed": "interestGreen")}>({InterestRet("quarter")}%)</span></div>
                            <div className = "DocIndicatorsTwoTop__right-period">Квартал</div>
                        </div>
                        <div className = "DocIndicatorsTwoTop__right-infoblock" > 
                            <div className = "DocIndicatorsTwoTop__right-title">Колличество пациентов за выбранный период</div>
                            <div className = "DocIndicatorsTwoTop__right-services">110</div>
                            <div className = "DocIndicatorsTwoTop__right-plan">План: 100 <span className = "green">(100%)</span></div>
                            <div className = "DocIndicatorsTwoTop__right-period">{(date != null)? ((date[0].toLocaleDateString() === date[1].toLocaleDateString())? `${date[0].toLocaleDateString()}`:`С ${date[0].toLocaleDateString()} по ${date[1].toLocaleDateString()}`): ""}</div>
                        </div>
                    </div>
                </div>
                <div className = "DocIndicatorsTwoBottom" >
                    <div className = "DocIndicatorsTwoBottom__left" >
                        <div className ='DocIndicatorsTwo__docList'>
                            <div className = 'DocIndicatorsTwo__docList-title'>Врачи</div>
                            <div className = 'DocIndicatorsTwo__docList-list'>
                                {
                                    Object.keys(doctorsId).map((item, index) =>{
                                        if(doctors[item][selYear]!= undefined){
                                            return(
                                                <DocIndicatorsServicesDashDocList doctor = {item} id = {doctorsId[item]} index = {index} func = {DoctorClick} key = {index}/>
                                            )
                                        }
                                        return null
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className = "DocIndicatorsTwoBottom__right">
                        <DocIndicatorsPatientsDashGrafOne data = {doctors[selDoctor][selYear]}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
function DocIndicatorsServicesDashDocList(props){    
    if(props.index == 0){
        return(
            <div id = {`Doc__${props.id}`} className = "DocIndicatorsTwo__docList-line DocIndicatorsTwo__doc_selected" onClick = {props.func}>
                {props.doctor}
            </div>
        )
    }
    return(
        <div id = {`Doc__${props.id}`} className = "DocIndicatorsTwo__docList-line" onClick = {props.func}>
            {props.doctor}          
        </div>
    )
}
function AddOptions(props){
    return(
        <option>{props.date} </option>
    )                  
}