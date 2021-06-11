import React, { FC } from 'react'
import Typography from '@material-ui/core/Typography'
import { useCommonStyles, useDrawerStyles } from '../Styles/MicroserviceStyles'
import clsx from 'clsx'

interface IHomePage {
    navBarOpen: boolean
}

const HomePage: FC<IHomePage> = ({ navBarOpen }) => {
    const classes = { ...useCommonStyles(), ...useDrawerStyles() }

    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: navBarOpen,
            })}
        >
            <Typography paragraph>Главная страница Админки. v 0.0.1</Typography>
        </div>
    )
}

export default HomePage
