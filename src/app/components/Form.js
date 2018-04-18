import React, { Component } from 'react';

export default class Form extends Component {
    

     onChange = (e) => {      
        console.log(e);
        console.log(e.target);
        console.log(e.target.value);

    }

    render() {
        return (
            <div>
                
                <span>Form </span>
                <form>
                <input  type="text" name="fname" onChange={this.onChange}/>
                    <br/>
                </form>
            </div>
        );
    }

    
}
