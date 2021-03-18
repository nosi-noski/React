import React from 'react';
import {Field,reduxForm} from 'redux-form'
import { Input } from './../Common/FormControls/FormControls'
import { required } from './../../utils/validators/validators'
import classes from './../Common/FormControls/FormControls.module.css'



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
            {props.error ? 
             <div className={classes.formSummaryError}>{props.error}</div>
            :<div></div>
            }
           
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