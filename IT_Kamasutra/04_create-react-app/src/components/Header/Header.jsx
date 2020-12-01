import React from 'react';
import classes from './Header.module.css';
console.log("classes", classes)
const Header = () => {
    return (
        <header className={classes.header}>
            <a href="/">
                <img className={classes.img} src="https://www.freelogodesign.org/file/app/client/thumb/5fd79ff2-74e1-456f-8608-cc53898fa761_200x200.png?1604860269063" alt=""/>
            </a>
        </header>
    );
}

export default Header;