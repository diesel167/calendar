import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


//this component was created fot control the size of event after click

class Event extends React.Component {
    constructor() {
        super();
        this.state = {
            isSmall:'inCellSmall',    //is the event block small or big already
        };
    }

    render(){
        return(<div className={this.state.isSmall} onClick={()=>{
                                                                   console.log(this.state.isSmall);
                                                                   if(this.state.isSmall==="inCellSmall"){
                                                                       this.setState({isSmall:'inCellBig'})
                                                                   }
                                                                   else{
                                                                       this.setState({isSmall:"inCellSmall"})
                                                                   }
                                                                 }
                                                               }>{this.props.eventTask}</div>)
    }
}

export default Event;

