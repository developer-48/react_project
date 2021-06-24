import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function DocIndicatorsGrafTwo(props) {
    let chartGrafTwo = useRef(null);
    const Data = () =>{
        let months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        let summ = props.data
        var chartData = [];
      for (var i = 0; (i < summ.length); i++) {
        chartData.push({
          month: months[i],
          value: summ[i]
        });
      }
      return chartData;
    }
    useEffect(() => {    
    chartGrafTwo.current = am4core.create("DocIndicatorsGrafTwo", am4charts.XYChart);
    let colors = (props.color == "red")? ["#e19595", "#f14a4a"]: (props.color == "green")? ["#ADE890", "#6CE82E"]: (props.color == "blue")? ["#9FC7E2", "#1B95E6"]:["#E5DB9D", "#E6CB1B"];
    chartGrafTwo.current.data = Data();
    chartGrafTwo.current.fontFamily = 'Montserrat';
    chartGrafTwo.current.fontSize = '80%';

    var categoryAxis = chartGrafTwo.current.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.ticks.template.disabled = true;
    categoryAxis.renderer.line.opacity = 0;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.dataFields.category = "month";
    categoryAxis.startLocation = 0.4;
    categoryAxis.endLocation = 0.6;
    // categoryAxis.renderer.labels.template.rotation = 330
    // categoryAxis.renderer.labels.template.verticalCenter = "top";
    // categoryAxis.renderer.labels.template.horizontalCenter = "right";

    var valueAxis = chartGrafTwo.current.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chartGrafTwo.current.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "month";
    lineSeries.dataFields.valueY = "value";
    lineSeries.tooltipText = `${(props.color == "blue")? "Пациенты:": (props.color == "")? "Услуги:": "Сумма:" } {valueY.value}`; 
    lineSeries.fillOpacity = 0.2;
    let gradieent = new am4core.LinearGradient();
    gradieent.addColor("#ffi", 0.1);
    gradieent.addColor(colors[1], 1);
    gradieent.rotation = 90;
    lineSeries.fill = gradieent;
    lineSeries.stroke = am4core.color(colors[1]);
    lineSeries.tensionX = 0.88;
    lineSeries.segments.template.strokeWidth = 3.3;
    lineSeries.stroke = am4core.color(colors[1]);
    lineSeries.segments.template.strokeWidth = 3.5;


    
    var lineSeriesLabel = lineSeries.bullets.push(new am4charts.LabelBullet());
    lineSeriesLabel.label.verticalCenter = "bottom";
    lineSeriesLabel.label.dx = 14;
    chartGrafTwo.current.cursor = new am4charts.XYCursor();

    
    });
    useEffect(() => {
        chartGrafTwo.current.data = Data();
    });

    return(
            <div id="DocIndicatorsGrafTwo"></div>
    )
}