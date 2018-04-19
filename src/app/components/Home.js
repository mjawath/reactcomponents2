import React from "react";
import Button from "./Button";
import Form from "./Form";


export class Home extends React.Component {


    constructor() {       
        super();
        
        this.state= {
            busObj:{fname:"sample"}
        };
    }

    testButton=(e)=>{
        console.log("Home" );
        console.log(e);        
    }
    onChange= (name,value)=> {
        
        this.setState(()=>{this.state.busObj[name]= value});

    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <Button text="my button" event={this.testButton}></Button>
                <Form onChange={this.onChange} data={this.state.busObj} ></Form>                
            </div>
        );
    }
}