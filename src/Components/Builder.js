import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';


let d = new Date();
let months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
let month = d.getMonth();
d.setDate(1);

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
                cells.push(<td tabIndex="0"><div tabIndex="0" className="numbers"><p>{d.getDate()}</p></div></td>);    //join cell to cells container
                d.setDate(d.getDate()+1);
            }
            rows.push(<tr>{cells}</tr>);    //join filled cells  container to rows container (join a row)
        }
        table.push(<thead><span className="head">{months[month]}</span><span className="head">{d.getFullYear()}</span></thead>);   //make header of the table
        table.push(<table className="col-lg-12 col-md-12 col-xs-12"><tbody>{rows}</tbody></table>);  //join filled rows container to table

        return table;
    }

    render() {
        return (
            <div className="container">{this.createTable()}</div>
        )
    }
}


export default Builder;