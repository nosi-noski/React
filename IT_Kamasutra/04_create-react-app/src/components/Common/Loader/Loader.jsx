import React from 'react'
import classes from './Loader.module.css'
import loader from './../../../assets/img/loader.gif'

let Loader = (props) => {
    return <div className={classes.loaderCover}>
            <img className={classes.loaderImg} alt="" src={loader}/>
        </div>
};

export default Loader;