import React, { FC } from 'react'
import { useCommonStyles } from '../../Styles/MicroserviceStyles'

interface ITitleListIsEmpty {
    title?: string
}

export const TitleListIsEmpty: FC<ITitleListIsEmpty> = ({ title }) => {
    const classes = useCommonStyles()
    const titleString = title || 'Список пуст'
    return <div className={classes.emptyTableFooter}>{titleString}</div>
}
