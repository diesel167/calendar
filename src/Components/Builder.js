import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import CellBuild from './CellBuild.js';




let currentDate= new Date();
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
//let month = currentDate.getMonth(); //current month
//let year = currentDate.getFullYear();   //current year



//Builder calendar body
class Builder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataState: this.props.helpDate,
        };
    }

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
                    helpOther.setDate(-helpDate.getDay()+2+j);    //
                    cells.push(<CellBuild date={helpOther.getDate()} isNowDate="numbers otherMonth"/>);
                }
                //continue drawing calendar
                else{
                    //current month
                    if(helpDate.getMonth()===data.getMonth()){

                        //checking for today
                        if(helpDate.getDate()===currentDate.getDate()&&helpDate.getMonth()===currentDate.getMonth()&&helpDate.getFullYear()===currentDate.getFullYear()){
                            cells.push(<CellBuild date={helpDate.getDate()} isNowDate="numbers nowDate"/>); //join cell to cells container
                        }
                        else{
                            cells.push(<CellBuild date={helpDate.getDate()} isNowDate="numbers"/>); //join cell to cells container
                        }
                    }
                    //next month days
                    else{
                        cells.push(<CellBuild date={helpDate.getDate()} isNowDate="numbers otherMonth"/>); //join cell to cells container
                    }
                    helpDate.setDate(helpDate.getDate()+1);
                }

            }
            rows.push(<tr>{cells}</tr>);    //join filled cells  container to rows container (join a row)
        }

        table.push(<thead><button className="decrease" onClick=
            {() =>
            {
                data.setMonth(data.getMonth()-1);
                this.setState({dataState:data});
            }}>&larr;</button><div className="head">{months[data.getMonth()]}</div><div className="head">{data.getFullYear()}</div><button className="increase" onClick=
            {() =>
            {
                data.setMonth(data.getMonth()+1);
                this.setState({dataState:data});
            }}>&rarr;</button></thead>);   //make header of the table
        table.push(<table className="col-lg-12 col-md-12 col-xs-12"><tbody>{rows}</tbody></table>);  //join filled rows container to table

        return table;
    };

    render() {
        return (
            <div className="container">{this.createTable(this.state.dataState)}</div>
        )
    }
}


export default Builder;