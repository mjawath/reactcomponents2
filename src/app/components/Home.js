import React from "react";
import Button from "./Button";
import Form from "./Form";


export class Home extends React.Component {

    testButton=(e)=>{
        console.log("Home" );
        console.log(e);
        
    }

    render() {
        return (
            <div>
                <p>In a new Component!</p>
                <Button text="my button" event={this.testButton}></Button>
                <Form></Form>
            </div>
        );
    }
}