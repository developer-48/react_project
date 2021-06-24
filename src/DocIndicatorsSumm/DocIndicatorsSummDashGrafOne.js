import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function DocIndicatorsTwoDashGrafOne(props) {
    let chartGrafTwo = useRef(null);
    const Data = () =>{
        let months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        let sum = props.data
        var chartData = [];
      for (var i = 0; (i < sum.length); i++) {
        chartData.push({
          month: months[i],
          value: sum[i].toFixed(0)
        });
      }
      return chartData;
    }
    useEffect(() => {    
    chartGrafTwo.current = am4core.create("DocIndicatorsTwoDashGrafOne", am4charts.XYChart);
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
    categoryAxis.startLocation = 0;
    categoryAxis.endLocation = 1;
    categoryAxis.renderer.grid.template.disabled = false;

    var valueAxis = chartGrafTwo.current.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.line.opacity = 0;
    valueAxis.renderer.ticks.template.disabled = true;
    valueAxis.min = 0;

    var lineSeries = chartGrafTwo.current.series.push(new am4charts.LineSeries());
    lineSeries.dataFields.categoryX = "month";
    lineSeries.dataFields.valueY = "value";
    lineSeries.tooltipText = "Сумма: {valueY.value}";
    lineSeries.fill = am4core.color("#E6CB1B");
    lineSeries.tensionX = 0.88;
    lineSeries.segments.template.strokeWidth = 3.3;
    lineSeries.stroke = am4core.color("#E6CB1B");
    lineSeries.segments.template.strokeWidth = 3.5;

    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color("#E6CB1B");
    
    chartGrafTwo.current.cursor = new am4charts.XYCursor();

    
    });
    useEffect(() => {
        chartGrafTwo.current.data = Data();
    });

    return(
            <div id="DocIndicatorsTwoDashGrafOne"></div>
    )
}