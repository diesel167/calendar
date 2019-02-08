import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

let i=false;   //helper variable to getDerivedStateFromProps work only once,and prevent working in case state.time1 changes
                // and will !==props.timeStart (condition in  getDerivedStateFromProps)
let checked=''; //helper for checkbox


//do 00:00 format for 1:00..9:00
function addZero(n) {
    return n.length > 4 ? n : '0' + n ;
}

class EventForm extends React.Component {
    monthName;
    constructor() {
        super();
        this.state = {
            task: '',
            time1:'00:00',
            time2:'00:00',
            disabled:false,
            afterAlert:true //hide form after 'submit' click as default
        };
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onTime1Change = this.onTime1Change.bind(this);
        this.onTime2Change = this.onTime2Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onDayChange = this.onDayChange.bind(this);
    }

    //if new props will be, this method will be called again
    static getDerivedStateFromProps(props, state) {
        if(state.time1 !== props.timeStart && i===false) {
            i=true;
            return {
                time1: props.timeStart,   //set time1, time2 state
                time2: addZero(parseInt(props.timeStart.substring(0,props.timeStart.length-3))+1+":00")
            }
        }
        // Return null to indicate no change to state.
        return null;
    }



    checkbox(){
        if(checked===''){
            checked='checked'
        }
        else{
            checked=''
        }
    };

    onSubmit(event){
        //initialize localstorage
        if (!localStorage.getItem("myEl")){
            //очищаем все хранилище
            localStorage.clear();
            let events=[];
            localStorage.setItem("myEl", JSON.stringify(events));
        }

        let temp=JSON.parse(localStorage.getItem("myEl"));
        let ifValid=true;
        temp.map((event)=>{
            if(event.day===this.props.day && event.month===this.props.month && event.year===this.props.year ){
                //check for correct timing
                if(parseInt(this.state.time2)>parseInt(event.time1)&&parseInt(this.state.time1)<=parseInt(event.time1)){
                    alert('You have already event at this time');
                    ifValid=false;
                }
            }
        });
        //check for min 1 hour length of event and time 2>time1
        if(parseInt(this.state.time2)<=parseInt(this.state.time1)){
            if(this.state.disabled===false){
                alert('Check the time');
                ifValid=false;
                this.setState({task:''});  //clear task field
            }
        }

        console.log("time2 =  "+parseInt(this.state.time2));
        console.log("time1 =  "+parseInt(this.state.time1));
        if (ifValid){
            let el ={
                day:this.props.day,
                month:this.props.month,
                year:this.props.year,
                task:this.state.task,
                time1:this.state.time1,
                time2:this.state.time2
            };
            temp.push(el);
            localStorage.setItem("myEl", JSON.stringify(temp)); //write it in localstorage under key "myKey"
            this.props.changeDEB(el.task);         //update DayEventBuilder's state
            this.setState({task:''});  //clear task field
            this.setState({disabled:false}); //set default time field focus
            checked='';  //uncheck the checkbox
        }
        event.preventDefault();
    }



    onTaskChange(event){
        this.setState({task: event.target.value});
    }

    onTime1Change(event){
        this.setState({time1: event.target.value});
    }

    onTime2Change(event){
        this.setState({time2: event.target.value});
    }

    onDayChange(){
        this.checkbox();
        if(this.state.disabled===false){
            this.setState({time1: '00:00'});
            this.setState({time2: '00:00'});
            this.setState({disabled: true});
        }
        else{
            this.setState({time1: this.props.timeStart});
            this.setState({time2: this.props.timeStart});
            this.setState({disabled:false});
        }
    }

    render() {

        return (
            <div className="form col-lg-6 col-md-6 col-sm-10 col-11">
                <button onClick={() => {   //EXIT button
                    checked='';  //uncheck the checkbox
                    this.setState({disabled:false}); //set default checkbox
                    this.setState({task:''});  //clear task field
                    i=false;   //set to default i variable
                    $(function () {
                        $('.dayEvents').css('zIndex','4');
                        $('table').css('display', 'table');
                        $('.form').css('display', 'none');
                        $('table.dayEvents').css('opacity','1');
                        $('table.main').css('opacity','.5');
                    })
                }}>&larr;</button>
                <h1>Create task</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <div className="time_handlers">Time of beginning  </div>
                        <label><input disabled={this.state.disabled} type="time" step="3600" name="time1" value={this.state.time1}
                                     onChange={this.onTime1Change}/></label>
                        <br/>
                        <div className="time_handlers" >Time of the end  </div>
                        <label><input disabled={this.state.disabled}  type="time" step="3600" name="time2" value={this.state.time2}
                                     onChange={this.onTime2Change}/></label>
                    </div>
                    <input type="checkbox" checked={checked} name="allday" value="allday" onChange={this.onDayChange}/> All day <br/>
                    <textarea className="tasktext" name="com" rows="3" onChange={this.onTaskChange}  value={this.state.task}/>
                    <p><input className="submitButton" type="submit" value="Submit" onClick={() => {
                        i=false;   //set to default i variable
                        $(function () {
                            $('.dayEvents').css('zIndex','4');
                            $('table').css('display', 'table');
                            $('.form').css('display', 'none');
                            $('table.dayEvents').css('opacity','1');
                            $('table.main').css('opacity','.5');
                        })
                        }} /></p>
                </form>
            </div>
        );
    }
}

export default EventForm;


/* day handler in form
<div className="time_handlers">Day</div><label><input type="date" id="start" name="trip-start"
       name="day1" value={this.state.time1)}  onChange={this.onTime1Change}/></label><br/>*/