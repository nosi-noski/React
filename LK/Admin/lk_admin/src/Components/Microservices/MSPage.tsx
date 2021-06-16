import React, { FC, useContext, useEffect } from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import ConfigsTable from './Table/ConfigsTable'
import { Order } from './../../Interfaces/MicroserviceInterfaces'
import Context from './../../Store/Context'
import { observer } from 'mobx-react'
import { ModulesContext } from './../../Context/ModulesContext'
import { useCommonStyles } from './../../Styles/MicroserviceStyles'
const MSPage: FC = observer(() => {
    const { MSCTableHeads, addMSConfig, deleteMSConfig } = useContext(Context)

    const { getAllModules, isFetching, list } = useContext(ModulesContext)

    const classes = useCommonStyles()
    useEffect(() => {
        getAllModules()
    }, [])

    return (
        <ConfigsTable
            heads={MSCTableHeads}
            rows={list}
            order={Order.Asc}
            onAdd={addMSConfig}
            onDelete={deleteMSConfig}
            isFetching={isFetching}
            emptyListTitle={'Список пуст'}
        />
    )
})

export default MSPage
