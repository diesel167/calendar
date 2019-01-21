import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

let events=[];
let i=false;   //helper variable to getDerivedStateFromProps work only once, cause state.time1 will changes
                // and will !==props.timeStart (condition in  getDerivedStateFromProps)
class EventForm extends React.Component {

    constructor() {
        super();
        this.state = {
            i:false,
            task: '',
            time1:'00:00',
            time2:'00:00'
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
            console.log('state.time1='+state.time1);
            console.log('props.timeStart='+props.timeStart);
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
        let el ={
            month:this.props.month,
            day:this.props.day,
            task:this.state.task.slice(),
            time1:this.state.time1.slice(),
            time2:this.state.time2.slice()
        };
        events.push(el);

        console.log(events);
        event.preventDefault();
    }

    onTaskChange(event){
        this.setState({task: event.target.value});
    }

    onTime1Change(event){
        console.log(event.target.value);
        this.setState({time1: event.target.value});
    }

    onTime2Change(event){
        this.setState({time2: event.target.value});
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
                <form onSubmit={this.onSubmit}>
                    <p><label><input type="time" step="3600" name="time1" value={this.addZero(this.state.time1)}
                                     onChange={this.onTime1Change}/></label>
                        <label><input type="time" step="3600" name="time2" value={this.addZero(this.state.time2)}
                                      onChange={this.onTime2Change}/></label></p>


                    <textarea name="com" rows="7" onChange={this.onTaskChange}  value={this.state.task}/>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>
        );
    }
}

export default EventForm;


/*<p><label> Task: <input type="text" rows="5" name="task" value={this.state.task}
                                          onChange={this.onTaskChange}/></label></p>*/