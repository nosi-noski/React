import React, { FC } from 'react'
import { useCommonStyles, useDrawerStyles } from '../Styles/MicroserviceStyles'
import clsx from 'clsx'
import { IMainPage } from './../Interfaces/MicroserviceInterfaces'

const MainPage: FC<IMainPage> = ({ leftBarOpen, children }) => {
    const classes = { ...useCommonStyles(), ...useDrawerStyles() }
    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: leftBarOpen,
            })}
        >
            {children}
        </div>
    )
}

export default MainPage
