import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

let i=false;   //helper variable to getDerivedStateFromProps work only once,and prevent working in case state.time1 changes
                // and will !==props.timeStart (condition in  getDerivedStateFromProps)

class EventForm extends React.Component {
    monthNum;
    constructor() {
        super();
        this.state = {

            task: '',
            time1:'00:00',
            time2:'00:00',

        };
        this.onTaskChange = this.onTaskChange.bind(this);
        this.onTime1Change = this.onTime1Change.bind(this);
        this.onTime2Change = this.onTime2Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    //if new props will be, this method will be called again
    static getDerivedStateFromProps(props, state) {
        if(state.time1 !== props.timeStart && i===false) {
            i=true;
            return {
                time1: props.timeStart,   //set time1, time2 state
                time2: props.timeStart
            };
        }
        // Return null to indicate no change to state.
        return null;
    }

    //do 00:00 format for 1:00..9:00
    addZero(n) {
        return n.length > 4 ? n : "0" + n ;
    }

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
            if(event.day===this.props.day && event.month===this.props.monthNum && event.year===this.props.year ){
                if(parseInt(this.state.time2)>parseInt(event.time1)&&parseInt(this.state.time1)<=parseInt(event.time1)){
                    alert('You have already event at this time');
                    ifValid=false;
                }
            }
        });
/*((parseInt(event.time1)<parseInt(this.state.time2)<=parseInt(event.time2))||
                    (parseInt(this.state.time1)<=parseInt(event.time1)&&parseInt(this.state.time2)>=parseInt(event.time2)))*/

        if (ifValid){
            let el ={
                date:'2019.'+this.props.monthNum+'.'+this.props.day,
                day:this.props.day,
                month:this.props.monthNum,
                year:this.props.year,
                task:this.state.task,
                time1:this.state.time1,
                time2:this.state.time2
            };
            temp.push(el);
            localStorage.setItem("myEl", JSON.stringify(temp)); //write it in localstorage under key "myKey"
            this.props.changeDEB(el.task);         //update DayEventBuilder's state
            this.setState({task:''});  //clear task field
        }
        /*let el ={
            date:'2019.'+this.props.monthNum+'.'+this.props.day,
            day:this.props.day,
            month:this.props.monthNum,
            year:this.props.year,
            task:this.state.task,
            time1:this.state.time1,
            time2:this.state.time2
        };
        temp.push(el);
        localStorage.setItem("myEl", JSON.stringify(temp)); //write it in localstorage under key "myKey"
        this.props.changeDEB(el.task);         //update DayEventBuilder's state
        this.setState({task:''});  //clear task field*/
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
        console.log(this.state.time2);
    }

    render() {

        return (
            <div className="form col-lg-6 col-md-6 col-sm-8 col-xs-8">
                <button onClick={() => {
                    i=false;   //set to default i variable
                    $(function () {
                        $('table').css('display', 'table');
                        $('.form').css('display', 'none');
                        $('table.dayEvents').css('opacity','1');
                        $('table.main').css('opacity','.5');
                    })
                }}>&larr;</button>
                <h1>Create task</h1>
                <form onSubmit={this.onSubmit}>
                    <p><div className="time_handlers">Time of beginning  </div><label><input type="time" step="3600" name="time1" value={this.addZero(this.state.time1)}
                                     onChange={this.onTime1Change}/></label><br/>
                        <label><div className="time_handlers" >Time of the end  </div><input type="time" step="3600" name="time2" value={this.addZero(this.state.time2)}
                                      onChange={this.onTime2Change}/></label></p>
                    <textarea className="tasktext" name="com" rows="3" onChange={this.onTaskChange}  value={this.state.task}/>
                    <p><input className="submitButton" type="submit" value="Submit" onClick={() => {

                        i=false;   //set to default i variable
                        $(function () {
                            $('table').css('display', 'table');
                            $('.form').css('display', 'none');
                            $('table.dayEvents').css('opacity','1');
                            $('table.main').css('opacity','.5');
                        })}} /></p>
                </form>
            </div>
        );
    }
}

export default EventForm;


