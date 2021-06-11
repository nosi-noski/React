import React, { FC, useContext } from 'react'
import ConfigsTable from './Table/ConfigsTable'
import { Order } from './../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import {
    useCommonStyles,
    useDrawerStyles,
} from '../../Styles/MicroserviceStyles'

import clsx from 'clsx'

interface IMSPage {
    navBarOpen: boolean
}

const MSPage: FC<IMSPage> = ({ navBarOpen }) => {
    const classes = { ...useCommonStyles(), ...useDrawerStyles() }
    const { MSConfigs, MSCTableHeads } = useContext(Context)
    return (
        <div
            className={clsx(classes.wrapper, classes.content, {
                [classes.contentShift]: navBarOpen,
            })}
        >
            <ConfigsTable
                heads={MSCTableHeads}
                rows={MSConfigs}
                order={Order.Asc}
            />
            ;
        </div>
    )
}

export default MSPage
