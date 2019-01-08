import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


let events = [
    {id:0,
        date:"2019.01.20",
        name:"Event 1 for this day",
        time1:"15:00",
        time2:"16:00"
    },
   /* {id:1,
        date:"2019.02.05",
        name:"Event 2 for this day",
        time1:"11:00",
        time2:"12:00"
    }*/
 ];



class dayEventBuilder extends React.Component {
    render(){
        let table=[];    //create table container
        let rows=[];    //create rows container
        //outer loop for rows creating (filling rows container)
        let cells=[];   //create empty cells container
        for (let i=0;i<25;i++){
            cells.push(<td>{i+':00'}</td>);
            events.map(function(event){
                if((i+':00')===event.time1){
                    cells.push(<td>{event.name}</td>);
                };
            });
            rows.push(<tr>{cells}</tr>);
        }
        table.push(<table className="dayEvents"><thead>Events</thead><tbody>{rows}</tbody></table>);
        return table;
    }
}

export default dayEventBuilder;