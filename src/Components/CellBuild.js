import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



let holidays = [
    {id:0,
    name:'New year',
    date:'01.01'},
    {id:1,
    name:'Christmas',
    date:'01.07'},
    {id:2,
     name:'Mens day',
     date:'02.23'},
    {id:3,
     name:'Womans day',
     date:'03.08'},
    {id:4,
     name:'Labor day',
     date:'05.01'},
    {id:5,
     name:'Victory Day',
     date:'05.09'},
    {id:6,
     name:'Independence day',
     date:'07.03'},
    {id:7,
     name:'Novembers revolution day',
     date:'11.07'}];

let text=holidays[1].date;
var ms =new Date(text);



console.log(ms.getFullYear());

class CellBuild extends React.Component {

    render(){
        return (
            <td tabIndex="0" ><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div></td>
        )
    }
}

export default CellBuild;