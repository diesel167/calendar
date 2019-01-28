import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import CellBuild from './CellBuild.js';
import DayEventBuilder from './DayEventBuilder.js';




let currentDate= new Date();
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];




//Builder calendar body
class Builder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataState: props.helpDate,   //set date to build and display
        };
    }



    //help function to control date parameters in cell which is clicked
    clickCell=(x,y)=>{
        this.setState({day:x});
        this.setState({month:y});
    };

    clearLocalStorage=()=>{
        //очищаем все хранилище
        localStorage.clear();
    };

    createTable =(data)=>{

        let helpDate = new Date(data.getFullYear(), data.getMonth(), data.getDate());    //help date for drawing
        let helpOther = new Date(data.getFullYear(), data.getMonth(), data.getDate());   //help date for build previous month days
        helpDate.setDate(1);
        helpOther.setDate(1);
        let table=[];    //create table container
        let rows=[];    //create rows container




        //outer loop for rows creating (filling rows container)
        for(let i=0;i<6;i++){
            let cells=[];   //create empty cells container

            //inner loop for cells creating in row (filling cells container)
            for (let j=0;j<7;j++){

                //loop for draw previous month days and padding current 1st days relative days of week
                if(i===0&&j<helpDate.getDay()-1){
                    helpOther.setDate(-helpDate.getDay()+2+j);

                    cells.push(<CellBuild date={helpOther.getDate()} month={helpOther.getMonth()} isNowDate="numbers otherMonth"/>);
                }
                //continue drawing calendar
                else{
                    //if current month
                    if(helpDate.getMonth()===data.getMonth()){

                        //checking for today
                        if(helpDate.getDate()===currentDate.getDate()&&helpDate.getMonth()===currentDate.getMonth()&&helpDate.getFullYear()===currentDate.getFullYear()){

                            cells.push(<CellBuild clickCell={this.clickCell} date={helpDate.getDate()} month={helpDate.getMonth()} isNowDate="numbers nowDate"/>); //join cell to cells container
                        }
                        else{

                            cells.push(<CellBuild clickCell={this.clickCell} date={helpDate.getDate()} month={helpDate.getMonth()} isNowDate="numbers" />); //join cell to cells container

                        }
                    }
                    //next month days
                    else{
                        cells.push(<CellBuild date={helpDate.getDate()} month={helpDate.getMonth()} isNowDate="numbers otherMonth" />); //join cell to cells container
                    }
                    helpDate.setDate(helpDate.getDate()+1);
                }

            }
            rows.push(<tr>{cells}</tr>);    //join filled cells  container to rows container (join a row)
        }

        table.push(<table className="main col-lg-12 col-md-12 col-sm-12 col-xs-12"><thead><tr><th colSpan={2}><button className="decrease" onClick=
            {() =>
            {
                data.setMonth(data.getMonth()-1);
                this.setState({dataState:data});
            }}>&larr;</button><div className="head">{months[data.getMonth()]}</div><div className="head">{data.getFullYear()}</div><button className="increase" onClick=
            {() =>
            {
                data.setMonth(data.getMonth()+1);
                this.setState({dataState:data});
            }}>&rarr;</button></th></tr></thead><tbody>{rows}</tbody></table>);  //join filled rows  container to table and make header

        return table;
    };



    render() {

        return (
            <div className="container">
                <div className="calendar">{this.createTable(this.state.dataState)}</div>
                <br/>
                <button className="deleteAllEv" onClick={this.clearLocalStorage}>DELETE ALL EVENTS</button>
                <DayEventBuilder day={this.state.day}
                                 monthNum={this.state.dataState.getMonth()+1}
                                 year={this.state.dataState.getFullYear()}
                                 month={months[this.state.month]}/>
            </div>
        )
    }
}


export default Builder;


