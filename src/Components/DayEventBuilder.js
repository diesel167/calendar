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
 ];



class DayEventBuilder extends React.Component {



    constructor(props) {
        super(props);
        this.state = {
            day:this.props.day,             //take actual day and month of the clicked cell from CellBuild
            month:this.props.month,
        };
    }
    render(){

        let table=[];    //create table container
        let rows=[];    //create rows container
        let skip=0;   //skip <td> adding if needed

        //build table
        for (let i=0;i<25;i++){
            let cells=[];   //create empty cells container
            cells.push(<td>{i+':00'}</td>);



                if((i+':00')===events[0].time1){
                    let rowspan = events[0].time2.substring(0, 2)-events[0].time1.substring(0, 2);   //calculate how long will the event be
                    cells.push(<td rowSpan={rowspan} className="setEvent">{events[0].name}</td>);
                    skip=rowspan;   //set skip counter
                }

                if(skip<=0){   //if we finished skip <td> adding while event was
                    cells.push(<td onClick={() => {
                        $(function () {
                            $('table.main').css('opacity','.3');
                            $('table.dayEvents').css('opacity','.5');
                            $('.form').css('display', 'block');
                        })
                    }}/>);
                }
                --skip;

            rows.push(<tr>{cells}</tr>);
        }

        //create table and create exit button from events list
        //console.log('DayEventBuilder state.day ='+this.state.day);
        table.push(<table className="dayEvents col-lg-6 col-md-8 col-sm-10 col-xs-10"><thead><tr><th></th><th><div className='eventDate'><div>{this.props.month}</div><div>{this.props.day}</div></div><button onClick={() => {
            $(function () {
                $('table.main').css('opacity','1');
                $('table.dayEvents').css('display','none');
            })
        }
        }>&#215;</button></th></tr></thead><tbody>{rows}</tbody></table>);


        return (<div>
                    <div>{table}</div>
                    <div className="form col-lg-6 col-md-6 col-sm-8 col-xs-8">
                        <button onClick={() => {
                            $(function () {
                                $('table').css('display', 'table');
                                $('.form').css('display', 'none');
                                $('table.dayEvents').css('opacity','1');
                                $('table.main').css('opacity','.5');
                            })
                        }}>&larr;</button>
                        <form>
                            <fieldset>
                                <select className="form-control">
                                    <option value="one">One</option>
                                    <option value="two">Two</option>
                                    <option value="three">Three</option>
                                    <option value="four">Four</option>
                                    <option value="five">Five</option>
                                </select>
                                <legend>Add the event</legend>
                                <p>Description <input name="login"/></p>
                                <p><input type="submit" value="Add"/></p>
                            </fieldset>
                        </form>
                    </div>
            </div>);
    }
}

export default DayEventBuilder;



/*handleDescriptionChange: function(e) {
       this.setState({description: e.target.value});
   };

   handleNameChange: function(e) {
       this.setState({name: e.target.value});
   };*/