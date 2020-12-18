import React from 'react'
import { Field } from 'redux-form'

const RenderedField = ({ input, name, label, meta: { touched, error } }) => (
    <div className="form-group form-check">
        <input {...input} className={(touched && error && 'form-check-input is-invalid') || 'form-check-input'} type="checkbox" name={name} id={name} />
        <label className="form-check-label" htmlFor={name}>{label}</label>
        {(touched && error && <div className="invalid-feedback">{error}</div>)}
    </div>
)

const Checkbox = ({ name, label }) => {
    return (
        <Field component={RenderedField} name={name} label={label} />
    )
}

export default Checkbox
