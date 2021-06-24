import Calendar from 'react-calendar';
export default function Calend(props){
    const date = props.date;
    const showDate = props.showDate;
    const reset = props.reset;
    const onChange = props.onChange;
    if(showDate && date[0].toLocaleDateString() !== date[1].toLocaleDateString()){
        return(
            <div className = "DocIndicatorsCalend__parent">
                <div onClick = {props.DisplayCalend} className = "dateRange__Per"><span className = "dateRange__Per-title" >Период: </span><span id = "startDate">{props.date[0].toLocaleDateString()}</span> - <span id = "endDate">{props.date[1].toLocaleDateString()}</span><img id = "deleteIcon" src = "img/deleteicon.png" onClick = {reset} /></div>
                <div id = "DocIndicatorsCalend" className = "CalendOf" onClick = {reset}>
                    <Calendar
                    onChange={onChange}
                    selectRange={true}
                    value = {null}
                    />
                </div>
            </div>
        )
    }
    if(showDate && date[0].toLocaleDateString() === date[1].toLocaleDateString()){
        return(
            <div className = "DocIndicatorsCalend__parent">
                <div onClick = {props.DisplayCalend} className = "dateRange__Per"><span className = "dateRange__Per-title">Период: </span><span id = "startDate">{props.date[0].toLocaleDateString()}</span> <span style = {{display: "none"}} id = "endDate">{props.date[1].toLocaleDateString()}</span><img id = "deleteIcon" src = "img/deleteicon.png" onClick = {reset}/></div>
                <div className = "CalendOf" id = "DocIndicatorsCalend" onClick = {reset}>
                    <Calendar
                    onChange={onChange}
                    selectRange={true}
                    value = {null}
                    />
                </div>
            </div>
        )
    }
    else{
        return(
            <div className = "DocIndicatorsCalend__parent">
                <div onClick = {props.DisplayCalend} className = "dateRange__Per"><span className = "dateRange__Per-title">Период </span><span id = "startDate"></span> <span id = "endDate"></span><i id = "CalendArrow" className="fas fa-chevron-down"></i></div>
                <div className = "CalendOf" id = "DocIndicatorsCalend" onClick = {reset}>
                    <Calendar
                    onChange={onChange}
                    selectRange={true}
                    value = {null}
                    />
                </div>
            </div>
        )
    }
}