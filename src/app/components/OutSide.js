import React, {Component} from 'react';

class OutSide extends Component{


    constructor(props){
        super(props);
    }



    render() {
        return <div><span>test comp renderer outside {this.props.name}</span></div>
    }
}

export default OutSide;