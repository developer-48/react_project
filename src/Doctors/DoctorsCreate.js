import React from 'react';
import Picker from '../AdditionalModules/Picker';
import {ServerPost} from '../AdditionalModules/Data.js';
let data = {
    "Аллергология": {
        "Иванов Сергей Петрович": {
            "2019": {
                "Все месяца": [25500, 11900, 7800, 12000, 10000, 15600, 13300, 14000, 9200, 11000, 7800, 10000]
            },
            "2020": {
                "Все месяца": [25500, 11900, 7800, 12000, 10000, 15600, 13300, 14000, 9200, 11000, 7800, 10000]
            },
            "2021": {
                "Все месяца": [25500, 11900, 7800, 12000, 10000, 15600, 13300, 14000, 9200, 11000, 7800, 10000]
            }
        }
    },
    "Анестезиология": {
        "Семенов Артур Кагерманович": {
            "2019": {
                "Все месяца": [6000, 9600, 5400, 5000, 7900, 10000, 9000, 15000, 11900, 10500, 8300, 9000]
            },
            "2020": {
                "Все месяца": [6000, 9600, 5400, 5000, 7900, 10000, 9000, 15000, 11900, 10500, 8300, 9000]
            },
            "2021": {
                "Все месяца": [6000, 9600, 5400, 5000, 7900, 10000, 9000, 15000, 11900, 10500, 8300, 9000]
            }
        }
    },
    "Гастроэнтерология": {
        "Петров Ярослав Александрович": {
            "2019": {
                "Все месяца": [28000, 23600, 19000, 21500, 27200, 20000, 17300, 23000, 26700, 21000, 25500, 19200]
            },
            "2020": {
                "Все месяца": [28000, 23600, 19000, 21500, 27200, 20000, 17300, 23000, 26700, 21000, 25500, 19200]
            },
            "2021": {
                "Все месяца": [28000, 23600, 19000, 21500, 27200, 20000, 17300, 23000, 26700, 21000, 25500, 19200]
            }
        },
        "Русланбеков Сулеман Абубакарович": {
            "2019": {
                "Все месяца": [16000, 13500, 13900, 11200, 19400, 13000, 9000, 8500, 10900, 7500, 16000, 15000]
            },
            "2020": {
                "Все месяца": [16000, 13500, 13900, 11200, 19400, 13000, 9000, 8500, 10900, 7500, 16000, 15000]
            },
            "2021": {
                "Все месяца": [16000, 13500, 13900, 11200, 19400, 13000, 9000, 8500, 10900, 7500, 16000, 15000]
            }
        },
        "Сергеев Дмитрий Петрович": {
            "2019": {
                "Все месяца": [5600, 7000, 7900, 10000, 13800, 9000, 9000, 13000, 11300, 9200, 10500, 16000]
            },
            "2020": {
                "Все месяца": [5600, 7000, 7900, 10000, 13800, 9000, 9000, 13000, 11300, 9200, 10500, 16000]
            },
            "2021": {
                "Все месяца": [5600, 7000, 7900, 10000, 13800, 9000, 9000, 13000, 11300, 9200, 10500, 16000]
            }
        },
        "Николаев Захар Мирославович": {
            "2019": {
                "Все месяца": [32000, 27900, 29100, 25000, 30600, 24200, 26700, 21000, 20000, 24800, 23000, 20000]
            },
            "2020": {
                "Все месяца": [32000, 27900, 29100, 25000, 30600, 24200, 26700, 21000, 20000, 24800, 23000, 20000]
            },
            "2021": {
                "Все месяца": [32000, 27900, 29100, 25000, 30600, 24200, 26700, 21000, 20000, 24800, 23000, 20000]
            }
        },
        "Жавлатханов Эми Абдурахманович": {
            "2019": {
                "Все месяца": [13000, 8000, 8900, 10500, 12600, 16000, 21000, 15000, 13000, 15000, 9800, 11000]
            },
            "2020": {
                "Все месяца": [13000, 8000, 8900, 10500, 12600, 16000, 21000, 15000, 13000, 15000, 9800, 11000]
            },
            "2021": {
                "Все месяца": [13000, 8000, 8900, 10500, 12600, 16000, 21000, 15000, 13000, 15000, 9800, 11000]
            }
        }
    }
};
let docIDData = {
    "Аллергология": {
        "Иванов Сергей Петрович": {
            "id": 10000333
        }
    },
    "Анестезиология": {
        "Семенов Артур Кагерманович": {
            "id": 10000061
        }
    },
    "Гастроэнтерология": {
        "Петров Ярослав Александрович": {
            "id": 10000205
        },
        "Русланбеков Сулеман Абубакарович": {
            "id": 10000091
        },
        "Сергеев Дмитрий Петрович": {
            "id": 10000360
        },
        "Николаев Захар Мирославович": {
            "id": 10000163
        },
        "Жавлатханов Эми Абдурахманович": {
            "id": 10000258
        }
    }
}
export default class DoctorsCreate extends React.Component{
    constructor(props){
        super(props)
        this.docIDData = docIDData;
        this.data = data;
        this.state = ({doctors: this.data, branch: Object.keys(this.data)[0], List: [], index: 0});
    }
    PostSelect = (event)=>{
        event.preventDefault();
        if(this.state.List.length == 0){
            this.setState({error: 'Необходимо добавить план!'})
        }
        else{
            this.setState({error: ''})
            let send = JSON.stringify(this.state.List);
            this.setState({List: [], index: 0});
            ServerPost("https://jsonplaceholder.typicode.com/posts", send);
        }
        
    }
    AddDoctorsPlan = (event) =>{
        event.preventDefault();
        if(event.target[0].value == "Врач" || event.target[1].value =='' || event.target[2].value == ''){
            this.setState({error: 'Необходимо заполнить все поля!'})
        }
        else{
            this.setState({error: ''})
        }
        if(document.getElementById('startDate')==null && document.getElementById('endDate')==null){
            this.setState({errorDate: 'Вы не выбрали дату!'})
        }
        else{
            this.setState({errorDate: ''})
        }
        if(document.getElementById('startDate')!==null && document.getElementById('endDate')!==null && event.target[0].value !== "Врач" && event.target[1].value !=='' && event.target[2].value !== ''){
            let ob = {
                id: this.state.index,
                docid: this.docIDData[this.state.branch][event.target[0].value].id,
                startDate: `${document.getElementById('startDate').innerText} 0:00:00` , 
                endDate: `${document.getElementById('endDate').innerText} 0:00:00`, 
                branch: this.state.branch, 
                name: event.target[0].value,
                patients: event.target[1].value,
                sum: event.target[2].value,
                sevices: 0,
                averageCheck: 0
            }
            // event.target[0].value = 'Врач';
            // event.target[1].value = '';
            // event.target[2].value = '';
            let addObj = [];
            addObj = this.state.List;
            addObj.push(ob);
            this.setState({List: addObj, index: this.state.index+1, error: '', errorDate: ''});
        }
    }
    BranchesClick = (event) =>{
        if(!event.target.classList.contains('selected')){
            let selectedOn = document.querySelectorAll('.branches__list div')
            for(let i in selectedOn){
                if(selectedOn[i].classList.contains('selected')){
                    selectedOn[i].classList.remove('selected')
                    break;
                }
            }
            event.target.classList.add('selected');
            this.setState({branch: event.target.innerText}) 
            
        }
    }
    DeleteDocs = (id) => {
        let obj = this.state.List;
        for(let item in obj){
            if(id == obj[item].id){
                obj.splice(item, 1)
                break;
            }
        }
        for(let i in obj){
            obj[i].id = i;
        }
        this.setState({List: obj});
    }
    render(){
        return(
            <div className = 'createList'>
                <div className = 'sidebar'>
                    <div className ='branches'>
                        <div className = 'branches__title'>Отделения</div>
                        <div className = 'branches__list'>
                            {
                                Object.keys(this.state.doctors).map((item, index) => {
                                    return(
                                        <BranchesList branch = {item} index = {index} func = {this.BranchesClick} key = {index}/>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <Picker />
                    <div id='ErrorDate'>{this.state.errorDate}</div>
                </div>
                <div className = "content">
                    <div className = 'title'>НОРМАТИВЫ</div>
                    <form onSubmit = {this.AddDoctorsPlan}>
                        <div className="doctorsInline">
                            <select className = "selectedDoctors">
                                <option>
                                    Врач
                                </option>
                                {
                                    Object.keys(this.state.doctors[this.state.branch]).map((item, index) =>{
                                        return(
                                            <DoctorsList doc = {item} key = {index}/>                            
                                        )                
                                    })
                                }
                            </select>
                            <div>Количество пациентов: <input type = 'number' id = "patients"/></div>
                            <div>Сумма: <input type = 'number' id = "services"/></div>
                            <button className = 'CreateDocBtn'>Добавить</button>
                        </div>
                        
                                                
                    </form>
                    <div className = "content__adders">
                            <div className = "content__subtitle">НОВЫЕ НОРМАТИВЫ:</div>
                            <div className = 'content__informBlock'>
                                <div className = 'infoblock_id'>ID</div> 
                                <div className = 'infoblock_one'>Врач</div> 
                                <div className = 'infoblock_two'>Количество пациентов</div> 
                                <div className = 'infoblock_three'>Сумма</div>
                            </div>
                        <div className = 'adders__List'>                            
                            {
                                this.state.List.map((item, index) =>{
                                    return(
                                        <CreateList docs = {item} index = {index} func = {this.DeleteDocs} key = {index}/>                            
                                    )  
                                })
                            }
                        </div>
                    </div>
                    <span id = "Error">{this.state.error}</span>
                    <button className = 'Post__servBtn' onClick ={this.PostSelect}>Отправить</button>
                </div>
                
                
            </div>
        )
    }
}

class CreateList extends React.Component{
    
    render(){
        return(
            <div className = 'Doctors__AddersList'>
                <div className = "Doctors__AddersList__item">
                    <div className = 'infoblock_id'>{this.props.index+1}</div>
                    <div className = 'infoblock_one'>{this.props.docs.name}</div>
                    <div className = 'infoblock_two'>{this.props.docs.patients}</div>
                    <div className = 'infoblock_three'>{this.props.docs.sum}</div>
                </div>
                <span className = 'Doctors__deleteBtn' onClick = {() => this.props.func(this.props.index)}><i className="fas fa-times"></i></span>
            </div>
        )
    }
}

class DoctorsList extends React.Component{
    
    render(){
        return(
            <option>{this.props.doc}</option>
        )
    }
}
class BranchesList extends React.Component{
    
    render(){
        if(this.props.index == 0){
            return(
                <div className = "branch selected" onClick = {this.props.func}>
                   {this.props.branch}
                </div>
            )
        }
        return(
            <div className = "branch" onClick = {this.props.func}>
                {this.props.branch}
            </div>
        )
    }
}
