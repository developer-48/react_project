import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default function SpecMedLeasingDashGrafOne(props){
    let chartGrafThree = useRef(null);
    const Data = () =>{
      let meaning = props.data;
      meaning[0].color = "#748CB9"
      meaning[1].color = "#5FE61B"
      return meaning;
    }
    const Formater = (num) =>{
      if(typeof(num) != "string"){
          return new Intl.NumberFormat('ru-RU').format(num.toFixed(0))
      }
      else return num
  }
    useEffect(() => {    
        chartGrafThree.current = am4core.create("chartGrafThree", am4charts.PieChart);
    // Add data
    chartGrafThree.current.data = Data();
    chartGrafThree.current.fontFamily = 'Montserrat';
    chartGrafThree.current.fontSize = '80%';
    // Create axes

    chartGrafThree.current.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chartGrafThree.current.legend = new am4charts.Legend();
    chartGrafThree.current.legend.position = "top";
    chartGrafThree.current.legend.align = "center"
    chartGrafThree.current.legend.markers.template.width = 13;
    chartGrafThree.current.legend.markers.template.height = 13;
    chartGrafThree.current.legend.useDefaultMarker = true;
    chartGrafThree.current.legend.markers.template.children.getIndex(0).cornerRadius(12, 12, 12, 12);

    chartGrafThree.current.innerRadius = am4core.percent(60);

    var series = chartGrafThree.current.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "sum";
    series.dataFields.category = "name";
    series.slices.template.propertyFields.fill = "color";
    series.labels.template.disabled = true;
    series.ticks.template.disabled = true;
    
    });
    useEffect(() => {
        chartGrafThree.current.data = Data();
    });

    return(
            <div id="chartGrafThree"></div>
    )
}