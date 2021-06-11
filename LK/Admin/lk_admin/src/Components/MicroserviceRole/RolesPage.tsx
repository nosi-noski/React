import React, { FC, useContext } from 'react'
import {
    useCommonStyles,
    useDrawerStyles,
} from '../../Styles/MicroserviceStyles'

import { Order } from './../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import RolesTable from './Table/RolesTable'
import clsx from 'clsx'

interface IMSRolesPage {
    navBarOpen: boolean
}

const RolesPage: FC<IMSRolesPage> = ({ navBarOpen }) => {
    const classes = { ...useCommonStyles(), ...useDrawerStyles() }
    const { MSCRoleTableHeads, Roles } = useContext(Context)
    return (
        <div
            className={clsx(classes.content, {
                [classes.contentShift]: navBarOpen,
            })}
        >
            <RolesTable
                heads={MSCRoleTableHeads}
                rows={Roles}
                order={Order.Asc}
            />
        </div>
    )
}

export default RolesPage
