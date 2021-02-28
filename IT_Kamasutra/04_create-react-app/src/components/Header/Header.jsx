import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    
    return (
        <header className={classes.header}>
            <a href="/">
                <img className={classes.img} src="https://www.freelogodesign.org/file/app/client/thumb/5fd79ff2-74e1-456f-8608-cc53898fa761_200x200.png?1604860269063" alt=""/>
            </a>
            <div className={classes.loginBlock}>
                {
                    props.isAuth ?  props.login : <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
            
                
  
        </header>
    );
}

export default Header;