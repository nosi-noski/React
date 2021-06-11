import React, { FC, useState } from 'react'
import { ITableToolbarProps } from '../../../Interfaces/MicroserviceInterfaces'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddIcon from '@material-ui/icons/Add'
import { useToolbarStyles } from '../../../Styles/MicroserviceStyles'
import Modal from './Modal'

const ConfigsTableToolbar: FC<ITableToolbarProps> = (props) => {
    const classes = useToolbarStyles()
    const { numSelected, title, addButtonTitle } = props
    const addButtonTitleDefault = addButtonTitle || 'Добавить'
    const [showForm, setShowForm] = useState(false)
    return (
        <>
            <Toolbar
                className={clsx(classes.root, {
                    [classes.highlight]: numSelected > 0,
                })}
            >
                {numSelected === 0 ? (
                    <Tooltip title={addButtonTitleDefault}>
                        <IconButton
                            aria-label={addButtonTitleDefault}
                            onClick={() => setShowForm(true)}
                        >
                            <AddIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <></>
                )}
                {numSelected > 0 ? (
                    <Typography
                        className={classes.title}
                        color="inherit"
                        variant="subtitle1"
                        component="div"
                    >
                        {numSelected} selected
                    </Typography>
                ) : (
                    <Typography
                        className={classes.title}
                        variant="h6"
                        id="tableTitle"
                        component="div"
                    >
                        {title}
                    </Typography>
                )}
                {numSelected > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </Tooltip>
                ) : (
                    <Tooltip title="Filter list">
                        <IconButton aria-label="filter list">
                            <FilterListIcon />
                        </IconButton>
                    </Tooltip>
                )}
            </Toolbar>
            <Modal isOpen={showForm} setIsOpen={setShowForm} />
        </>
    )
}

export default ConfigsTableToolbar
