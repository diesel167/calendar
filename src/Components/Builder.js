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
            dataState: this.props.helpDate,   //set date to build and display
            storageForCellBuild:localStorage.getItem("myEl")
        };
        this.transit=this.transit.bind(this);
        this.eventDelete=this.eventDelete.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        if((state.storageForCellBuild) !== localStorage.getItem("myEl")) {
            return {
                storageForCellBuild:localStorage.getItem("myEl")
            };
        }
        if((state.dataState)!==props.helpDate){
            return{
                dataState: props.helpDate
            }
        }
        // Return null to indicate no change to state.
        return null;
    }

    //callback transit function for DayEventBuilder changeDEB which is used in EventForm Submit click listener
    transit=(x)=>{
        this.setState({ storageForCellBuild:localStorage.getItem("myEl")});
        this.setState({taskForCellBuild:x});
    };

    //function for DELETE button in the cell for CellBuild
    eventDelete=(kk)=>{
        let temp=JSON.parse(localStorage.getItem("myEl"));
        temp.splice(kk,1);
        localStorage.setItem("myEl", JSON.stringify(temp)); //write it in localstorage under key "myKey"
        this.setState({storageForCellBuild:localStorage.getItem("myEl")});
    };

    //help function to control date parameters in cell which is clicked
    clickCell=(x,y)=>{
        this.setState({day:x});
        this.setState({month:y});
    };

    //delete all user events
    clearLocalStorage=()=>{
        //очищаем все хранилище
        localStorage.clear();
        this.setState({ storageForCellBuild:localStorage.getItem("myEl")});
    };

    createTable =(data)=>{

        //create temp data objects
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
                    cells.push(<CellBuild stateXXX={this.state.storageForCellBuild}
                                          taskForCellBuild={this.state.taskForCellBuild}
                                          date={helpOther.getDate()}
                                          clickCell={this.clickCell}
                                          month={helpOther.getMonth()}
                                          year={helpOther.getFullYear()}
                                          isNowDate="numbers otherMonth"
                                          todayDate={currentDate.getDate()}
                                          todayMonth={currentDate.getMonth()}
                                          todayYear={currentDate.getFullYear()}/>);
                    helpOther.setDate(1);       //to reset helpOther for next loop
                    helpOther.setMonth(helpOther.getMonth()+1);     //to reset helpOther for next loop
                }
                //continue drawing calendar
                else{
                    //if current month
                    if(helpDate.getMonth()===data.getMonth()){

                        //checking for today
                        if(helpDate.getDate()===currentDate.getDate()&&helpDate.getMonth()===currentDate.getMonth()&&helpDate.getFullYear()===currentDate.getFullYear()){

                            cells.push(<CellBuild clickCell={this.clickCell}
                                                  date={helpDate.getDate()}
                                                  month={helpDate.getMonth()}
                                                  year={helpOther.getFullYear()}
                                                  stateXXX={this.state.storageForCellBuild}
                                                  taskForCellBuild={this.state.taskForCellBuild}
                                                  isNowDate="numbers nowDate"
                                                  todayDate={currentDate.getDate()}
                                                  todayMonth={currentDate.getMonth()}
                                                  todayYear={currentDate.getFullYear()}/>);


                        }
                        //if not today
                        else{
                            cells.push(<CellBuild clickCell={this.clickCell}
                                                  date={helpDate.getDate()}
                                                  month={helpDate.getMonth()}
                                                  year={helpOther.getFullYear()}
                                                  stateXXX={this.state.storageForCellBuild}
                                                  taskForCellBuild={this.state.taskForCellBuild}
                                                  isNowDate="numbers"
                                                  todayDate={currentDate.getDate()}
                                                  todayMonth={currentDate.getMonth()}
                                                  todayYear={currentDate.getFullYear()}/>); //join cell to cells container
                        }
                    }
                    //next month days
                    else{
                        cells.push(<CellBuild stateXXX={this.state.storageForCellBuild}
                                              taskForCellBuild={this.state.taskForCellBuild}
                                              clickCell={this.clickCell}
                                              date={helpDate.getDate()}
                                              month={helpDate.getMonth()}
                                              year={helpOther.getFullYear()}
                                              isNowDate="numbers otherMonth"
                                              todayDate={currentDate.getDate()}
                                              todayMonth={currentDate.getMonth()}
                                              todayYear={currentDate.getFullYear()}/>); //join cell to cells container
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
            <div className="scontainer">
                <div className="calendar">{this.createTable(this.state.dataState)}</div>
                <br/>
                <button className="deleteAllEv" onClick={this.clearLocalStorage}>DELETE ALL EVENTS</button>

                <DayEventBuilder day={this.state.day}
                                 month={this.state.month+1}
                                 transit={this.transit}
                                 eventDelete={this.eventDelete}
                                 monthName={months[this.state.month]}
                                 year={this.state.dataState.getFullYear()}/>
            </div>
        )
    }
}

export default Builder;


