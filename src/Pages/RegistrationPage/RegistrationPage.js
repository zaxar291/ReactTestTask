import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm } from 'redux-form'
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import Checkbox from "../../Components/Checkbox/Checkbox";
import { EmailRegEx } from "../../App/Consts";
import { useDispatch } from "react-redux";
import { CreateUser } from "../../Redux/Actions/UserActions/UserActions";

const RegistrationForm = ( props ) => {
    const dispatch = useDispatch()
    const { handleSubmit } = props
    const SubmitForm = (values) => {
        dispatch(CreateUser(values))
    }
    return (
        <div className="container pt-3">
            <form onSubmit={handleSubmit(SubmitForm)}>
                <Input type="text" name="email" label="Your email" />
                <Input type="password" name="password" label="Create password" />
                <Checkbox name="license" label="Accept license agreement" />
                <Button type="submit" text="Register" />
            </form>
        </div>
    )
}

const validate = ( values ) => {
    const errors = {}
    if (!EmailRegEx.test(values.email)) {
        errors.email = "Email you entered is invalid!"
    }
    if (values.license !== true) {
        errors.license = "You didn't accept license agreement!"
    }
    return errors
}

RegistrationForm.propTypes = {
    props: PropTypes.object
}

const RegistrationPage = reduxForm({
    form: 'register',
    validate
})(RegistrationForm)

export default RegistrationPage
