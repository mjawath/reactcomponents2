import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props){
        super(props);
    }

     onChange = (e) => {      
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);
        if(this.props.onChange){
            this.props.onChange(e.target.name,e.target.value);
        }
    }

    render() {
        return (
            <div>
                
                <span>Form </span>
                <form>
                <input  type="text" name="fname" onChange={this.onChange} value={this.props.data.fname}/>
                    <br/>

                <input  type="submit" name="submit" onChange={this.onChange} value={this.props.data.fname}/>
                    <br/>                    
                </form>
            </div>
        );
    }

    
}
