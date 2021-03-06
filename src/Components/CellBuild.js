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
         };
    }

    ifNotFirstToday=(x,c)=>{
        if(x!==0){
            return <div className={c}>{x} more events</div>
        }
    };

    onClick=()=>{
        this.props.clickCell(this.props.date,this.props.month);
        $(function () {
            $('table.main').css('opacity','.5');
            $('.spacer').css('display','block');
            $('table.dayEvents').css('display','table');
        })
    };

    render(){
        //counter of events for holiday day
        let indicatorForEventHolidays=0;

        //before today one color of event's block, after - another
        let nameOfClass="additional_events";
        let nameOfClassMore="additional_events more";


        //calculate if the day is previous, then change it's classnames
        if((this.props.date<this.props.todayDate && this.props.month===this.props.todayMonth && this.props.year===this.props.todayYear)||
            (this.props.month<this.props.todayMonth && this.props.year<=this.props.todayYear) ){
            nameOfClass="additional_events before";
            nameOfClassMore="additional_events before";
        }

        //do default cell value if not holiday
        let cell=<td tabIndex="0" onClick={this.onClick}><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div></td>;

        //parse storage taken from Builder-state which keeps actual localstorage value
        let parsed=JSON.parse(this.props.stateXXX);

        //search for event for day
        if(parsed){
            let time1=24;  //let initial time1 value to check which event will be first in the day
            let index=0;  //index to control checking event
            let n=0; //counter of events today

            parsed.map((event,number)=>{
                //if the event really today
                if(event.month===this.props.month+1 && event.day===this.props.date && event.year===this.props.year){   //add  this YEAR CHECKER
                    //if we meet earlier event
                    if(parseInt(event.time1.substring(0, event.time1.length-3),10)<parseInt(time1,10)){
                        //set cell with event information
                        cell=<td tabIndex="0" onClick={this.onClick}><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p>
                            <div className={nameOfClass}>{event.task}</div>{this.ifNotFirstToday(n,nameOfClassMore)}</div></td>;
                        time1=event.time1.substring(0, event.time1.length-3);   //set earliest time
                        index=number;   //set index of earliest event in that day
                        n++;  //set counter more than 1 event in that day
                        indicatorForEventHolidays++;  //increment counter of events for holiday day
                    }
                    //if we meet not earlier event
                    else{
                        //set cell with event information
                        cell=<td tabIndex="0" onClick={this.onClick}><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p>
                            <div className={nameOfClass}>{parsed[index].task}</div>{this.ifNotFirstToday(n,nameOfClassMore)}</div></td>;
                        n++;
                        indicatorForEventHolidays++;   //increment counter of events for holiday day
                    }
                }
            },this);
            index=0;
            n=0;
        }

        //check for holiday day
        this.state.holidaysState.map(function(holiday){
            //create temporary date object from date parameter of holiday
            let tempDate = new Date(holiday.date);
            //if current day is holiday change a cell value for this day in calendar OR it has events
            if(tempDate.getMonth()===this.props.month && tempDate.getDate()===this.props.date){

                cell=<td tabIndex="0" onClick={()=>{
                    this.props.clickCell(this.props.date,this.props.month);
                    $(function () {
                        $('.spacer').css('display','block');
                        $('table.main').css('opacity','.5');
                        $('table.dayEvents').css('display','table');
                    })}} className="holiday"><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div>
                    <p className="holiday">{holiday.name}</p>{this.ifNotFirstToday(indicatorForEventHolidays,nameOfClassMore)}</td>;
            }
        },this);  //give CellBuilder as the context of map-function

        return cell;
    }
}

export default CellBuild;


