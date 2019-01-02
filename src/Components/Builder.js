import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';
import CellBuild from './CellBuild.js';


let currentDate = new Date();
let helpDate =new Date();
let helpOther=new Date();   //help date for build previous month days
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let month = currentDate.getMonth(); //current month
let year = currentDate.getFullYear();   //current year
helpDate.setDate(1);
helpOther.setDate(1);

//Builder calendar body
class Builder extends React.Component {



    createTable =()=>{
        let table=[];    //create table container
        let rows=[];    //create rows container

        //outer loop for rows creating (filling rows container)
        for(let i=0;i<6;i++){
            let cells=[];   //create empty cells container

            //inner loop for cells creating in row (filling cells container)
            for (let j=0;j<6;j++){

                //loop for draw previous month days and padding current 1st days relative days of week
                if(i==0&&j<helpDate.getDay()-1){
                    helpOther.setDate(-helpDate.getDay()+2+j);    //
                    cells.push(<CellBuild date={helpOther.getDate()} isNowDate="numbers otherMonth"/>);
                }
                //continue drawing calendar
                else{
                    //current month
                    if(helpDate.getMonth()==currentDate.getMonth()){
                        //looking for today
                        if(helpDate.getDate()==currentDate.getDate()){
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
        table.push(<thead><span className="head">{months[currentDate.getMonth()]}</span><span className="head">{currentDate.getFullYear()}</span></thead>);   //make header of the table
        table.push(<table className="col-lg-12 col-md-12 col-xs-12"><tbody>{rows}</tbody></table>);  //join filled rows container to table

        return table;
    };

    render() {
        return (
            <div className="container">{this.createTable()}</div>
        )
    }
}


export default Builder;