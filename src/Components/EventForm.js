import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import $ from 'jquery';

let events=[];

class EventForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            task: '',
            time1:this.props.timeStart,
            time2:'00:00',
        };


        this.onTaskChange = this.onTaskChange.bind(this);
        this.onTime1Change = this.onTime1Change.bind(this);
        this.onTime2Change = this.onTime2Change.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        console.log(this.props.timeStart);
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

    render() {
        console.log(this.props.timeStart);


        return (
            <div className="form col-lg-6 col-md-6 col-sm-8 col-xs-8">
                <button onClick={() => {
                    $(function () {
                        $('table').css('display', 'table');
                        $('.form').css('display', 'none');
                        $('table.dayEvents').css('opacity','1');
                        $('table.main').css('opacity','.5');
                    })
                }}>&larr;</button>
                <form onSubmit={this.onSubmit}>
                    <p><label><input type="time" step="3600" name="time1" value={this.state.time1}
                                                           onChange={this.onTime1Change}/></label>

                        <label><input type="time" step="3600" name="time2" value={this.state.time2}
                                                        onChange={this.onTime2Change}/></label></p>


                    <p><label> Task: <input type="text" name="task" value={this.state.task}
                                              onChange={this.onTaskChange}/></label></p>
                    <p><input type="submit" value="Submit" /></p>
                </form>
            </div>

        );
    }
}

export default EventForm;