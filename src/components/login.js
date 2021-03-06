import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {login} from '../actions/auth';
import {required, nonEmpty} from '../validators';
import Input from './input';



export class LoginForm extends React.Component {
    onSubmit(values) {
        return this.props.dispatch(login(values.username, values.password));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
         <div className="login-register">
            <form
                className="login-form"
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                {error}
                <label htmlFor="username">
                    <p>Username</p>
                    <Field
                        component={Input}
                        type="text"
                        name="username"
                        id="username"
                        validate={[required, nonEmpty]}
                    />
                </label>
                <label htmlFor="password">
                    <p>Password</p>
                    <Field
                        component={Input}
                        type="password"
                        name="password"
                        id="password"
                        validate={[required, nonEmpty]}
                    />
                </label>
                <br/>
                <button 
                    className='form-button'
                    id="login-form-button"
                    disabled={this.props.pristine || this.props.submitting}
                >
                    Log in
                </button>
            </form>
         </div>
        );
    }
}

export default reduxForm({
    form: 'login'
})(LoginForm);