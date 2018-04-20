/**
 * Created by jawa on 11/26/17.
 */
import React, {Component} from 'react';
import {Field as RXField } from 'redux-form';

export default class Field extends Component{

    render(){
        return<div>
            <RXField name={this.props.name} component={this.props.component} type={this.props.type} />
        </div>
    }

}

