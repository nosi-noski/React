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
} from '../../../Interfaces/MicroserviceInterfaces'

import RolesTableToolbar from './RolesTableToolbar'
import RolesTableHead from './RolesTableHead'
import { Order } from './../../../Interfaces/MicroserviceInterfaces'
import ModalWindow from './ModalWindow'

const RolesTable: FC<IRoleTableProps> = observer(({ rows, heads, order }) => {
    const classes = useTableStyles()
    // console.log('RolesTable rows', rows)
    const [tableRows, setTableRows] = React.useState(rows)
    const [rowsOrder, setRowsOrder] = React.useState<Order>(order)
    const [orderBy, setOrderBy] = React.useState<keyof IMSConfigRole>(
        'roleName'
    )
    const [selected, setSelected] = React.useState<string[]>([])
    const [showModal, setShowModal] = useState(false)
    // const [selectedRoleId, setSelectedRoleId] = useState<number| undefined>(undefined)
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
            const newSelected = tableRows.map((n) => n.roleName)
            setSelected(newSelected)
            return
        }
        setSelected([])
    }

    const onTableCellClick = (
        event: React.MouseEvent<unknown>,
        roleObj: IMSConfigRole
    ) => {
        // console.log('roleId', roleId)
        // setSelectedRoleId(roleId)
        setShowModal(true)
        setValues(roleObj)
    }
    const handleClick = (event: React.MouseEvent<unknown>, label: string) => {
        const selectedIndex = selected.indexOf(label)
        let newSelected: string[] = []

        switch (true) {
            case selectedIndex === -1:
                newSelected = newSelected.concat(selected, label)
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
    }

    const isSelected = (label: string) => selected.indexOf(label) !== -1

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <RolesTableToolbar
                    numSelected={selected.length}
                    addButtonTitle={'Добавить конфигурацию микросервиса'}
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
                            rowCount={tableRows.length}
                            headCells={heads}
                        />
                        <TableBody>
                            {stableSort(
                                tableRows,
                                getComparator(rowsOrder, orderBy)
                            ).map((row, index) => {
                                const isItemSelected = isSelected(row.roleName)
                                const labelId = `checkbox-${row.roleId}`
                                const key = row.roleId

                                return (
                                    <TableRow
                                        hover
                                        role="checkbox"
                                        aria-checked={isItemSelected}
                                        tabIndex={-1}
                                        key={key}
                                        selected={isItemSelected}
                                    >
                                        <TableCell
                                            padding="checkbox"
                                            onClick={(event) =>
                                                handleClick(event, row.roleName)
                                            }
                                        >
                                            <Checkbox
                                                checked={isItemSelected}
                                                inputProps={{
                                                    'aria-labelledby': labelId,
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell
                                            onClick={(event) => {
                                                onTableCellClick(event, {
                                                    roleId: row.roleId,
                                                    roleName: row.roleName,
                                                    roleTitle: row.roleTitle,
                                                })
                                            }}
                                            component="th"
                                            className={classes.linkTableCell}
                                            id={labelId}
                                            scope="row"
                                            padding="none"
                                        >
                                            <a href="#">{row.roleName}</a>
                                        </TableCell>
                                        <TableCell component="th" align="left">
                                            {' '}
                                            {row.roleTitle}{' '}
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
})

export default RolesTable
