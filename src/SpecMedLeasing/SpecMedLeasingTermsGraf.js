import React, {useState, useEffect, useRef} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

let data ={
  "Медицинская клиника": {
    "2019": {
      "Все месяца": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ],
      "Январь": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ]
    },
    "2020": {
      "Все месяца": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ],
      "Январь": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ]
    },
    "2021": {
      "Все месяца": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ],
      "Январь": [
        {
          name: "ОМС",
          sum: 735454,
        },
        {
          name: "Коммерция",
          sum: 735454,
        },
        {
          name: "Без счета",
          sum: 735454,
        }
      ]
    }
  }
}

export default function SpecMedLeasingTermsGraf(props){
    let chartGrafThree = useRef(null);
    const Data = () =>{
      let meaning = {};
      for(let cfo in data){
          for(let year in data[cfo]){
              if(props.selyear == year){
                for(let month in data[cfo][year]){
                  if(props.selmonth == month){
                    meaning = data[cfo][year][month]
                    for(let obj in meaning){
                      meaning[obj].sum = Formater(meaning[obj].sum) 
                      if(meaning[obj].name == "ОМС"){
                        meaning[obj].color = "#f14a4a";
                      }
                      else if(meaning[obj].name == "Коммерция"){
                        meaning[obj].color = "#4af150";
                      }
                      else if(meaning[obj].name == "Без счета"){
                        meaning[obj].color = "#f0ae48";
                      }
                    }
                  }
                }
              }
            }
      }
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

    chartGrafThree.current.hiddenState.properties.opacity = 0; 

    chartGrafThree.current.innerRadius = am4core.percent(65);

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
        <div className = "SpecMedLeasingTermsGraf">
            <div id="chartGrafThree"></div>
        </div>
    )
}