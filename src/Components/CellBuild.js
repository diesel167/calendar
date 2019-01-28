import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

//holidays list

let holidays = [
    {id:0,
    name:"New year",
    date:'01.01'},
    {id:1,
    name:"Christmas",
    date:'01.07'},
    {id:2,
     name:"Men's day",
     date:'02.23'},
    {id:3,
     name:"Women's day",
     date:'03.08'},
    {id:4,
     name:"Labor day",
     date:'05.01'},
    {id:5,
     name:"Victory Day",
     date:'05.09'},
    {id:6,
     name:"Independence day",
     date:'07.03'},
    {id:7,
     name:"November revolution day",
     date:'11.07'}];





class CellBuild extends React.Component {


    constructor() {
        super();
        this.state = {
            holidaysState: holidays,
            storageCell:localStorage.getItem("myEl"),

        };
        this.setEv= this.setEv.bind(this);

    }

    static getDerivedStateFromProps(props, state) {
        if((state.storageCell) !== localStorage.getItem("myEl")) {
            return {
                storageCell:localStorage.getItem("myEl")
            };
        }

        // Return null to indicate no change to state.
        return null;
    }

    setEv=(x)=>{
        this.setState({storageCell:localStorage.getItem("myEl")});
        this.setState({ifNotOne:x});
    };

//что бы работало заменить в 78 и 97 this.state.ifNotOne на ifNotOne
    render(){

        let ifNotOne='';
        //do default cell value if not holiday



        //parse storage
        let parsed=JSON.parse(this.state.storageCell);

        //search for event for day
        if(parsed){
            parsed.map((event)=>{
                console.log(this.props.date);
                //check if the event really today
                if(event.month===this.props.month+1 && event.day===this.props.date ){   //add  this YEAR CHECKER
                   ifNotOne=<div>event</div>;
                   // this.setEv(<div>event</div>);
                }
            },this);
        }

        let cell=<td tabIndex="0" onClick={() => {
            this.props.clickCell(this.props.date,this.props.month);
            $(function () {
                $('table.main').css('opacity','.5');
                $('table.dayEvents').css('display','table');
            })
        }
        }><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p><div>{ifNotOne}</div></div></td>;

        //check for holiday day
        this.state.holidaysState.map(function(holiday){

            //create temporary date object from date parameter of holiday
            let tempDate = new Date(holiday.date);



            //if current day is holiday change a cell value for this day in calendar OR it has events
            if(tempDate.getMonth()===this.props.month&&tempDate.getDate()===this.props.date ){

                cell=<td tabIndex="0" onClick={() => {
                    this.props.clickCell(this.props.date,this.props.month);
                    $(function () {
                        $('table.main').css('opacity','.5');
                        $('table.dayEvents').css('display','table');
                    });
                }
                } className="holiday"><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div>
                    <p className="holiday">{holiday.name}</p>{this.state.ifNotOne}</td>;
            }
        },this);  //give CellBuilder as the context of map-function

        return cell;
    }
}

let ifNotOne2='';

export default CellBuild;


