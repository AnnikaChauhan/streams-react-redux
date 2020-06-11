import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions';


class StreamCreate extends React.Component {
    renderError({error, touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    //this returned an error of 'undefined' when it was NOT an arrow function so had to be changed to an arrow function, the issue is because it's in a react/js class with context inside it - when renderInput is called it is called with an unknown value of 'this' - discussion of this issue is in video 242
    renderInput = ({ input, label, meta }) => {
        // console.log(meta);
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} placeholder={label} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        //this is run after the redux form runs it's on submit function which includes the prevent default, this secondary function is for YOU (the dev) to add any additional code that you want to occur after the redux submit
        console.log(formValues);
        this.props.createStream(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

const validate = (formValues) => {
    //every time the user interacts with a form the validation is called and validates all of the form inputs
    const errors = {};
    if (!formValues.title) {
        // only runs if the user didn't input a title value
        errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }
    return errors;
}

const formWrapped = reduxForm({
    form: 'streamCreate',
    validate: validate
})(StreamCreate);

// you don't really need to do the variable thing it's just for neatness
export default connect(null, { createStream })(formWrapped);