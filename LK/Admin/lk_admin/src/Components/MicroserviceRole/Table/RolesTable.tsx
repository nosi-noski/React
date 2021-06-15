import React, { FC, useEffect, useState } from 'react'
import Table from '@material-ui/core/Table'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import Checkbox from '@material-ui/core/Checkbox'

import { useTableStyles } from '../../../Styles/MicroserviceStyles'
import { getComparator, stableSort } from '../../../Common/CommonFunctions'
import { observer } from 'mobx-react'

import {
    IMSConfigRole,
    IRoleTableProps,
    Order,
} from '../../../Interfaces/MicroserviceInterfaces'

import RolesTableToolbar from './RolesTableToolbar'
import RolesTableHead from './RolesTableHead'

import ModalWindow from './ModalWindow'
import clsx from 'clsx'

const RolesTable: FC<IRoleTableProps> = observer(
    ({ rows, heads, order, onAdd, onDelete }) => {
        const classes = useTableStyles()
        const [rowsOrder, setRowsOrder] = React.useState<Order>(order)
        const [orderBy, setOrderBy] = React.useState<keyof IMSConfigRole>(
            'roleName'
        )
        const [selected, setSelected] = React.useState<number[]>([])
        const [showModal, setShowModal] = useState(false)
        const [values, setValues] = React.useState<IMSConfigRole>({
            roleId: 0,
            roleName: '',
            roleTitle: '',
        })

        useEffect(() => {}, [rows, showModal])

        const handleRequestSort = (
            event: React.MouseEvent<unknown>,
            property: keyof IMSConfigRole
        ) => {
            const isAsc = orderBy === property && rowsOrder === Order.Asc
            setRowsOrder(isAsc ? Order.Desc : Order.Asc)
            setOrderBy(property)
        }

        const handleSelectAllClick = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            if (event.target.checked) {
                const newSelected = rows.map((n) => n.roleId)
                setSelected(newSelected)
                return
            }
            setSelected([])
        }

        const onTableCellClick = (
            event: React.MouseEvent<unknown>,
            roleObj: IMSConfigRole
        ) => {
            setShowModal(true)
            setValues(roleObj)
        }
        const handleClick = (event: React.MouseEvent, id: number) => {
            event.stopPropagation()
            const selectedIndex = selected.indexOf(id)
            let newSelected: number[] = []

            switch (true) {
                case selectedIndex === -1:
                    newSelected = newSelected.concat(selected, id)
                    break
                case selectedIndex === 0:
                    newSelected = newSelected.concat(selected.slice(1))
                    break
                case selectedIndex === selected.length - 1:
                    newSelected = newSelected.concat(selected.slice(0, -1))
                    break
                case selectedIndex > 0:
                    newSelected = newSelected.concat(
                        selected.slice(0, selectedIndex),
                        selected.slice(selectedIndex + 1)
                    )
                    break
            }

            setSelected(newSelected)
            console.log('newSelected', newSelected)
        }

        const isSelected = (id: number) => selected.indexOf(id) !== -1

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <RolesTableToolbar
                        selected={selected}
                        setSelected={setSelected}
                        addButtonTitle={'Добавить роль'}
                        onDelete={onDelete}
                    />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                            aria-label="enhanced table"
                        >
                            <RolesTableHead
                                classes={classes}
                                numSelected={selected.length}
                                order={rowsOrder}
                                orderBy={orderBy}
                                onSelectAllClick={handleSelectAllClick}
                                onRequestSort={handleRequestSort}
                                rowCount={rows.length}
                                headCells={heads}
                            />
                            <TableBody>
                                {stableSort(
                                    rows,
                                    getComparator(rowsOrder, orderBy)
                                ).map((row, index) => {
                                    const isItemSelected = isSelected(
                                        row.roleId
                                    )
                                    const labelId = `checkbox-${row.roleId}`
                                    const key = row.roleId

                                    return (
                                        <TableRow
                                            className={clsx({
                                                [classes.tableRowSelected]: isItemSelected,
                                            })}
                                            hover
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={key}
                                            selected={isItemSelected}
                                            onClick={(event) => {
                                                onTableCellClick(event, {
                                                    roleId: row.roleId,
                                                    roleName: row.roleName,
                                                    roleTitle: row.roleTitle,
                                                })
                                            }}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    onClick={(event) =>
                                                        handleClick(
                                                            event,
                                                            row.roleId
                                                        )
                                                    }
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                className={
                                                    classes.linkTableCell
                                                }
                                                id={labelId}
                                                scope="row"
                                                padding="none"
                                            >
                                                {row.roleTitle}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                align="left"
                                            >
                                                {row.roleName}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
                <ModalWindow
                    roleId={values.roleId}
                    roleName={values.roleName}
                    roleTitle={values.roleTitle}
                    isOpen={showModal}
                    setIsOpen={setShowModal}
                />
            </div>
        )
    }
)

export default RolesTable
