import React from 'react';
import classes from'./Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = (props) => {
	return (
		<div className={classes.dialogs}>
			<div className={classes.dialogsItems}>
                <NavLink 
                    to="/dialogs/1" 
                    className={classes.dialog}
                    activeClassName={classes.activeLink}>
                        Ivan
                </NavLink>
                <NavLink 
                    to="/dialogs/2" 
                    className={classes.dialog}
                    activeClassName={classes.activeLink}>
                        Sergey
                </NavLink>
                <NavLink 
                    to="/dialogs/3" 
                    className={classes.dialog}
                    activeClassName={classes.activeLink}>
                        Stas
                </NavLink>
                <NavLink 
                    to="/dialogs/4" 
                    className={classes.dialog}
                    activeClassName={classes.activeLink}>
                    Nataliya
                </NavLink>
			</div>
					
			<div className={classes.messages}>
				<div className={classes.message}>Hi</div>
				<div className={classes.message}>How are you?</div>
				<div className={classes.message}>Have you ever coded in React?</div>
				<div className={classes.message}>I have special offer for you)) Text me back, please)</div>
			</div>
		</div>
	);
}

export default Dialogs;