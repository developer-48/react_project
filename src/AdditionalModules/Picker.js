import { DATE } from '@amcharts/amcharts4/core';
import React from 'react';
import Calendar from 'react-calendar';
import "./Picker.css";

export default class Picker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDate: false, error: ""};
    }
    onChange = date => {
        this.setState({ date, value: date, showDate: true,})
    }
    reset = () => {
        this.setState({showDate: false, date: [], value: ''})
    }
    render() {
        if(this.state.showDate && this.state.date[0].toLocaleDateString() !== this.state.date[1].toLocaleDateString()){
            return(
                <div className = "Calend">
                    <div className = 'dateRange'> <span className = 'dateRange__Period'>Дата:</span> <span id = 'startDate'>{this.state.date[0].toLocaleDateString()}</span> - <span id = 'endDate'>{this.state.date[1].toLocaleDateString()}</span></div>
                <div onClick = {this.reset}>
                    <Calendar
                    onChange={this.onChange}
                    selectRange={true}
                    select = {true}
                    />
                </div>
            </div>
           )
        }
        if(this.state.showDate && this.state.date[0].toLocaleDateString() === this.state.date[1].toLocaleDateString()){
            return(
                <div className = "Calend">
                    <div className = 'dateRange'> <span className = 'dateRange__Period'>Дата:</span> <span id = 'startDate'>{this.state.date[0].toLocaleDateString()}</span> <span className="endDateON" id = 'endDate'>{this.state.date[1].toLocaleDateString()}</span></div>
                <div onClick = {this.reset}>
                    <Calendar
                    onChange={this.onChange}
                    selectRange={true}

                    />
                </div>
            </div>
           )
        }
        else{
            return(
                <div className = "Calend">
                    <div className = 'dateRange'> <span className = 'dateRange__Period'>Дата:</span></div>
                <div onClick = {this.reset}>
                    <Calendar
                    onChange={this.onChange}
                    selectRange={true}
                    />
                </div>
            </div>
        )
        }
    }
}
