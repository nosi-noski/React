import React, { FC, useContext } from 'react'
import clsx from 'clsx'

import { Toolbar, Typography, IconButton, Tooltip } from '@material-ui/core'
import {
    Add as AddIcon,
    Delete as DeleteIcon,
    FilterList as FilterListIcon,
} from '@material-ui/icons'

import {
    IConfigTableToolbarProps,
    IMSConfig,
} from '../../../Interfaces/MicroserviceInterfaces'
import { ModulesContext } from './../../../Context/ModulesContext'
import { useToolbarStyles } from '../../../Styles/MicroserviceStyles'

import { ModalWindow } from './ModalWindow'
import { ModalModuleForm } from './ModalModuleForm'

export const ConfigsTableToolbar: FC<IConfigTableToolbarProps> = ({
    selected,
    setSelected,
    title,
    addButtonTitle,
    onDelete,
    showForm,
    setShowForm,
}) => {
    const classes = useToolbarStyles()
    const {
        createModule,
        updateModule,
        getAllModules,
        removeModule,
    } = useContext(ModulesContext)

    const numSelected = selected.length
    const addButtonTitleDefault = addButtonTitle || 'Добавить'

    const handleAfterAction = (p: Promise<any>) => {
        p.then(() => {
            setShowForm(false)
            getAllModules()
        }).catch((reason) => {
            console.error(reason)
        })
    }
    const handleCreateModule = (payload: IMSConfig) => {
        handleAfterAction(createModule(payload))
    }
    const handleUpdateModule = (payload: IMSConfig) => {
        handleAfterAction(updateModule(payload))
    }

    const onDeleteHandler = (event: React.MouseEvent) => {
        let promises = selected.map((scope) => {
            return removeModule(scope)
        })

        handleAfterAction(
            Promise.all(promises).then((value) => {
                setSelected([])
            })
        )
    }

    const handleReject = () => {
        setShowForm(false)
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

            <ModalWindow isOpen={showForm} setIsOpen={setShowForm}>
                <ModalModuleForm
                    isOpen={showForm}
                    setIsOpen={setShowForm}
                    onCreate={handleCreateModule}
                    onUpdate={handleUpdateModule}
                    onReject={handleReject}
                />
            </ModalWindow>
        </>
    )
}
