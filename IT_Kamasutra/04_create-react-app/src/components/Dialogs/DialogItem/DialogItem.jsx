import React from 'react';
import classes from'./../Dialogs.module.css';
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = "/dialogs/" + '' + props.dialogId;
    return (
        <div className={classes.dialog}>
            <NavLink 
                to={path} activeClassName={classes.activeLink}>
                    {props.name}
            </NavLink>
        </div>
	);
}

export default DialogItem;