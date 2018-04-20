/**
 * Created by jawa on 11/23/17.
 */
import React,{Component} from 'react';
import {reduxForm,Field,reset} from "redux-form";
const ini = {name:"test name",qty:35,desc:"222"}


class Form extends Component{

    componentWillReceiveProps(nextProp){
        if(nextProp.formUI){
            // console.log(nextProp.formScal)
        }
    }


    renderFields=()=> {
        const compo=[];
        const formUI = this.props.formUI;
        let index =0;
        if (formUI.fields) {
            formUI.fields.map(field => {
                field.keyindex = index++;
                compo.push(this.renderField(field));
            });
        }
        return compo;
    }

    renderField=(field)=>{
        let fieldOnly = this.renderFieldOnly(field);
        if (!field.label || field.label===false) {
            return <div key={field.keyindex}>{fieldOnly}</div>;
        }else if(field.label && ( field.label instanceof Component)){
            const Label = field.label;//should be a component
            return <div key={field.keyindex}><Label/>{fieldOnly}</div>;
        }else{
            return this.renderFieldWithLabel(field);
        }

        {/*const f= field.noLable ? :;*/}
    }
    renderFieldWithLabel=(field)=>{
        return (<div key={field.keyindex}>
            {this.renderLabel(field)}
            {this.renderFieldOnly(field)}
        </div>);
    }
    renderFieldOnly=(field)=>{
        return <Field
            name={field.name}
            component={field.component}
            type={field.type}
            placeholder={field.placeholder}
            onChange={this.handleChangex}
        />;
        // return <Field/>;
    }
    renderLabel=(field)=>{
        return <label >{field.label}</label>;
    }

    renderSubmitButton=(config)=>{
        const {pristine, submitLabel,submitting} =config;
        return <button type="submit" disabled={pristine || submitting}>{submitLabel}</button>

    }

    renderControlButtons=(config)=>{
        const {pristine, reset, submitting,formUI} = (config || this.props) ;

        return  <div>
        <button type="submit" disabled={pristine || submitting}>{formUI.submitLabel}</button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
            {formUI.clearLabel}
        </button>
        </div>;
    }

    clear=() =>{
     this.props.submit();
    }

    //   handleSubmit=(values)=>{
    //     // e.preventDefault();
    //     console.log("------------------------------------------");
    //     console.log(values);
    // }

    handleChangex=(event, newValue, previousValue)=>{
        console.log("changeeeeeeeeeeeeeeeeeeeeeee")
        console.log(newValue);
        //do i can trigger reducer
        // this.props.change("storableQty",newValue);
        const tt= this.props.test(event, newValue, previousValue);
        for (const key in tt) {
            this.props.change(key, tt[key]);
        }
        // window.alert("post "+tt);

        console.log(tt)
    }
    clear=()=>{
        this.props.clear();
    }


    render(){
        const { handleSubmit, pristine, reset, submitting } = this.props;
        console.log(this.props.initialValues);
        return <form onSubmit={handleSubmit} /*action={this.props.action}*/  /*method={this.props.method ? this.props.method : 'post'}*/
                     {...this.props.extras}  >
            {this.props.children}
            {this.renderFields()}
            {this.renderControlButtons()}
        </form>
    };


    renderTestForm=()=>{
        const { handleSubmit, pristine, reset, submitting } = this.props;

        return <div>
            <div>
                <label>First Name</label>
                <div>
                    <Field
                        name="firstName"
                        component="input"
                        type="text"
                        placeholder="First Name"
                    />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="lastName"
                        component="input"
                        type="text"
                        placeholder="Last Name"
                    />
                </div>
            </div>

            <div>
                <label>Last Name</label>
                <div>
                    <Field
                        name="qty"
                        component="input"
                        type="text"
                        placeholder="qty"
                        onChange={this.handleChangex}
                    />
                </div>
            </div>

            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div></div>;
    }
}

Form.clearx=(dispatch,formName)=>{
    dispatch(reset(formName));
}

export default reduxForm({
    //form: 'item', // a unique identifier for this form


})(Form);




// --------------------------------------------------------------
//field validations

const required = value => (value ? undefined : 'Required');
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength15 = maxLength(15)
export const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
export const minLength2 = minLength(2);
const number = value =>
    value && isNaN(Number(value)) ? 'Must be a number' : undefined;
const minValue = min => value =>
    value && value < min ? `Must be at least ${min}` : undefined;
const minValue18 = minValue(18);
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;
const tooOld = value =>
    value && value > 65 ? 'You might be too old for this' : undefined;
const aol = value =>
    value && /.+@aol\.com/.test(value)
        ? 'Really? You still use AOL for your email?'
        : undefined;
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;
export const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;

const validate = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.age) {
        errors.age = 'Required'
    } else if (isNaN(Number(values.age))) {
        errors.age = 'Must be a number'
    } else if (Number(values.age) < 18) {
        errors.age = 'Sorry, you must be at least 18 years old'
    }
    return errors
};

const warn = values => {
    const warnings = {}
    if (values.age < 19) {
        warnings.age = 'Hmm, you seem a bit young...'
    }
    return warnings
}

