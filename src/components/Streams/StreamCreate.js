import React from 'react';
import { Field, reduxForm } from 'redux-form';


class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} placeholder={label} />
            </div>
        );
    };

    onSubmit(formValues){
        //this is run after the redux form runs it's on submit function which includes the prevent default, this secondary function is for YOU (the dev) to add any additional code that you want to occur after the redux submit
        console.log(formValues);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    };
};

export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);