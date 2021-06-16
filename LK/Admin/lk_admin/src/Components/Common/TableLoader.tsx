import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'
import { useCommonStyles } from '../../Styles/MicroserviceStyles'

export const TableLoader = () => {
    const classes = useCommonStyles()
    return (
        <div className={classes.loader}>
            <CircularProgress />
        </div>
    )
}
