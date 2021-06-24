import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);
export default function LeasingGrafOne(props){
    let chartGrafOne = useRef(null);
    const Data = () =>{
        let months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        let sum = props.data
        var chartData = [];
      for (var i = 0; (i < sum.length); i++) {
        chartData.push({
          month: months[i],
          sum: (sum[i]/1000000).toFixed(1)
        });
      }
      return chartData;
    }
    useEffect(() => {
    chartGrafOne.current = am4core.create("LeasingGrafOne", am4charts.XYChart);
    let colors = (props.color == "red")? ["#e19595", "#f14a4a"]:["#ADE890", "#6CE82E"];
    // Add data
    chartGrafOne.current.data = Data();
    chartGrafOne.current.fontFamily = 'Montserrat';
    chartGrafOne.current.fontSize = '80%';
    // Create axes

    var categoryAxis = chartGrafOne.current.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "month";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.rotation = 320
    categoryAxis.renderer.labels.template.verticalCenter = "center";
    categoryAxis.renderer.labels.template.horizontalCenter = "right";

    var valueAxis = chartGrafOne.current.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chartGrafOne.current.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "sum";
    series.dataFields.categoryX = "month";
    series.name = "Sum";
    series.columns.template.tooltipText = "[bold]{valueY}[/] млн";
    series.columns.template.fillOpacity = .8;
    // let gradieent = new am4core.LinearGradient();
    // gradieent.addColor("#971717");
    // gradieent.addColor("#bd4122");
    // gradieent.addColor("#e77a31");
    // gradieent.rotation = 90;
    let columnTemplate = series.columns.template;
    columnTemplate.width = am4core.percent(80);
    columnTemplate.maxWidth = 90;
    columnTemplate.column.cornerRadius(8, 8, 0, 0);
    columnTemplate.strokeWidth = 1;
    columnTemplate.strokeOpacity = 0;
    series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color(colors[0]), max: am4core.color(colors[1]) });
    
    // chartGrafOne.current.cursor = new am4charts.XYCursor();
    // chartGrafOne.current.events.on("hit", function(){
    //     console.log(series.tooltipDataItem.categoryX);
    // })
    });
    useEffect(() => {
        chartGrafOne.current.data = Data();
    });
    return(
            <div className="LeasingGrafOne"></div>
            
    )
}