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
                "Все месяца": 3293173,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Аптека": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Расчеты с персоналом": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "IT": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Хозяйственная часть": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Мед.Оборудование, Мебель": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Пресс-Служба": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Медицинский склад": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Касса": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        },
        "Колл-Центр": {
            "2019": {
                "Все месяца": 124144,
                "Январь": 24124214
            },
            "2020": {
                "Все месяца": 3243244,
                "Январь": 657567675
            },
            "2021": {
                "Все месяца": 65756765,
                "Январь": 567567575
            }
        }
    }
export default function CfoDashGrafOne(props){
    let chartGrafOne = useRef(null);
    const Data = () =>{
        let cfO = [];
        let sum = [];
        for(let cfo in data){
            for(let year in data[cfo]){
                if(props.selyear == year){
                    for(let month in data[cfo][year]){
                        if(props.selmonth == month){
                            cfO.push(cfo);
                            sum.push(data[cfo][year][month]);
                        }
                    }
                }
            }
        }
        var chartData = [];
      for (var i = 0; (i < sum.length); i++) {
        chartData.push({
          cfo: cfO[i],
          sum: sum[i]
        });
      }
      return chartData;
    }
    useEffect(() => {
    chartGrafOne.current = am4core.create("chartGrafOne", am4charts.XYChart);
    
    // Add data
    chartGrafOne.current.data = Data();
    chartGrafOne.current.fontFamily = 'Montserrat';
    chartGrafOne.current.fontSize = '80%';
    // Create axes

    var categoryAxis = chartGrafOne.current.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "cfo";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
    categoryAxis.renderer.labels.template.rotation = 320
    categoryAxis.renderer.labels.template.verticalCenter = "center";
    categoryAxis.renderer.labels.template.horizontalCenter = "right";

    var valueAxis = chartGrafOne.current.yAxes.push(new am4charts.ValueAxis());

    // Create series
    var series = chartGrafOne.current.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = "sum";
    series.dataFields.categoryX = "cfo";
    series.name = "Sum";
    series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
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

    series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color("#e19595"), max: am4core.color("#f14a4a") });
    
    chartGrafOne.current.cursor = new am4charts.XYCursor();
    // chartGrafOne.current.cursor = new am4charts.XYCursor();
    // chartGrafOne.current.events.on("hit", function(){
    //     console.log(series.tooltipDataItem.categoryX);
    // })
    });
    useEffect(() => {
        chartGrafOne.current.data = Data();;
    });
    return(
            <div id="chartGrafOne"></div>
    )
}