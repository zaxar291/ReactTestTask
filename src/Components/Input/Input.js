import React from "react";
import { Field } from 'redux-form'

const RenderField = ({ input, label, type, name, meta: { touched, error } }) => (
    <div className="form-group">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} name={name} className={(touched && error && 'form-control is-invalid') || 'form-control'} />
            {touched &&
            ((error && <div className="invalid-feedback">{error}</div>))}
        </div>
    </div>
)

const Input = ({ label, type, name }) => {
    return (
        <Field name={name} component={RenderField} label={label} type={type} className="form-control"/>
    )
}

export default Input
