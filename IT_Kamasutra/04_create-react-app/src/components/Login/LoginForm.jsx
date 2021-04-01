import React from 'react';
import {Field,reduxForm} from 'redux-form'
import { Input } from './../Common/FormControls/FormControls'
import { required } from './../../utils/validators/validators'
import classes from './../Common/FormControls/FormControls.module.css'
import {createField} from './../Common/FormControls/FormControls'

// 90 - props -> {handleSubmit, error}
// Field -> createField
const LoginForm = ( {handleSubmit, error} ) => {
    return (
        <form action="" onSubmit={ handleSubmit }>   
            { createField('email', false, 'Email', Input, [required]) }
                {/* <div><Field placeholder={"Email"} 
                       name={"email"} 
                       component={Input}
                       validate={[required]}/> </div>*/}
            { createField('password', 'password', 'Password', Input, [required]) }
            {/*<div>
                <Field placeholder={"Password"} 
                       name={"password"}
                       type={"password"}
                       component={Input}
                       validate={[required]}/>
            </div>*/}
             { createField('rememberMe', 'checkbox', '', Input, [], 'remember me' )}
            {/* <div>
                <Field type={"checkbox"} 
                       name={"rememberMe"} 
                       component={Input}/>
            </div> */}
            { error ? 
             <div className={classes.formSummaryError}>{error}</div>
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