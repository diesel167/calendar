import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';


let events = [
    {id:0,
        date:"2019.01.20",
        name:"Event 1 for this day",
        time1:"15:00",
        time2:"19:00"
    },
   /* {id:1,
        date:"2019.02.05",
        name:"Event 2 for this day",
        time1:"11:00",
        time2:"12:00"
    }*/
 ];



class DayEventBuilder extends React.Component {
    render(){
        let table=[];    //create table container
        let rows=[];    //create rows container
        let skip=0;   //skip <td> adding if needed

        //create table
        for (let i=0;i<25;i++){
            let cells=[];   //create empty cells container
            cells.push(<td>{i+':00'}</td>);



                if((i+':00')===events[0].time1){
                    let rowspan = events[0].time2.substring(0, 2)-events[0].time1.substring(0, 2);   //calculate how long will the event be
                    cells.push(<td rowSpan={rowspan} className="setEvent">{events[0].name}</td>);
                    skip=rowspan;   //set skip counter
                }

                if(skip<=0){   //if we finished skip <td> adding while event was
                    cells.push(<td></td>);
                }
                --skip;

            rows.push(<tr>{cells}</tr>);
        }

        //create table and create exit button from events list
        table.push(<table className="dayEvents col-lg-6 col-md-8 col-sm-10 col-xs-10"><thead><tr><th></th><th><button onClick={() => {
            $(function () {
                $('table.main').css('opacity','1');
                $('table.dayEvents').css('display','none');
            })
        }
        }>&#215;</button></th></tr></thead><tbody>{rows}</tbody></table>);

        return table;
    }
}

export default DayEventBuilder;