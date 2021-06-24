import React, {useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function SpecMedLeasingDashGrafTwo(props){
    let chartGrafOne = useRef(null);
    const Data = () =>{
        let paid = props.paid;
        let timing = props.timing;
        let months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
        var chartData = [];
      for (var i = 0; (i < timing.length); i++) {
        chartData.push({
          month: months[i],
          timing: timing[i],
          paid: paid[i]
        });
      }
      return chartData;
    }
    useEffect(() => {
        chartGrafOne.current = am4core.create("SpecMedLeasingDashGrafTwo", am4charts.XYChart);

        // Add data
        chartGrafOne.current.data = Data();
        chartGrafOne.current.fontFamily = 'Montserrat';
        chartGrafOne.current.fontSize = '80%';

        // Create axes
        var categoryAxis = chartGrafOne.current.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "month";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 20;
        categoryAxis.renderer.cellStartLocation = 0.1;
        categoryAxis.renderer.cellEndLocation = 1;

        var valueAxis = chartGrafOne.current.yAxes.push(new am4charts.ValueAxis());
        valueAxis.min = 0;

        // Create series
        function createSeries(field, name, color, text) {
            var series = chartGrafOne.current.series.push(new am4charts.ColumnSeries());
            series.dataFields.valueY = field;
            series.dataFields.categoryX = "month";
            series.name = name;
            series.fill = am4core.color(color)
            series.stroke = am4core.color(color);
            series.columns.template.tooltipText = "{name}: [bold]{valueY}";
            series.columns.template.column.cornerRadiusTopRight = 2.5;
            series.columns.template.column.cornerRadiusTopLeft = 2.5;
            series.columns.template.width = am4core.percent(78);
        }

        createSeries("paid", "Оплачено", '#5bd81c', "paidText");
        createSeries("timing", "Сроки", '#1BBCE6', "timingText");

        chartGrafOne.current.legend = new am4charts.Legend();
        chartGrafOne.current.legend.useDefaultMarker = true;
        chartGrafOne.current.legend.position = "top";
        chartGrafOne.current.legend.markers.template.width = 18;
        chartGrafOne.current.legend.markers.template.height = 18;
        chartGrafOne.current.legend.width = am4core.percent(95);
        chartGrafOne.current.legend.align = "right"
        chartGrafOne.current.legend.markers.template.children.getIndex(0).cornerRadius(12, 12, 12, 12);

        // chartGrafOne.current.cursor = new am4charts.XYCursor();
        chartGrafOne.current.behavior = "zoomX";
    });
    useEffect(() => {
        chartGrafOne.current.data = Data();
    });
    return(
            <div id="SpecMedLeasingDashGrafTwo"></div>
    )
}