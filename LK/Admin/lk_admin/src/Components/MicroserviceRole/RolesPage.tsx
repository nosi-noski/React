import React, { FC, useContext, useEffect } from 'react'
import { Order } from './../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import RolesTable from './Table/RolesTable'
import { observer } from 'mobx-react'

const RolesPage: FC = observer(() => {
    const { Roles, MSCRoleTableHeads, addRole, deleteRole } = useContext(
        Context
    )

    useEffect(() => {}, [Roles])

    return (
        <RolesTable
            heads={MSCRoleTableHeads}
            rows={Roles}
            order={Order.Asc}
            onAdd={addRole}
            onDelete={deleteRole}
        />
    )
})

export default RolesPage
