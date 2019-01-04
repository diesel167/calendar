import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


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

    render(){

        //do default cell value if not holiday
        let cell=<td tabIndex="0" ><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div></td>;

        //check for holiday day
        this.state.holidaysState.map(function(holiday){
            //create temporary date object from date parameter of holiday
            let tempDate = new Date(holiday.date);

            //if current day is holiday change a cell value for this day in calendar
            if(tempDate.getMonth()===this.props.month&&tempDate.getDate()===this.props.date ){
                cell=<td tabIndex="0" className="holiday"><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div><p className="holiday">{holiday.name}</p></td>;
            }

        },this);  //give CellBuilder as the context of map-function

        return (cell)
    }
}


export default CellBuild;