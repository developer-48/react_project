import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function LeasingGrafTwo(props) {
    let chartGrafTwo = useRef(null);
    const Data = () =>{
        let months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        let sum = props.data
        var chartData = [];
      for (var i = 0; (i < sum.length); i++) {
        chartData.push({
          month: months[i],
          value: (sum[i]/1000000).toFixed(1)
        });
      }
      return chartData;
    }
    useEffect(() => {    
    chartGrafTwo.current = am4core.create("LeasingGrafTwo", am4charts.XYChart);
    let colors = (props.color == "red")? "#F14A4A": "#5FE61B";
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
    categoryAxis.startLocation = 0.2;
    categoryAxis.endLocation = 0.9;
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
    lineSeries.tooltipText = "Расходы: {valueY.value} млн";
    // lineSeries.fillOpacity = 0.2;
    lineSeries.fill = am4core.color(colors);
    lineSeries.stroke = am4core.color(colors);
    lineSeries.tensionX = 0.88;
    lineSeries.segments.template.strokeWidth = 3.3;
    lineSeries.stroke = am4core.color(colors);
    lineSeries.segments.template.strokeWidth = 3.5;

    var bullet = lineSeries.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    bullet.circle.fill = am4core.color(colors);
    
    var lineSeriesLabel = lineSeries.bullets.push(new am4charts.LabelBullet());
    lineSeriesLabel.label.text = "{value} млн.";
    lineSeriesLabel.label.verticalCenter = "bottom";
    lineSeriesLabel.label.dx = 14;
    chartGrafTwo.current.cursor = new am4charts.XYCursor();

    
    });
    useEffect(() => {
        chartGrafTwo.current.data = Data();
    });

    return(
            <div id="LeasingGrafTwo"></div>
    )
}