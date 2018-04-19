import React,{Component} from 'react';

export default class Button extends Component{

    fireEvent=(e)=>{
        console.log(e);
        console.log("btt");
        if(this.props.event){
            this.props.event(e);
        }
    }

    render(){
        return <button onClick={this.fireEvent}>{this.props.text}</button>; 
    }

}