import React, {useState} from 'react';
let dataMonth = {
    "2019": {
        "Январь": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },            
        "Февраль": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Март": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Апрель": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Май": {
            "paid": 9698272,
            "eindebtedness": 11872328
        }
},
    "2020": {
        "Январь": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },            
        "Февраль": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Март": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Апрель": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Май": {
            "paid": 9698272,
            "eindebtedness": 11872328
        }
    },
    "2021": {
        "Январь": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },            
        "Февраль": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Март": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Апрель": {
            "paid": 9698272,
            "eindebtedness": 11872328
        },
        "Май": {
            "paid": 9698272,
            "eindebtedness": 11872328
        }
    }
}
let dataСontract = {
    "2019": {
        "Январь": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },            
        "Февраль": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Март": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Апрель": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Май": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        }
    },
    "2020": {
        "Январь": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },            
        "Февраль": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Март": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Апрель": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Май": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        }
    },
    "2021": {
        "Январь": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },            
        "Февраль": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Март": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Апрель": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        },
        "Май": {
            "Д №1-1 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            },
            "Д №1-2 от 30.08.2019г. \"СпецМедЛизинг\"": {
                kmc: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                },
                oms: {
                    "paid": 9698272,
                    "eindebtedness": 11872328
                }
            }
        }
    }
}
let date = {
    'year': [2019, 2020, 2021],
    'month': ['Все месяца', "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}

export default function AppBddsSV(){
    const [selYear, setSelYear] = useState("2021")
    const SelectYear=(event)=>{
        setSelYear(event.target.value)
    }
    
    const ObjSumm = (obj, name, field) =>{
        let result = 0;
        if(field == ""){
            for(let denotation in obj){
                if(typeof(obj[denotation][name]) != "string"){
                    result += obj[denotation][name]
                }
            }
        }
        else{
            for(let denotation in obj){
                for(let data in obj[denotation]){
                    if(typeof(obj[denotation][data][field][name]) != "string"){
                        result += obj[denotation][data][field][name]
                    }
                }
            }
        }        
        if(typeof(result)!= "number"){
            return "НЕТ"
        }
        else{
            return new Intl.NumberFormat('ru-RU').format(result)
        }        
    }
    const AddMonth = (props) =>{
        const Formater = (num) =>{
            if(typeof(num) != "string"){
                return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
            }
            else return num
        }
        return(
            <React.Fragment>
                <div className = 'SpecMedLeasingSV-Tab__line SpecMedLeasingSV-line__Month' onClick = {() => {OpenMonth(props.index)}}>
                    <div className = 'SpecMedLeasingSV__denotation'>{props.Month}</div>
                    <div className = 'SpecMedLeasingSV__paid'></div>
                    <div className = 'SpecMedLeasingSV__indebtedness'></div>
                    <div className = 'SpecMedLeasingSV__paid'></div>
                    <div className = 'SpecMedLeasingSV__indebtedness'></div>
                    <div className = 'SpecMedLeasingSV__paid SpecMedLeasingSV__paid__Total'>{Formater(props.dataMonth.paid)}</div>
                    <div className = 'SpecMedLeasingSV__indebtedness SpecMedLeasingSV__indebtedness__Total'>{Formater(props.dataMonth.eindebtedness)}</div>
                </div>
                {
                    Object.keys(dataСontract[selYear][props.Month]).map((item, index) =>{
                        return(
                            <AddArticles Сontract = {item} Month = {props.Month} dataСontract = {dataСontract[selYear][props.Month][item]} MonthIndex = {props.index} index = {index} func = {props.func} key = {index}/>
                        )
                    })
                }
            </React.Fragment>
        )
    }
    const AddArticles = (props) =>{
        const Formater = (num) =>{
            if(num == 0){
                return "НЕТ"
            }
            else if(num == -1){
                return ""
            }
            else return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
        }
        return(
            (props.dataСontract.income == 0 && props.dataСontract.expense == 0)? null:(
                <React.Fragment>
                <div className = {`SpecMedLeasingSV-Tab__line SpecMedLeasingSV-line__Article SpecMedLeasingSV__close Article_${props.MonthIndex}`}>
                    <div className = 'SpecMedLeasingSV__denotation'>{props.Сontract}</div>
                    <div className = 'SpecMedLeasingSV__paid'>{Formater(props.dataСontract.kmc.paid)}</div>
                    <div className = 'SpecMedLeasingSV__indebtedness'>{Formater(props.dataСontract.kmc.eindebtedness)}</div>
                    <div className = 'SpecMedLeasingSV__paid'>{Formater(props.dataСontract.oms.paid)}</div>
                    <div className = 'SpecMedLeasingSV__indebtedness'>{Formater(props.dataСontract.oms.eindebtedness)}</div>
                    <div className = 'SpecMedLeasingSV__paid'></div>
                    <div className = 'SpecMedLeasingSV__indebtedness'></div>
                </div>
            </React.Fragment>
            )
            
        )
    }
    
    const OpenMonth = (id) => {       
        let elem = document.querySelectorAll(`.SpecMedLeasingSV__table .Article_${id}`)
        if(elem[0].classList.contains('SpecMedLeasingSV__close')){
            for(let i = 0; i < elem.length; i++){
                elem[i].classList.remove('SpecMedLeasingSV__close');                
            }
        }
        else{
            for(let i = 0; i < elem.length; i++){
                elem[i].classList.add('SpecMedLeasingSV__close');
            }
        }
    }
    return(        
        <div className = "SpecMedLeasingSV__main">
            <h1 className="title">Сводная</h1>
            <div className = 'SpecMedLeasingSV__selects selects'>
                <div className='SpecMedLeasingSV-selects__year selects__year'>
                    <span>Год: </span>
                    <select className = 'SpecMedLeasingSV__YearSelect Dash__YearSelect' defaultValue = "2021" onChange={SelectYear}>
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
            <div className = "SpecMedLeasingSV__content">
                <div className = "SpecMedLeasingSV__table_top">
                    <div className = 'SpecMedLeasingSV-Tab__line SpecMedLeasingSV-Tab__line_hint'>
                        <div className = 'SpecMedLeasingSV__denotation_hint'></div>
                        <div className = 'SpecMedLeasingSV__KMC_hint'>КМС&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className = 'SpecMedLeasingSV__OMS_hint'>ОМС&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                        <div className = 'SpecMedLeasingSV__results_hint'>Всего&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
                    </div>
                    <div className = 'SpecMedLeasingSV-Tab__line SpecMedLeasingSV-Tab__line_hint'>
                        <div className = 'SpecMedLeasingSV__denotation_hint'>Дата</div>
                        <div className = 'SpecMedLeasingSV__paid_hint'>Оплачено</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint'>Задолженность</div>
                        <div className = 'SpecMedLeasingSV__paid_hint'>Оплачено</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint'>Задолженность</div>
                        <div className = 'SpecMedLeasingSV__paid_hint'>Оплачено</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint'>Задолженность</div>
                        
                        
                    </div>
                </div>
                <div className = "SpecMedLeasingSV__table">
                    {
                        Object.keys(dataMonth[selYear]).map((item, index) =>{
                            return(
                                <AddMonth Month = {item} dataMonth = {dataMonth[selYear][item]}  index = {index} key = {index}/>
                            )
                        })
                    }
                </div>
                <div className = "SpecMedLeasingSV__table-bottom">
                    <div className = 'SpecMedLeasingSV-Tab__line SpecMedLeasingSV-Tab__bottomLine'>
                        <div className = 'SpecMedLeasingSV__tabResults'>Итоги:</div>
                        <div className = 'SpecMedLeasingSV__paid_hint'>{ObjSumm(dataСontract[selYear], "paid", "kmc")}</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint'>{ObjSumm(dataСontract[selYear], "eindebtedness", "kmc")}</div>
                        <div className = 'SpecMedLeasingSV__paid_hint'>{ObjSumm(dataСontract[selYear], "paid", "oms")}</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint'>{ObjSumm(dataСontract[selYear], "eindebtedness", "oms")}</div>
                        <div className = 'SpecMedLeasingSV__paid_hint paid SpecMedLeasingSV__paid__Total'>{ObjSumm(dataMonth[selYear], "paid", "")}</div>
                        <div className = 'SpecMedLeasingSV__indebtedness_hint SpecMedLeasingSV__indebtedness__Total'>{ObjSumm(dataMonth[selYear], "eindebtedness", "")}</div>
                    </div>
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