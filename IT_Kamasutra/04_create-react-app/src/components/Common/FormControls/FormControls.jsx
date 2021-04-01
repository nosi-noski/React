import React from 'react';
import classes from './FormControls.module.css'
import {Field} from 'redux-form'

const FormControl = ({input, meta, ...props}) => {
    const isError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + ' ' +  (isError && classes.error)}>
            <div>
                {props.children}
            </div>
            {isError && <span>{meta.error}</span>}
        </div>
    )
}

export const TextArea = (props) => {
    
    const {input, meta, ...restProps} = props;

    return <FormControl {...props}>
        <textarea {...input} {...restProps}></textarea>
    </FormControl>

} 

export const Input = (props) => {
    
    const {input, meta, ...restProps} = props;

    return <FormControl {...props}>
        <input {...input} {...restProps}/>
    </FormControl>

} 


export const createField = (name = 'field', type = false, placeholder='field', component=false, validators =[], text='', props={}) => {
    return <div>
                <Field 
                    name={name}
                    type={type} 
                    placeholder={placeholder} 
                    component={component}
                    validate={validators}
                    {...props}/> {text}
            </div>
}

// export const TextArea = ({input, meta, ...props} ) => {
//     const isError = meta.touched && meta.error;
//     return (
//         <div className={classes.formControl + ' ' +  (isError && classes.error)}>
//             <div>
//                 <textarea {...input} {...props} name="" id="" cols="30" rows="1"></textarea>
//             </div>
//             {isError && <span>{meta.error}</span>}
//         </div>
//     )
// }

// export const Input = ({input, meta, ...props} ) => {
//     const isError = meta.touched && meta.error;
//     return (
//         <div className={classes.formControl + ' ' +  (isError && classes.error)}>
//             <div>
//                 <input {...input} {...props}/>
//             </div>
//             <div>
//             {isError && <span>{meta.error}</span>}
//             </div>
//         </div>
//     )
// }