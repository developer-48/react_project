import { string } from '@amcharts/amcharts4/core';
import React from 'react';
let data ={
    "Медицинская клиника": {
        "2019": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 6730123,
                sumndscfo: 91213122,
                paid: 2430135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 5764598,
                sumndscfo: 31123344,
                paid: 145876
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        }
    },
    "Аптека": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Расчеты с персоналом": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "IT": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Хозяйственная часть": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Мед.Оборудование, Мебель": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Пресс-Служба": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Медицинский склад": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Касса": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        } 
    },
    "Колл-Центр": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    },
    "Все ЦФО": {
        "2019": {
            "Все месяца": {
                sumcfo: 2350123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 1350123,
                sumndscfo: 2123122,
                paid: 20135
            }
        },
        "2020": {
            "Все месяца": {
                sumcfo: 2230123,
                sumndscfo: 993122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 4350123,
                sumndscfo: 912312,
                paid: 20135
            }
        },
        "2021": {
            "Все месяца": {
                sumcfo: 2150123,
                sumndscfo: 1123122,
                paid: 20135
            },
            "Январь": {
                sumcfo: 5150123,
                sumndscfo: 123122,
                paid: 20135
            }
        }
    }
}
export default function CFODashInfoBlock(props){
    const Data = () =>{
        let meaning = {};
        for(let cfo in data){
            if(props.cfo == cfo){
                for(let year in data[cfo]){
                    if(props.selyear == year){
                        for(let month in data[cfo][year]){
                            if(props.selmonth == month){
                                meaning = data[cfo][year][month]
                            }
                        }
                    }
                }
            }
        }
        return meaning;
    }
    const TypeText = (num, field) =>{
        if(typeof(num) != string){
            if(field != "paid"){
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
            return new Intl.NumberFormat('ru-RU').format(num)
            
        }
        return num;
    }
    return(
        <div className = "DashGrafOne DashInfoBlock">
            <div className = "DashInfoBlock__title CFODashGrafTitle">Расходование средств</div>
            <div className = "DashInfoBlock__top">
                <div>
                    <div className = "DashInfoBlock__cont-title">Сумма по ЦФО</div>
                    <div className = "DashInfoBlock__cont-subtitle">{TypeText(Data().sumcfo, "sumcfo")}</div>
                </div>
            </div>
            <div className = "DashInfoBlock__bottom">
                <div className = "bottom__right">
                    <div>
                        <div className = "DashInfoBlock__cont-title">Сумма НДС<br/>по ЦФО</div>
                        <div className = "DashInfoBlock__cont-subtitle">{TypeText(Data().sumndscfo, "sumndscfo")}</div>
                    </div>
                </div>
                <div className = "bottom__left">
                    <div>
                        <div className = "DashInfoBlock__cont-title">Оплачены</div>
                        <div className = "DashInfoBlock__cont-subtitle">{TypeText(Data().paid, "paid")} чел.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}