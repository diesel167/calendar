import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


class CellBuild extends React.Component {

    render(){
        return (
            <td tabIndex="0"><div tabIndex="0" className={this.props.isNowDate}><p>{this.props.date}</p></div></td>
        )
    }
}

export default CellBuild;