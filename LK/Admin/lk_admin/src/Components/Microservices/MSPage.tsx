import React, { FC, useContext, useEffect } from 'react'
import ConfigsTable from './Table/ConfigsTable'
import { Order } from './../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import { observer } from 'mobx-react'
import { ModulesContext } from './../../Context/ModulesContext'

const MSPage: FC = observer(() => {
    const {
        MSConfigs,
        MSCTableHeads,
        addMSConfig,
        deleteMSConfig,
    } = useContext(Context)
    const { getAllModules, isFetching, list } = useContext(ModulesContext)
    useEffect(() => {
        getAllModules()
    }, [MSConfigs])

    return (
        <ConfigsTable
            heads={MSCTableHeads}
            rows={list}
            order={Order.Asc}
            onAdd={addMSConfig}
            onDelete={deleteMSConfig}
            isFetching={isFetching}
        />
    )
})

export default MSPage
