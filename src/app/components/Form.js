import React, { Component } from 'react';

export default class Form extends Component {

    constructor(props){
        super(props);
    }

    onChange = (e) => {      

        if(this.props.onChange){
            this.props.onChange(e.target.name,e.target.value);
        }
    }

    onHandleSubmit=(e)=> {
        e.preventDefault();
        // e to json 
        this.props.onHandleSubmit()
    }

    toJsonFromForm(form){

        return  {};
    }

    
    render() {
        return (
            <div>
                
                <span>Form </span>
                <form onSubmit={this.onHandleSubmit} >
                <input  type="text" name="fname" onChange={this.onChange} value={this.props.data.fname}/>
                    <br/>

                <input  type="submit" name="submit" />
                    <br/>                                        
                </form>
            </div>
        );
    }

    
}
