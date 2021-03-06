import React from 'react';
import {required, nonEmpty, matches, length, trimmed} from '../validators';

import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import Input from './input';

import {registerUser} from '../actions/user';

const passwordLength = length({min: 8, max: 72});
const matchesPassword = matches('password');

export class RegistrationForm extends React.Component {
    onSubmit(values) {
        const {username, password, fullName} = values;
        const user = {username, password, fullName};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        return (
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="fullName">Full Name:
                <Field component={Input} type="text" id="fullName" name="fullName" />
                </label>
                <label htmlFor="register username">Username
                <Field
                    component={Input}
                    type="text"
                    name="username"
                    id="username"
                    validate={[required, nonEmpty, trimmed]}
                />
                </label>
                <label htmlFor="register password">Password
                <Field
                    component={Input}
                    type="password"
                    name="password"
                    id="password"
                    validate={[required, passwordLength, trimmed]}
                />
                </label>
                <label htmlFor="passwordConfirm">Confirm Password
                <Field
                    component={Input}
                    type="password"
                    name="passwordConfirm"
                    id="confirm"
                    validate={[required, nonEmpty, matchesPassword]}
                />
                </label>
                <button 
                    type="submit"
                    className='form-button'
                >
                    Register
                </button>
            </form>
        );
    }
}

export default reduxForm({
    form: 'register'
})(RegistrationForm);