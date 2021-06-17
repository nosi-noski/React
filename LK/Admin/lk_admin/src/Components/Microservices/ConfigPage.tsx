import React, { FC, useContext, useEffect } from 'react'

import { ConfigTable } from './Table/ConfigTable'
import { Order } from '../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import { observer } from 'mobx-react'
import { ModulesContext } from '../../Context/ModulesContext'

export const ConfigPage: FC = observer(() => {
    const { MSCTableHeads, deleteMSConfig } = useContext(Context)

    const {
        getAllModules,
        isFetching,
        list,
        createModule,
        updateModule,
        removeModule,
    } = useContext(ModulesContext)

    useEffect(() => {
        getAllModules()
    }, [])

    return (
        <ConfigTable
            heads={MSCTableHeads}
            rows={list}
            order={Order.Asc}
            onAdd={createModule}
            onEdit={updateModule}
            onDelete={removeModule}
            isFetching={isFetching}
            emptyListTitle={'Список пуст'}
        />
    )
})
