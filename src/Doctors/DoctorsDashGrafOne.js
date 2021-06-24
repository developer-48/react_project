import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_dark from "@amcharts/amcharts4/themes/dark";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_dark);
am4core.useTheme(am4themes_animated);

export default class DoctorsDashGrafOne extends React.Component{
    constructor(props){
        super(props)
        this.state = ({nav: 'По сумме'});
        this.doctorsSumFact = this.props.doctorsSumFact;
        this.doctorsPatFact = this.props.doctorsPatFact;
        this.doctorsSumPlan = this.props.doctorsSumPlan;
        this.doctorsPatPlan = this.props.doctorsPatPlan;
        this.PlangenerallySum = this.props.PlangenerallySum;
        this.FactgenerallySum = this.props.FactgenerallySum;
        this.PlangenerallyPat = this.props.PlangenerallyPat;
        this.FactgenerallyPat = this.props.FactgenerallyPat;
        this.GenerallyBranchesFactSum = this.props.GenerallyBranchesFactSum;        
        this.GenerallyBranchesFactPat = this.props.GenerallyBranchesFactPat;
        this.GenerallyBranchesPlanSum = this.props.GenerallyBranchesPlanSum;        
        this.GenerallyBranchesPlanPat = this.props.GenerallyBranchesPlanPat;
    }
    // Create chart instance
    generateChartData = (Factgenerally, Plangenerally, state, doctorsfact, doctorsplan, GenerallyBranchesFact, GenerallyBranchesPlan, condination) =>{
      let date = [];
      let plan = [];
      let fact = [];
      let monthq = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"]
      if(state.branch == 'Все отделения'){
        if(state.doctor == 'Все врачи'){
          for(let i  in Factgenerally){
            if(i == state.selyear){
              for(let item in Factgenerally[i]){
                if(item == state.selmonth){                  
                  plan = Plangenerally[state.selyear][state.selmonth]
                  // plan = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                  fact = Factgenerally[state.selyear][state.selmonth]
                }
              }
            }
          }
        }
        else{
          for(let branch in doctorsfact){
            for(let doctor in doctorsfact[branch]){
              if(doctor == state.doctor){
                for(let year in doctorsfact[branch][doctor]){
                  if(year == state.selyear){
                    for(let month in doctorsfact[branch][doctor][year]){
                      if(month == state.selmonth){
                        fact = doctorsfact[branch][doctor][year][month];
                        plan = doctorsplan[branch][doctor][year][month];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      else{
        if(state.doctor == 'Все врачи'){
          for(let branch in GenerallyBranchesFact){
            if(branch == state.branch){
              for(let year in GenerallyBranchesFact[branch]){
                if(year == state.selyear){
                  for(let month in GenerallyBranchesFact[branch][year]){
                    if(month == state.selmonth){
                      fact = GenerallyBranchesFact[branch][year][month]
                      plan = GenerallyBranchesPlan[branch][year][month]
                    }
                  }
                }
              }
            }
          }
        }
        else{
          for(let branch in doctorsfact){
            for(let doctor in doctorsfact[branch]){
              if(doctor == state.doctor){
                for(let year in doctorsfact[branch][doctor]){
                  if(year == state.selyear){
                    for(let month in doctorsfact[branch][doctor][year]){
                      if(month == state.selmonth){
                        fact = doctorsfact[branch][doctor][year][month];
                        plan = doctorsplan[branch][doctor][year][month];
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      if(state.selmonth != 'Все месяца' && fact.length != undefined){
        for(let i = 0; i < fact.length; i++){
          date.push(i+1);
        }
      }
      else{

        for(let i in monthq){ 
          date.push(monthq[i]);
          if(fact.length == date.length){
            break;
          }
      }
    }
      var chartData = [];
      if(condination){
        for (var i = 0; (i < date.length); i++) {
          chartData.push({
            date: date[i],
            plan: plan[i].toFixed(0),
            fact: fact[i].toFixed(0)
          });
        }
      }
      else{
        for (var i = 0; (i < date.length); i++) {
          chartData.push({
            date: date[i],
            plan: new Intl.NumberFormat('ru-RU').format(plan[i].toFixed(0)),
            fact: new Intl.NumberFormat('ru-RU').format(fact[i].toFixed(0))
          });
        }
      }
      return chartData;
  }
  Formater = (num) =>{
       if((Number(num).toFixed(0)+'').length > 6){
           if((num+'').length > 9){
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000000).toFixed(2))} млрд.`
           }
           else{
                return `${new Intl.NumberFormat('ru-RU').format((num / 1000000).toFixed(2))} млн.`
           }
       }
       else if((num+'').length > 4){
            return `${new Intl.NumberFormat('ru-RU').format((num / 1000).toFixed(2))} тыс.`
       }
       else{
            return `${new Intl.NumberFormat('ru-RU').format(num)}`
       }
}
    componentDidMount = () => {
    var chartSum = am4core.create("chartdiv_Sum", am4charts.XYChart);
    // Add data
    chartSum.data = this.generateChartData(this.FactgenerallySum, this.PlangenerallySum, this.props.state, this.doctorsSumFact, this.doctorsSumPlan, this.GenerallyBranchesFactSum, this.GenerallyBranchesPlanSum, false);
    chartSum.fontFamily = 'Montserrat';
    chartSum.fontSize= '80%';

    // Create category axis
    var categoryAxis = chartSum.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "date";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 20;
    categoryAxis.renderer.cellStartLocation = 0.1;
    categoryAxis.renderer.cellEndLocation = 0.9;
    categoryAxis.renderer.opposite = false;
    // Create value axis
    var valueAxis = chartSum.yAxes.push(new am4charts.ValueAxis());
    
    
    valueAxis.renderer.minLabelPosition = 0.01;
    
    // Create series
    var series1 = chartSum.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "fact";
    series1.dataFields.categoryX = "date";
    series1.name = "Факт";
    var bullet = series1.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    series1.tooltipText = "{name} {valueY}";
    series1.legendSettings.valueText = "{valueY}";
    series1.visible  = false;
    series1.stroke = am4core.color("#666f80");
    series1.fill = am4core.color("#666f80");
    series1.tensionX = 0.88;
    series1.segments.template.strokeWidth = 3.5;

    var series2 = chartSum.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "plan";
    series2.dataFields.categoryX = "date";
    series2.name = 'План';
    var bullet = series2.bullets.push(new am4charts.CircleBullet());
    bullet.circle.radius = 4;
    series2.tooltipText = "{name} {valueY}";;
    series2.legendSettings.valueText = "{valueY}";
    series2.visible  = true;
    series2.stroke = am4core.color("#5bd81c");
    series2.fill = am4core.color("#5bd81c");
    series2.tensionX = 0.88;
    series2.segments.template.strokeWidth = 3.5;

    chartSum.legend = new am4charts.Legend();
    chartSum.legend.position = "top";
    chartSum.legend.width = am4core.percent(85);
    chartSum.legend.align = "right"
    
    chartSum.legend.itemContainers.template.events.on("over", function(event){
      var segments = event.target.dataItem.dataContext.segments;
      segments.each(function(segment){
        segment.isHover = true;
      })
    })
    chartSum.legend.itemContainers.template.events.on("out", function(event){
      var segments = event.target.dataItem.dataContext.segments;
      segments.each(function(segment){
        segment.isHover = false;
      })
    })
    // Add chart cursor
    chartSum.cursor = new am4charts.XYCursor(); // выводит информацию при наведении на точку
    chartSum.cursor.behavior = "zoomX";
    this.chartSum = chartSum;
}

componentDidUpdate(oldProps){
  if(this.state.nav == 'По пациентам'){
    if (oldProps.data !== this.generateChartData(this.FactgenerallyPat, this.PlangenerallyPat, this.props.state, this.doctorsPatFact, this.doctorsPatPlan, this.GenerallyBranchesFactPat, this.GenerallyBranchesPlanPat, true)){
      this.chartSum.data = this.generateChartData(this.FactgenerallyPat, this.PlangenerallyPat, this.props.state, this.doctorsPatFact, this.doctorsPatPlan, this.GenerallyBranchesFactPat, this.GenerallyBranchesPlanPat, true);
    }
  }
  else{
    if (oldProps.data !== this.generateChartData(this.FactgenerallySum, this.PlangenerallySum, this.props.state, this.doctorsSumFact, this.doctorsSumPlan, this.GenerallyBranchesFactSum, this.GenerallyBranchesPlanSum, false)){
      this.chartSum.data = this.generateChartData(this.FactgenerallySum, this.PlangenerallySum, this.props.state, this.doctorsSumFact, this.doctorsSumPlan, this.GenerallyBranchesFactSum, this.GenerallyBranchesPlanSum, false);
    }
  }
  
}

NavbarSelect = (event) => {
  // if(!event.target.classList.contains('DashGraf_selected')){
  //   let selectedOn = document.querySelectorAll('.Dash__oneGraf-navbar div')
  //   for(let i in selectedOn){
  //       if(selectedOn[i].classList.contains('DashGraf_selected')){
  //           selectedOn[i].classList.remove('DashGraf_selected')
  //           break;
  //       }
  //   }
  if(!event.target.classList.contains('DashGraf_selected')){
    let selectedOn = document.querySelectorAll('.Dash__oneGraf-navbar div')
    for(let i in selectedOn){
        if(selectedOn[i].classList.contains('DashGraf_selected')){
            selectedOn[i].classList.remove('DashGraf_selected')
            break;
        }
    }
    event.target.classList.add('DashGraf_selected');
    if(event.target.innerText == 'По пациентам'){
      this.chartSum.data = this.generateChartData(this.FactgenerallyPat, this.PlangenerallyPat, this.props.state, this.doctorsPatFact, this.doctorsPatPlan, this.GenerallyBranchesFactPat, this.GenerallyBranchesPlanPat, true)
    }
    else{
      this.chartSum.data = this.generateChartData(this.FactgenerallySum, this.PlangenerallySum, this.props.state, this.doctorsSumFact, this.doctorsSumPlan, this.GenerallyBranchesFactSum, this.GenerallyBranchesPlanSum, true);
    }
    this.setState({nav: event.target.innerText})
  }
  
}

    render(){
        return(
            <div className = 'Dash__oneGraf'>
                <div className = 'Dash__oneGraf-navbar'>
                    <div className = 'Dash__navbar-item DashGraf_selected' onClick = {this.NavbarSelect}>
                      По сумме
                    </div>
                    <div className = 'Dash__navbar-item' onClick = {this.NavbarSelect}>
                      По пациентам
                    </div>
                </div>
                <div className = 'chartdiv_Sum'></div>
            </div>
            
        )
    }
}