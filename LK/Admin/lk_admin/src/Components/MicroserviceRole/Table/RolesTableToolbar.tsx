import React, { FC, useState } from 'react'
import { IRoleTableToolbarProps } from '../../../Interfaces/MicroserviceInterfaces'
import clsx from 'clsx'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'
import AddIcon from '@material-ui/icons/Add'
import { useToolbarStyles } from '../../../Styles/MicroserviceStyles'
import Modalindow from './ModalWindow'

const RolesTableToolbar: FC<IRoleTableToolbarProps> = ({
    title,
    addButtonTitle,
    selected,
    setSelected,
    onDelete,
}) => {
    const classes = useToolbarStyles()
    const numSelected = selected.length
    const addButtonTitleDefault = addButtonTitle || 'Добавить'
    const [showForm, setShowForm] = useState(false)

    const onDeleteHandler = (event: React.MouseEvent) => {
        if (typeof onDelete === 'function') {
            onDelete(selected)
            setSelected([])
        }
    }
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
                        Выделено записей: {numSelected}
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
                    <Tooltip title="Удалить" onClick={onDeleteHandler}>
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
            <Modalindow isOpen={showForm} setIsOpen={setShowForm} />
        </>
    )
}

export default RolesTableToolbar
