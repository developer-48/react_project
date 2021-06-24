import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default class AppBdds extends React.Component {
    constructor(props) {
        super(props);
        this.incom = {"2020":[6.7, 8.16, 9.71, 12, 15.07, 12.34, 29.32, 20.73, 19.63, 12.25, 8.84, 13.35]};
        this.expens = {"2020":[12,10,6,7,7.31,13,15.62,20,12.42,16,23,18]}
        console.log(JSON.stringify(this.expens))
        this.state = {year: "2020", income: this.incom["2020"], expens: this.expens["2020"]}
        this.expensOn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.incomOn = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    selChange = (event) => {
        this.setState({year: event.target.value})
        let incom;
        let expens;
        let fullincom = [];
        let fullexpens = [];
        if(event.target.value == "Все"){
            incom = this.incom;
            expens = this.expens;
            for(let year in incom){
                if(incom[year].length > fullincom.length){
                    for(let index in incom[year]){
                        fullincom.push(0);
                    }
                }           
            }
            for(let year in expens){
                if(expens[year].length > fullexpens.length){
                    for(let index in expens[year]){
                        fullexpens.push(0);
                    }
                }
            } 
            for(let year in expens){
                for(let index in expens[year]){
                    fullexpens[index] += expens[year][index];
                }
                console.log(year, expens[year])
            }          
            for(let year in incom){
                for(let index in incom[year]){
                    fullincom[index] += incom[year][index];
                }
            }
            
            this.setState({income: fullincom, expens: fullexpens})
        }
        else{
            this.setState({income: this.incom[event.target.value], expens: this.expens[event.target.value]})
        } 
    }
    generateChartData = (year) => {
        let incom = this.state.income;
        let expens = this.state.expens;
        let Month = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        var chartData = [];
        for (var i = 0; (i < incom.length); i++) {
            chartData.push({
                date: Month[i],
                income: incom[i],
                expenses: expens[i]
            });
        }     
        return chartData;
    }
    componentDidMount = () => {
        /////left top__________________
        var chart_left_top = am4core.create("chartdiv_left-top", am4charts.XYChart);
        chart_left_top.data = this.generateChartData(this.state.year);
        chart_left_top.fontFamily = 'Montserrat';
        chart_left_top.fontSize = '80%';

        var categoryAxis = chart_left_top.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.ticks.template.disabled = true;
        categoryAxis.renderer.line.opacity = 0;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.dataFields.category = "date";
        categoryAxis.startLocation = 0.4;
        categoryAxis.endLocation = 0.6;

        var valueAxis = chart_left_top.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.line.opacity = 0;

        valueAxis.min = 0;

        var lineSeries = chart_left_top.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.categoryX = "date";
        lineSeries.dataFields.valueY = "income";
        lineSeries.tooltipText = "Доходы: {valueY.value} млн";
        lineSeries.fillOpacity = 0.3;
        let gradient = new am4core.LinearGradient();
        gradient.addColor("#ffi", 0.3);
        gradient.addColor("#5bd81c", 1);
        gradient.rotation = 90;
        lineSeries.fill = gradient;
        lineSeries.stroke = am4core.color("#5bd81c");
        lineSeries.tensionX = 0.88;
        lineSeries.segments.template.strokeWidth = 3.3;

        var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 2;
        bullet.circle.fill = am4core.color("#0c4308");

        chart_left_top.cursor = new am4charts.XYCursor();
        this.chart_left_top = chart_left_top;

        /////right top__________________
        var chart_right_top = am4core.create("chartdiv_right-top", am4charts.XYChart);

        chart_right_top.data = chart_left_top.data;
        chart_right_top.fontFamily = 'Montserrat';
        chart_right_top.fontSize = '80%';

        var categoryAxis = chart_right_top.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.ticks.template.disabled = true;
        categoryAxis.renderer.line.opacity = 0;
        categoryAxis.renderer.grid.template.disabled = true;
        categoryAxis.renderer.minGridDistance = 40;
        categoryAxis.dataFields.category = "date";
        categoryAxis.startLocation = 0.4;
        categoryAxis.endLocation = 0.6;

        var valueAxis = chart_right_top.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.line.opacity = 0;
        valueAxis.renderer.ticks.template.disabled = true;
        valueAxis.min = 0;

        var lineSeries = chart_right_top.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.categoryX = "date";
        lineSeries.dataFields.valueY = "expenses";
        lineSeries.tooltipText = "Расходы: {valueY.value} млн";
        lineSeries.fillOpacity = 0.2;
        let gradieent = new am4core.LinearGradient();
        gradieent.addColor("#ffi", 0.1);
        gradieent.addColor("#ff3a33", 1);
        gradieent.rotation = 90;
        lineSeries.fill = gradieent;
        lineSeries.stroke = am4core.color("#ff3a33");
        lineSeries.tensionX = 0.88;
        lineSeries.segments.template.strokeWidth = 3.3;

        var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 2;
        bullet.circle.fill = am4core.color("#7f0e0e");

        chart_right_top.cursor = new am4charts.XYCursor();
        this.chart_right_top = chart_right_top;

        ///left down_____________________
        // Create chart instance
        var chart_left_down = am4core.create("chartdiv_left-down", am4charts.XYChart);

        // Add data
        chart_left_down.data = chart_left_top.data;
        chart_left_down.fontFamily = 'Montserrat';
        chart_left_down.fontSize = '80%';

        // Create axes
        var categoryAxis = chart_left_down.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 1;
        categoryAxis.renderer.opposite = true;

        var valueAxis = chart_left_down.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        // Create series
        function createSeries(field, name, color) {
            var series = chart_left_down.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "date";
            series.name = name;
            series.fill = am4core.color(color)
            series.stroke = am4core.color(color);
            series.columns.template.tooltipText = "{name}: [bold]{valueY} млн";
            series.columns.template.column.cornerRadiusTopRight = 2.5;
            series.columns.template.column.cornerRadiusTopLeft = 2.5;
            series.columns.template.width = am4core.percent(78);
        }

        createSeries("income", "Доходы", '#5bd81c');
        createSeries("expenses", "Расходы", '#ff3a33');

        chart_left_down.behavior = "zoomX";
        this.chart_left_down = chart_left_down;

        ///// right down_______________________________
        // Create chart instance
        var chart_right_down = am4core.create("chartdiv_right-down", am4charts.XYChart);

        // Add data
        chart_right_down.data = chart_left_top.data;
        chart_right_down.fontFamily = 'Montserrat';
        chart_right_down.fontSize = '80%';

        // Create category axis
        var categoryAxis = chart_right_down.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "date";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 0.9;
        categoryAxis.renderer.opposite = true;
        // Create value axis
        var valueAxis = chart_right_down.yAxes.push(new am4charts.ValueAxis());

        valueAxis.renderer.minLabelPosition = 0.01;

        // Create series
        var series1 = chart_right_down.series.push(new am4charts.LineSeries());
        series1.dataFields.valueY = "income";
        series1.dataFields.categoryX = "date";
        series1.name = "Доходы";
        var bullet = series1.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 4;
        series1.tooltipText = "{name} {valueY} млн";
        series1.legendSettings.valueText = "{valueY}";
        series1.visible = false;
        series1.stroke = am4core.color("#5bd81c");
        series1.fill = am4core.color("#5bd81c");
        series1.tensionX = 0.88;
        series1.segments.template.strokeWidth = 3.5;

        var series2 = chart_right_down.series.push(new am4charts.LineSeries());
        series2.dataFields.valueY = "expenses";
        series2.dataFields.categoryX = "date";
        series2.name = 'Расходы';
        var bullet = series2.bullets.push(new am4charts.CircleBullet());
        bullet.circle.radius = 4;
        series2.tooltipText = "{name} {valueY} млн";
        series2.legendSettings.valueText = "{valueY}";
        series2.visible = true;
        series2.stroke = am4core.color("#ff3a33");
        series2.fill = am4core.color("#ff3a33");
        series2.tensionX = 0.88;
        series2.segments.template.strokeWidth = 3.5;

        // Add chart cursor
        chart_right_down.cursor = new am4charts.XYCursor(); // выводит информацию при наведении на точку
        chart_right_down.cursor.behavior = "zoomX";

        this.chart_right_down = chart_right_down;
    }

    componentDidUpdate(oldProps) {
        if (oldProps.data !== this.generateChartData(this.state.year)) {
            this.chart_left_top.data = this.generateChartData(this.state.year);
            this.chart_right_top.data = this.chart_left_top.data;
            this.chart_left_down.data = this.chart_left_top.data;
            this.chart_right_down.data = this.chart_left_top.data;
        }
    }

    arraySum(array) {
        var sum = 0;
        for (var i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum;
    }
    arrayWrite(array) {
        let sum = this.arraySum(array)
        if (sum > 1000) {
            return `${(sum / 1000).toFixed(2)} млрд`;
        }
        else {
            return `${sum.toFixed(2)} млн`;
        }
    }
    onExpenses = () => {
        let a = this.state.expens;
        this.setState({ expens: this.expensOn });
        this.expensOn = a;
        let element = document.getElementById("expense__btn");
        if (!element.classList.contains("OnBtn")) {
            element.classList.add("OnBtn");
        } else {
            element.classList.remove("OnBtn");
        }
    }
    onIncomes = () => {
        let a = this.state.income;
        this.setState({ income: this.incomOn });
        this.incomOn = a;
        let element = document.getElementById("income__btn");
        if (!element.classList.contains("OnBtn")) {
            element.classList.add("OnBtn");
        } else {
            element.classList.remove("OnBtn");
        }
    }
    render() {
        return (
            <div id='Bdds' >
                <select id='sel' defaultValue= "2020" onChange={this.selChange}>
                    <option>Все</option>
                    {
                        Object.keys(this.incom).map((item, index) => {
                            return (
                                <Options year={item} key={index}/>
                            )
                        })
                    }
                </select>
                <div className="title">Бюджет движения денежных средств</div>
                <div className="top_title">
                    <div className="title__block">
                        <div className="span">Сумма доходов</div>
                        <div id="top__title-left">{this.arrayWrite(this.state.income)} <i className="fas fa-sort-up"></i></div>
                    </div>
                    <div className="onGraf">
                        <div className="income">
                            <div className="income__title">Доходы</div>
                            <button id="income__btn" onClick={this.onIncomes}></button>
                        </div>
                        <div className="expense">
                            <button id="expense__btn" onClick={this.onExpenses}></button>
                            <div className="expense__title">Расходы</div>
                        </div>
                    </div>
                    <div>
                        <div className="span">Сумма расходов </div>
                        <div id="top__title-right">{this.arrayWrite(this.state.expens)} <i className="fas fa-sort-down"></i></div>
                    </div>
                </div>
                <div className="top">
                    <div className="top__left">
                        <div id="chartdiv_left-top"></div>
                    </div>
                    <div className="top__right">
                        <div id="chartdiv_right-top"></div>
                    </div>
                </div>
                <div className="down">
                    <div className="down__left">
                        <div id="chartdiv_left-down"></div>
                    </div>
                    <div className="down__right">
                        <div id="chartdiv_right-down"></div>
                    </div>
                </div>
            </div>
        )
    }
}

class Options extends React.Component {
    render() {
        return (
            <option>{this.props.year}</option>
        )
    }
}