import React from 'react';
let date = {
    'year': [2019, 2020, 2021],
    'month': ["Все месяца", "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
}
let data = {
    "Лучевая диагностика": {
        "Компьютерная томография": {
            "Компьютерная томография": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 580,
                        "factPat": 658,
                        "servicesCol": 1356,
                        "planKMC": 550000,
                        "factKMC": 617800,
                        "deviationSum": 617800
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 580,
                        "factPat": 658,
                        "servicesCol": 1356,
                        "planKMC": 550000,
                        "factKMC": 617800,
                        "deviationSum": 617800
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 580,
                        "factPat": 658,
                        "servicesCol": 1356,
                        "planKMC": 550000,
                        "factKMC": 617800,
                        "deviationSum": 617800
                    }
                }
            }
        },
        "Магнитно-резонансная томография": {
            "Васильев Александр Сергеевич": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 380,
                        "factPat": 452,
                        "servicesCol": 963,
                        "planKMC": 600000,
                        "factKMC": 594300,
                        "deviationSum": 594300
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 380,
                        "factPat": 452,
                        "servicesCol": 963,
                        "planKMC": 600000,
                        "factKMC": 594300,
                        "deviationSum": 594300
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 380,
                        "factPat": 452,
                        "servicesCol": 963,
                        "planKMC": 600000,
                        "factKMC": 594300,
                        "deviationSum": 594300
                    }
                }
            }
        }
    },
    "Эндоскопия": {
        "Анестезиология": {
            "Семенов Артур Кагерманович": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 450,
                        "factPat": 396,
                        "servicesCol": 837,
                        "planKMC": 850000,
                        "factKMC": 762900,
                        "deviationSum": 762900
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 450,
                        "factPat": 396,
                        "servicesCol": 837,
                        "planKMC": 850000,
                        "factKMC": 762900,
                        "deviationSum": 762900
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 450,
                        "factPat": 396,
                        "servicesCol": 837,
                        "planKMC": 850000,
                        "factKMC": 762900,
                        "deviationSum": 762900
                    }
                }
            }
        }
    },
    "Поликлиника": {
        "Гастроэнтерология": {
            "Петров Ярослав Александрович": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 170,
                        "factPat": 217,
                        "servicesCol": 388,
                        "planKMC": 200000,
                        "factKMC": 487000,
                        "deviationSum": 487000
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 170,
                        "factPat": 217,
                        "servicesCol": 388,
                        "planKMC": 200000,
                        "factKMC": 487000,
                        "deviationSum": 487000
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 170,
                        "factPat": 217,
                        "servicesCol": 388,
                        "planKMC": 200000,
                        "factKMC": 487000,
                        "deviationSum": 487000
                    }
                }
            },
            "Русланбеков Сулеман Абубакарович": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 120,
                        "factPat": 147,
                        "servicesCol": 189,
                        "planKMC": 160000,
                        "factKMC": 173800,
                        "deviationSum": 173800
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 120,
                        "factPat": 147,
                        "servicesCol": 189,
                        "planKMC": 160000,
                        "factKMC": 173800,
                        "deviationSum": 173800
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 120,
                        "factPat": 147,
                        "servicesCol": 189,
                        "planKMC": 160000,
                        "factKMC": 173800,
                        "deviationSum": 173800
                    }
                }
            },
            "Сергеев Дмитрий Петрович": {
                "2019": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 200,
                        "factPat": 167,
                        "servicesCol": 437,
                        "planKMC": 250000,
                        "factKMC": 275400,
                        "deviationSum": 275400
                    }
                },
                "2020": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 200,
                        "factPat": 167,
                        "servicesCol": 437,
                        "planKMC": 250000,
                        "factKMC": 275400,
                        "deviationSum": 275400
                    }
                },
                "2021": {
                    "ВСЕ МЕСЯЦА": {
                        "planPat": 200,
                        "factPat": 167,
                        "servicesCol": 437,
                        "planKMC": 250000,
                        "factKMC": 275400,
                        "deviationSum": 275400
                    }
                }
            }
        }
    }
}
let moneySubdivision = {
    "Лучевая диагностика": {
        "2019": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 255000,
                "discrepancy": 189300
            }
        },
        "2020": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 477300,
                "discrepancy": 370400
            }
        },
        "2021": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 320700,
                "discrepancy": 269000
            }
        }
    },
    "Эндоскопия": {
        "2019": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 86700,
                "discrepancy": 74500
            }
        },
        "2020": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 134500,
                "discrepancy": 157900
            }
        },
        "2021": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 253900,
                "discrepancy": 187400
            }
        }
    },
    "Поликлиника": {
        "2019": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 419400,
                "discrepancy": 397300
            }
        },
        "2020": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 568000,
                "discrepancy": 617100
            }
        },
        "2021": {
            "ВСЕ МЕСЯЦА": {
                "revenue": 375450,
                "discrepancy": 296700
            }
        }
    }
}
let dataTotal = {
    "2019": {
        "ВСЕ МЕСЯЦА": {
            "planPat": 3500,
            "factPat": 3956,
            "servicesCol": 12971,
            "planKMC": 900000,
            "factKMC": 1295480,
            "deviationSum": 395400,
            "revenue": 1295480,
            "discrepancy": 395400
        }
    },
    "2020": {
        "ВСЕ МЕСЯЦА": {
            "planPat": 2900,
            "factPat": 5327,
            "servicesCol": 7892,
            "planKMC": 750000,
            "factKMC": 993600,
            "deviationSum": 243600,
            "revenue": 993600,
            "discrepancy": 243600
        }
    },
    "2021": {
        "ВСЕ МЕСЯЦА": {
            "planPat": 4200,
            "factPat": 3912,
            "servicesCol": 5623,
            "planKMC": 500000,
            "factKMC": 468900,
            "deviationSum": -31100,
            "revenue": 468900,
            "discrepancy": -31100
        }
    }
}
export default class DoctorsSV extends React.Component{
    constructor(props){
        super(props)
        this.state = ({selyear: '2021', selmonth: date["month"][0].toUpperCase()})
        this.date = date;
        this.data = data;
        this.moneySubdivision = moneySubdivision;        
        this.dataTotal = dataTotal;
    }
    OpenSubdivision = (event) => {
        let elem;
        if(event.target.localName == 'i'){
            elem = document.querySelectorAll(`#${event.target.parentNode.parentNode.parentNode.id} .DSV__table-data`)
        }
        else{
            elem = document.querySelectorAll(`#${event.target.parentNode.parentNode.id} .DSV__table-data`)
        }
        if(elem[0].classList.contains('close')){
            for(let i = 0; i < elem.length; i++){
                elem[i].classList.remove('close');
            }
        }
        else{
            for(let i = 0; i < elem.length; i++){
                elem[i].classList.add('close');
            }
        }
    }
    SelectYear=(event)=>{
        this.setState({selyear: event.target.value.toUpperCase()})
    }
    SelectMonth=(event)=>{
        this.setState({selmonth: event.target.value.toUpperCase()})
    }
    Formater = (num) =>{
        if(typeof(num) != "string"){
            return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
        }
        else return num
    }
    render(){
        return(
            <div className = "DSV__main">
                <div className = "title">Сводная - Врачи</div>
                <div className = 'selects_DSV'>
                    <div className='selects__year'>
                        <span>Год: </span>
                        <select className = 'Dash__YearSelect DSV__YearSelect' defaultValue = "2021" onChange={this.SelectYear}>
                        {
                            this.date.year.map((item, index) =>{
                                return(
                                    <AddOptions date = {item} key = {index}/>
                                )
                            })
                        }
                    </select>
                    </div>
                    <div className='selects__month DSVselects__month'>
                        <span>Месяц: </span>
                        <select className = 'Dash__MonthSelect DSV__MonthSelect' onChange={this.SelectMonth}>
                        {
                            this.date.month.map((item, index) =>{
                                return(
                                    <AddOptions date = {item} key = {index}/>
                                )
                            })
                        }
                    </select>
                    </div>
                </div>
                <div className = 'DSV__content'>
                    <div className = 'DSV__table'>
                        <div className = 'Tab__line'>
                            <div className = 'DSV__subdivision_hint'>Подразделение</div>
                            <div className = 'DSV__fulname_hint'>ФИО</div>
                            <div className = 'DSV__branch_hint'>Отделение</div>
                            <div className = 'DSV__planReception_hint'>План <br/> приема </div>
                            <div className = 'DSV__factReception_hint'>Факт <br/> приема</div>
                            <div className = 'DSV__quantityServices_hint'>Количество <br/> услуг</div>
                            <div className = 'DSV__planKMC_hint'>План <br/> КМЦ</div>
                            <div className = 'DSV__factKMC_hint'>Факт <br/> КМЦ</div>
                            <div className = 'DSV__discrepancySum_hint'>Отклонение <br/> в сумме</div>
                            <div className = 'DSV__earningsKMC_hint'>Выручка КМЦ<br/>по подраз.</div>
                            <div className = 'DSV__discrepancyKmc_hint'>Отклонение<br/>по подраз.</div>
                        </div>
                        {
                            Object.keys(this.data).map((item, index) => {
                                return(
                                    <AddSubdivision subdivision = {item} moneySubdivision = {this.moneySubdivision} index = {index} state = {this.state} func = {this.OpenSubdivision} data = {this.data} key = {index} />
                                )
                            })
                        }
                    </div>
                    <div>
                        <div className = 'Tab__line Tab__bottomLine'>
                            <div className = 'DVS__tabResults'>Итоги</div>
                            <div className = 'DSV__planReception'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].planPat)}</div>
                            <div className = 'DSV__factReception'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].factPat)}</div>
                            <div className = 'DSV__quantityServices'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].servicesCol)}</div>
                            <div className = 'DSV__planKMC'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].planKMC)}</div>
                            <div className = 'DSV__factKMC'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].factKMC)}</div>
                            <div className = 'DSV__discrepancySum'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].deviationSum)}</div>
                            <div className = 'DSV__earningsKMC'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].revenue)}</div>
                            {
                                (this.dataTotal[this.state.selyear][this.state.selmonth].discrepancy != "НЕТ" && this.dataTotal[this.state.selyear][this.state.selmonth].discrepancy > 0)?(
                                    <div className = 'DSV__discrepancyKmc DSV__discrepancyKmc-green'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].discrepancy)}</div>
                                ):(
                                    <div className = 'DSV__discrepancyKmc'>{this.Formater(this.dataTotal[this.state.selyear][this.state.selmonth].discrepancy)}</div>
                                )
                            }
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
class AddSubdivision extends React.Component{
    Formater = (num) =>{
        if(typeof(num) != "string"){
            return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
        }
        else return num
    }
    render(){
        return(
            Object.keys(this.props.moneySubdivision[this.props.subdivision]).map(year =>{
                if(year == this.props.state.selyear){
                    return(
                        Object.keys(this.props.moneySubdivision[this.props.subdivision][year]).map(month =>{
                            if(month == this.props.state.selmonth){
                                return(
                                    <div id = {'subdivision__' + this.props.index} key = {this.props.index}>
                                        <div className = 'Tab__line DSV__table-subd'>
                                            <div className = 'DSV__subdivision' onClick = {this.props.func}><i className="fas fa-chevron-down arrow__down"></i> {this.props.subdivision}</div>
                                            <div className = 'DSV__fulname'></div>
                                            <div className = 'DSV__branch'></div>
                                            <div className = 'DSV__planReception'></div>
                                            <div className = 'DSV__factReception'></div>
                                            <div className = 'DSV__quantityServices'></div>
                                            <div className = 'DSV__planKMC'></div>
                                            <div className = 'DSV__factKMC'></div>
                                            <div className = 'DSV__discrepancySum'></div>
                                            <div className = 'DSV__earningsKMC'>{this.Formater(this.props.moneySubdivision[this.props.subdivision][this.props.state.selyear][this.props.state.selmonth].revenue)}</div>
                                            {
                                                (this.props.moneySubdivision[this.props.subdivision][this.props.state.selyear][this.props.state.selmonth].discrepancy != "НЕТ" && this.props.moneySubdivision[this.props.subdivision][this.props.state.selyear][this.props.state.selmonth].discrepancy > 0)?(
                                                    <div className = 'DSV__discrepancyKmc DSV__discrepancyKmc-green'>{this.Formater(this.props.moneySubdivision[this.props.subdivision][this.props.state.selyear][this.props.state.selmonth].discrepancy)}</div>
                                                ):(
                                                    <div className = 'DSV__discrepancyKmc'>{this.Formater(this.props.moneySubdivision[this.props.subdivision][this.props.state.selyear][this.props.state.selmonth].discrepancy)}</div>
                                                )
                                            }
                                        </div>
                                        <AddInformDoc data = {this.props.data[this.props.subdivision]} key = {this.props.index} state = {this.props.state}/>
                                    </div>
                                )
                            }
                        })
                    )
                }
            })
        )
    }
}
class AddInformDoc extends React.Component{
    Formater = (num) =>{
        if(typeof(num) != "string"){
            return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
        }
        else return num
    }
    render(){
            return(
                Object.keys(this.props.data).map(branch =>{
                    return(
                        Object.keys(this.props.data[branch]).map((item, index)  =>{
                            for(let year in this.props.data[branch][item]){
                                if(year == this.props.state.selyear){
                                    for(let month in this.props.data[branch][item][year]){
                                        if(month == this.props.state.selmonth){
                                            return(
                                                <div key = {index} className = 'Tab__line DSV__table-data close'>
                                                    <div className = 'DSV__subdivision' ></div>
                                                    <div className = 'DSV__fulname'>{item}</div>
                                                    <div className = 'DSV__branch'>{branch}</div>
                                                    <div className = 'DSV__planReception'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].planPat)}</div>
                                                    <div className = 'DSV__factReception'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].factPat)}</div>
                                                    <div className = 'DSV__quantityServices'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].servicesCol)}</div>
                                                    <div className = 'DSV__planKMC'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].planKMC)}</div>
                                                    <div className = 'DSV__factKMC'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].factKMC)}</div>
                                                    <div className = 'DSV__discrepancySum'>{this.Formater(this.props.data[branch][item][this.props.state.selyear][this.props.state.selmonth].deviationSum)}</div>
                                                    <div className = 'DSV__earningsKMC'></div>
                                                    <div className = 'DSV__discrepancyKmc'></div>
                                                </div>
                                            )
                                        }
                                    }
                                }
                            }
                            
                            
                        })
                    )
               })
            )
            
    }
}
class AddOptions extends React.Component{
    render(){  
        return(
          <option>{this.props.date} </option>
        )                  
      }
    }