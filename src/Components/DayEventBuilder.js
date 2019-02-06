import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import EventForm from './EventForm.js';
import Event from './Event.js';
import $ from 'jquery';

let temp='00:00';

class DayEventBuilder extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isSmall:'inCellSmall',    //is the event block small or big already
            day:this.props.day,             //take actual day and month of the clicked cell from CellBuild
            month:this.props.month,
            timeStart:'00:00',
            storage:localStorage.getItem("myEl")
        };
        this.selectedTime = this.selectedTime.bind(this);
    }

    //if new props will be, this method will be called again
    static getDerivedStateFromProps(props, state) {
        if((state.storage) !== localStorage.getItem("myEl")) {
            return {
                storage:localStorage.getItem("myEl")
            };
        }
        if(state.timeStart!==temp){
            return {
                timeStart:temp
            };
        }
        // Return null to indicate no change to state.
        return null;
    }

    selectedTime=(x)=>{
        this.setState({timeStart:x});
        temp=x;
    };

    changeDEB=(x)=>{
        this.setState({storage:localStorage.getItem("myEl")});
        this.props.transit(x);
    };

    //do 00:00 format for 1:00..9:00
    addZero(n) {
        return n.length > 4 ? n : '0' + n ;
    };

    render(){

        let table=[];    //create table container
        let rows=[];    //create rows container
        let skip=0;   //skip <td> adding if needed

        //build table
        let parsed=JSON.parse(this.state.storage);
        for (let i=0;i<25;i++){
            let cells=[];   //create empty cells container

            //left cell with time in row
            cells.push(<td>{i+':00'}</td>);

            //map parsed item "myEl" in localeStorage and draw event if needed
            if(parsed){
                parsed.map((event,k)=>{

                    //check if the event really today
                    if(this.addZero((i+':00'))===event.time1 && event.month===this.props.month && event.year===this.props.year && event.day===this.props.day ){
                        let rowspan;
                        //console.log((i+':00'));
                        //console.log(event.time1);
                        if(event.time2==="00:00"){
                            rowspan = 24;   //calculate how long will the event be
                        }
                        else{
                            rowspan = event.time2.substring(0, event.time2.length-3)-event.time1.substring(0, event.time1.length-3);   //calculate how long will the event be
                        }

                        cells.push(<td rowSpan={rowspan} className="setEvent"><Event eventTask={event.task}/><button className="deleteOneEvent"
                                                                                                  onClick={() => {this.props.eventDelete(k)}}>delete</button></td>);
                        skip=rowspan;   //set skip counter
                    }
                },this);
            }



            //draw empty right cell with the listener for adding event
            if(skip<=0){   //if we finished skip <td> adding while event was
                cells.push(<td onClick={() => {
                    this.selectedTime(i+':00');
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

        table.push(<table className="dayEvents col-lg-6 col-md-8 col-sm-10 col-xs-10"><thead><tr><th></th>
            <th><div className='eventDate'><div>{this.props.monthName}</div><div>{this.props.day}</div></div><button onClick={() => {
            this.setState({isSmall:"inCellSmall"});  //reset event blocks to small
            $(function () {
                $('table.main').css('opacity','1');    //EXIT button
                $('table.dayEvents').css('display','none');
            })
        }
        }>&#215;</button></th></tr></thead><tbody>{rows}</tbody></table>);


        return (<div>
                    <div>{table}</div>
                    <EventForm month={this.props.month}
                               timeStart={this.addZero(this.state.timeStart)}
                               monthName={this.props.monthName}
                               day={this.props.day}
                               changeDEB={this.changeDEB}
                               year={this.props.year}/>
                </div>);
    }
}

export default DayEventBuilder;



