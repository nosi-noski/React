import React from 'react';
import {Field,reduxForm} from 'redux-form'
import { Input } from './../Common/FormControls/FormControls'
import { required } from './../../utils/validators/validators'



const LoginForm = (props) => {
    return (
        <form action="" onSubmit={ props.handleSubmit }>
            <div>
                <Field placeholder={"Email"} 
                       name={"email"} 
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field placeholder={"Password"} 
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[required]}/>
            </div>
            <div>
                <Field type={"checkbox"} 
                       name={"rememberMe"} 
                       component={Input}/>
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default LoginReduxForm;