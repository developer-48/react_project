import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);


export default class DoctorsDashGrafTwo extends React.Component{
    constructor(props){
        super(props)
        this.state = ({branch: ""})
        this.BranchesData = this.props.BranchesData;
        
    }
    // Create chart instance
    generateChartData = (BranchesData, selyear, selmonth) =>{
        let fact = [];
        let branches = [];
        for(let year in BranchesData){
            if(year == selyear){
                for(let branch in BranchesData[year]){
                    if(branch == "Магнитно-резонансная томография"){
                        branches.push("Магнитно-резонансная \nтомография")
                    }
                    else{
                        branches.push(branch)
                    }
                    fact.push(BranchesData[year][branch])
                }
            }
        }
        var chartData = [];
        for (var i = 0; i < branches.length; i++) {
          chartData.push({
            branch: branches[i],
            fact: fact[i],
          });
        }
        let b = 0;
        for(let i in fact){
            for(let item in fact){
                if(fact[i] > fact[item]){
                    b = fact[i];
                    fact[i] = fact[item];
                    fact[item] = b;
                }
            }
        }
        for(let item in fact){
            for(let i in fact){
                if(chartData[i].fact == fact[item]){
                    b = chartData[i];
                    chartData[i] = chartData[item];
                    chartData[item] = b;
                }
            }
        }
        return chartData;
    }
    componentDidMount = () => {
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chartGenerally = am4core.create("chartdiv__Generally", am4charts.XYChart);
    chartGenerally.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chartGenerally.data = this.generateChartData(this.BranchesData, this.props.selyear, this.props.selmonth);
    this.setState({count: chartGenerally.data.length})
    chartGenerally.fontFamily = 'Montserrat';
    chartGenerally.fontSize= '80%';
    var categoryAxis = chartGenerally.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "branch";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    chartGenerally.valueAxis = chartGenerally.yAxes.push(new am4charts.ValueAxis());
    chartGenerally.valueAxis.min = 0;
    chartGenerally.valueAxis.max = this.props.max.maxfact + this.props.max.maxfact / 8;
    chartGenerally.valueAxis.strictMinMax = true;
    chartGenerally.valueAxis.renderer.minGridDistance = 35;
    // axis break
    
    chartGenerally.axisBreak = chartGenerally.valueAxis.axisBreaks.create();
    
    chartGenerally.axisBreak.startValue =this.props.max.maxtwo - this.props.max.maxfact / 4;
    chartGenerally.axisBreak.endValue = this.props.max.maxfact - this.props.max.maxfact / 8;
    
    // fixed axis break
    var d = (chartGenerally.axisBreak.endValue - chartGenerally.axisBreak.startValue) / (chartGenerally.valueAxis.max - chartGenerally.valueAxis.min);
    chartGenerally.axisBreak.breakSize = 0.05 * (1 - d) / d; // 0.05 means that the break will take 5% of the total value axis height
    
    // make break expand on hover
    var hoverState = chartGenerally.axisBreak.states.create("hover");
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 1500;
    
    chartGenerally.axisBreak.defaultState.transitionDuration = 1500;
    
    var series = chartGenerally.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "branch";
    series.dataFields.valueY = "fact";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 20;
    series.columns.template.strokeOpacity = 0;
        series.columns.template.column.cornerRadiusTopRight = 10;
    series.columns.template.column.cornerRadiusTopLeft = 10;
    series.columns.template.width = am4core.percent(55);
    series.columns.template.adapter.add("fill", function(fill, target) {
        return chartGenerally.colors.getIndex(target.dataItem.index);
    });
    //Цвет в зависимости от значения
    // series.columns.template.width = am4core.percent(80);
    // series.columns.template.maxWidth = 90;
    // series.columns.template.column.cornerRadius(15, 15, 0, 0);
    // series.columns.template.strokeWidth = 2;
    // series.columns.template.strokeOpacity = 0;
    // series.heatRules.push({ target: series.columns.template, property: "fill", dataField: "valueY", min: am4core.color("#e77a31"), max: am4core.color("#5bd81c") });

    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    

    chartGenerally.columnSpacing = 5
    chartGenerally.cursor = new am4charts.XYCursor();

    this.chartGenerally = chartGenerally;
}

componentDidUpdate(oldProps){
    if (oldProps.data !== this.generateChartData(this.BranchesData, this.props.selyear, this.props.selmonth))
    this.chartGenerally.data = this.generateChartData(this.BranchesData, this.props.selyear, this.props.selmonth);
    this.chartGenerally.valueAxis.max = this.props.max.maxfact + 100000;
    this.chartGenerally.axisBreak.startValue =this.props.max.maxtwo - 100000;
    this.chartGenerally.axisBreak.endValue = this.props.max.maxfact-100000;
}

    render(){
        return(
            <div className = 'Dash__twoGraf'>
                <div className = 'chartdiv__Generally' style={{ width: `${33*this.state.count}%`}}></div>
            </div>
            
        )
    }
}

