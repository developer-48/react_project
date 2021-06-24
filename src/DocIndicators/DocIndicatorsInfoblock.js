import React from 'react';
export default function DocIndicatorsInfoblocksLeft(props){
    const TypeText = (field) =>{
        let num = (props.data[field]);
        if((num+'').length > 6){
            if((num+'').length > 9){
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000000).toFixed(2))} млрд`
            }
            else{
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000).toFixed(2))} млн`
            }
        }
        else if((num+'').length > 3){
            return `${new Intl.NumberFormat('ru-RU').format((num / 1000).toFixed(2))} тыс`
        }
        else{
            return `${new Intl.NumberFormat('ru-RU').format((num))}`
        }           
    }
    const InterestRet = (field) =>{
        let fact = (props.data[field]);
        let plan = (props.data[field+"Plan"]);
        if(plan == 0) return "НЕТ"
        let result = (fact / plan * 100).toFixed(2);
        return `${result}%`;
    }
    const Color = (field) =>{
        let fact = (props.data[field]);
        let plan = (props.data[field+"Plan"]);
        if(field == "sum"){
            return (plan == 0)? "CirclegreySumm": (fact < plan)? "CircleredSumm": "CirclegreenSumm";
        }
        return (plan == 0)? "Circlegrey": (fact < plan)? "Circlered": "Circlegreen";
    }
    return(
        <div className = "DocIndicatorsTop__Right">
            <div className = "DocIndicatorsRight-itemThree">
                <div className = "DocIndicatorsRight__title">Пациенты</div>
                <div className = {`DocIndicatorsRight__subtitle ${(props.data.patients < props.data.patientsPlan)? "red": "green"}`}>{TypeText("patients")}</div>
                <div className = {`DocIndicators__sircle ${Color("patients")}`}>
                    <div><span>{InterestRet("patients")}</span></div>                               
                </div>
            </div>
            <div className = "DocIndicatorsRight-itemOne">
                <div className = "DocIndicatorsRight__title">Услуги</div>
                <div className = {`DocIndicatorsRight__subtitle ${(props.data.services < props.data.servicesPlan)? "red": "green"}`}>{TypeText("services")}</div>
                <div className = {`DocIndicators__sircle ${Color("services")}`}>
                    <div><span>{InterestRet("services")}</span></div>                                
                </div>
            </div>
            <div className = "DocIndicatorsRight-itemTwo">
                <div className = "DocIndicatorsRight__title">Сумма</div>
                <div className = {`DocIndicatorsRight__subtitle ${(props.data.sum < props.data.sumPlan)? "red": "green"}`}>{TypeText("sum")}</div>
                <div className = {`DocIndicators__sircle ${Color("sum")}`}>
                    <div><span>{InterestRet("sum")}</span></div>
                </div>
            </div>
        </div>
    )
                
                
}