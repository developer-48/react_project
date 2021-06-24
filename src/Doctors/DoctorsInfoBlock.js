import React from 'react';
let data = {
    "Аллергология": {
        "Иванов Сергей Петрович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            }
        },
        "Все врачи": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "147",
                        "interest": "108"
                    },
                    "Summ": {
                        "plan": "180000",
                        "fact": "185700",
                        "interest": "103"
                    }
                }
            }
        }
    },
    "Анестезиология": {
        "Семенов Артур Кагерманович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "17",
                        "fact": "45",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "97",
                        "fact": "235",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "97",
                        "fact": "235",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            }
        },
        "Все врачи": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "97",
                        "fact": "235",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "97",
                        "fact": "235",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "97",
                        "fact": "235",
                        "interest": "238"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "97500",
                        "interest": "217"
                    }
                }
            }
        }
    },
    "Гастроэнтерология": {
        "Петров Ярослав Александрович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "167",
                        "fact": "180",
                        "interest": "101"
                    },
                    "Summ": {
                        "plan": "120000",
                        "fact": "136000",
                        "interest": "112"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "167",
                        "fact": "180",
                        "interest": "101"
                    },
                    "Summ": {
                        "plan": "120000",
                        "fact": "136000",
                        "interest": "112"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "167",
                        "fact": "180",
                        "interest": "101"
                    },
                    "Summ": {
                        "plan": "120000",
                        "fact": "136000",
                        "interest": "112"
                    }
                }
            }
        },
        "Русланбеков Сулеман Абубакарович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "83",
                        "fact": "74",
                        "interest": "86"
                    },
                    "Summ": {
                        "plan": "85000",
                        "fact": "78000",
                        "interest": "88"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "83",
                        "fact": "74",
                        "interest": "86"
                    },
                    "Summ": {
                        "plan": "85000",
                        "fact": "78000",
                        "interest": "88"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "85",
                        "fact": "74",
                        "interest": "86"
                    },
                    "Summ": {
                        "plan": "85000",
                        "fact": "78000",
                        "interest": "88"
                    }
                }
            }
        },
        "Сергеев Дмитрий Петрович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "50",
                        "fact": "53",
                        "interest": "106"
                    },
                    "Summ": {
                        "plan": "55000",
                        "fact": "60000",
                        "interest": "109"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "50",
                        "fact": "53",
                        "interest": "106"
                    },
                    "Summ": {
                        "plan": "55000",
                        "fact": "60000",
                        "interest": "109"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "50",
                        "fact": "53",
                        "interest": "106"
                    },
                    "Summ": {
                        "plan": "55000",
                        "fact": "60000",
                        "interest": "109"
                    }
                }
            }
        },
        "Николаев Захар Мирославович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "97",
                        "interest": "71"
                    },
                    "Summ": {
                        "plan": "140000",
                        "fact": "107000",
                        "interest": "76"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "97",
                        "interest": "71"
                    },
                    "Summ": {
                        "plan": "140000",
                        "fact": "107000",
                        "interest": "76"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "135",
                        "fact": "97",
                        "interest": "71"
                    },
                    "Summ": {
                        "plan": "140000",
                        "fact": "107000",
                        "interest": "76"
                    }
                }
            }
        },
        "Жавлатханов Эми Абдурахманович": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "70",
                        "fact": "87",
                        "interest": "124"
                    },
                    "Summ": {
                        "plan": "75000",
                        "fact": "93000",
                        "interest": "124"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "70",
                        "fact": "87",
                        "interest": "124"
                    },
                    "Summ": {
                        "plan": "75000",
                        "fact": "93000",
                        "interest": "124"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "70",
                        "fact": "87",
                        "interest": "124"
                    },
                    "Summ": {
                        "plan": "75000",
                        "fact": "93000",
                        "interest": "124"
                    }
                }
            }
        },
        "Все врачи": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "1300",
                        "fact": "1167",
                        "interest": "89"
                    },
                    "Summ": {
                        "plan": "1350000",
                        "fact": "1235000",
                        "interest": "91"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "1300",
                        "fact": "1167",
                        "interest": "89"
                    },
                    "Summ": {
                        "plan": "1350000",
                        "fact": "1235000",
                        "interest": "91"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "1300",
                        "fact": "1167",
                        "interest": "89"
                    },
                    "Summ": {
                        "plan": "1350000",
                        "fact": "1235000",
                        "interest": "91"
                    }
                }
            }
        }
    },
    "Все отделения": {
        "Все врачи": {
            "2019": {
                "Все месяца": {
                    "Pat": {
                        "plan": "7500",
                        "fact": "9766",
                        "interest": "130"
                    },
                    "Summ": {
                        "plan": "45000",
                        "fact": "51050",
                        "interest": "113"
                    }
                }
            },
            "2020": {
                "Все месяца": {
                    "Pat": {
                        "plan": "8000",
                        "fact": "7659",
                        "interest": "90"
                    },
                    "Summ": {
                        "plan": "50000",
                        "fact": "47550",
                        "interest": "95,1"
                    }
                }
            },
            "2021": {
                "Все месяца": {
                    "Pat": {
                        "plan": "7000",
                        "fact": "7245",
                        "interest": "103"
                    },
                    "Summ": {
                        "plan": "40000",
                        "fact": "36090",
                        "interest": "90"
                    }
                }
            }
        }
    },
}
export default function DoctorsInfoBlock(props){  
    const branch = props.branch;
    const doctor = props.doctor;
    const selyear = props.selyear;
    const selmonth = props.selmonth; 
    const Branch = () => {
        if(branch != "Все отделения" || (branch == "Все отделения" && doctor == "Все врачи")) return branch;
        else{
            for(let branch in data){
                for(let doc in data[branch]){
                  if(doc == doctor){
                    return branch;
                  }
                }
              }
        }        
                
    }
    const Text = (type, field) =>{
        let num = data[Branch()][[doctor]][selyear][selmonth][type][field];
        if((field == "fact" || field == "plan") && num != "НЕТ"){
           if((Number(num).toFixed(0)+'').length > 6){
               if((num+'').length > 9){
                    return `${new Intl.NumberFormat('ru-RU').format((num / 1000000000).toFixed(2))} млрд.`
               }
               else{
                    return `${new Intl.NumberFormat('ru-RU').format((num / 1000000).toFixed(2))} млн.`
               }
           }
           else if((num+'').length > 4){
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000).toFixed(2))} тыс.`
           }
           else{
                return `${new Intl.NumberFormat('ru-RU').format(num)}`
           }
           
        }
        else if(field == "interest"){
            if((num+'').indexOf(",") > -1){
                num = num.replace(',', '.')
            }
            return Number(num).toFixed(0)
        }
        return num;
    }

    return(
        <div className = 'contentDash__tLeft'>
            {
                (Text("Pat", "interest") > 99)? (
                    <div className = "tLeft__right-item">
                        <div className = "tLeft__toptext">Пациенты</div>
                        <div id = 'cirPat' className = 'contentDash__sircle circle__Pat'>
                            <div><span id ="circlePat">{Text("Pat", "interest")}</span>%</div>                                
                        </div>
                        <div className = "contentDash__info">
                            <div className = 'tLeft__fact'>{Text("Pat", "fact")}</div>
                            <div className = 'tLeft__plan'>План: {Text("Pat", "plan")}</div>
                        </div>
                    </div>
                ):
                (
                    <div className = "tLeft__right-item">
                        <div className = "tLeft__toptext">Пациенты</div>
                        <div id = 'cirPat' className = 'contentDash__sircle circle__Pat-failed'>
                            <div><span id ="circlePat">{Text("Pat", "interest")}</span>%</div>                                
                        </div>
                        <div className = "contentDash__info">
                            <div className = 'tLeft__fact'>{Text("Pat", "fact")}</div>
                            <div className = 'tLeft__plan'>План: {Text("Pat", "plan")}</div>
                        </div>
                    </div>
                )
            }
            {
                (Text("Summ", "interest") > 99)?
                (
                    <div className = "tLeft__left-item">
                        <div className = "tLeft__toptext">Сумма</div>
                        <div id = 'cirSum' className = 'contentDash__sircle circle__Sum'>
                            <div><span id ="circleSum">{Text("Summ", "interest")}</span>%</div>
                        </div>
                        <div className = "contentDash__info">
                            <div className = 'tLeft__fact'>{Text("Summ", "fact")}</div>
                            <div className = 'tLeft__plan'>План: {Text("Summ", "plan")}</div>
                        </div>
                    </div>
                ):
                (
                    <div className = "tLeft__left-item">
                <div className = "tLeft__toptext">Сумма</div>
                <div id = 'cirSum' className = 'contentDash__sircle circle__Sum-failed'>
                    <div><span id ="circleSum">{Text("Summ", "interest")}</span>%</div>
                </div>
                <div className = "contentDash__info">
                    <div className = 'tLeft__fact'>{Text("Summ", "fact")}</div>
                    <div className = 'tLeft__plan'>План: {Text("Summ", "plan")}</div>
                </div>
            </div>
                )
            }
        </div>
    )
                
                
}
