import React from 'react';
export default function DocIndicatorsInfoblocksLeft(props){
    const TypeText = (field, d = "") =>{
        let num = (props.data[field]);
        if(num == 0){
            return "НЕТ"
        }
        if((num+'').length > 7 || d == "cel"){
            if((num+'').length > 9){
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000000).toFixed(2))} млрд`
            }
            else{
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000).toFixed(2))} млн`
            }
        }
        else{
            if(field == "sum"){
                return `${new Intl.NumberFormat('ru-RU').format((num))}`
            }
            else{
                if((num+'').length > 3){
                    return `${new Intl.NumberFormat('ru-RU').format((num / 1000).toFixed(2))} тыс`
                }
                else{
                    return `${new Intl.NumberFormat('ru-RU').format((num))}`
                }    
            }
            
        }           
    }
    const InterestRet = (field) =>{
        let fact = (props.data[field]);
        let plan = (props.data[field+"Plan"]);
        if(plan == 0) return ""
        let result = (fact / plan * 100 - 100).toFixed(2);
        return (fact == plan)? 0: (fact > plan)? `(+${result}%)`: `(${result}%)`;
    }
    const Color = (field) =>{
        let fact = (props.data[field]);
        let plan = (props.data[field+"Plan"]);
        return (plan == 0 || fact < plan)? "red": "green";
    }
    return(
        <div className = "DocIndicators__Infoblocks">
                <div className = "DocIndicators__Infoblock-One">
                    <div className = "DocIndicatorsInfoblock__title">Колличество пациентов</div>
                    <div className = "DocIndicatorsInfoblock__subTitle">
                        <div className = 'DocIndicatorsInfoblock__subTitle-One blue'>{TypeText("patients")}</div>
                        <div className = "DocIndicatorsInfoblock__subTitle-Two">Цель: {TypeText("patientsPlan")} <span className = {`DocIndicatorsInfoblock__patColor ${Color("patients")}`}><span id = "DocIndicatorsInfoblock__patinterest">{InterestRet("patients")}</span></span></div>
                    </div>
                </div>
                <div className = "DocIndicators__Infoblock-Two">
                    <div className = "DocIndicatorsInfoblock__title">Колличество услуг</div>
                    <div className = "DocIndicatorsInfoblock__subTitle">
                        <div className = 'DocIndicatorsInfoblock__subTitle-One yellow'>{TypeText("services")}</div>
                        <div className = "DocIndicatorsInfoblock__subTitle-Two">Цель: {TypeText("servicesPlan")} <span className = {`DocIndicatorsInfoblock__servicesColor ${Color("services")}`}><span id = "DocIndicatorsInfoblock__servicesinterest">{InterestRet("services")}</span></span></div>
                    </div>
                </div>
                <div className = "DocIndicators__Infoblock-Three">
                    <div className = "DocIndicatorsInfoblock__title">Сумма</div>
                    <div className = "DocIndicatorsInfoblock__subTitle">
                        <div className = {`DocIndicatorsInfoblock__subTitle-One ${(props.data.sum < props.data.sumPlan)? "red": "green"}`}>{TypeText("sum")} <i className="fas fa-ruble-sign"></i></div>
                        <div className = "DocIndicatorsInfoblock__subTitle-Two">Цель: {TypeText("sumPlan", "cel")} <span className = {`DocIndicatorsInfoblock__sumColor ${Color("sum")}`}><span id = "DocIndicatorsInfoblock__suminterest">{InterestRet("sum")}</span></span></div>
                    </div>
                </div>
        </div>
    )
                
                
}
