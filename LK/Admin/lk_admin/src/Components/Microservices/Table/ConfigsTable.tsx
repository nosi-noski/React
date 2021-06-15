import React, { FC, useEffect } from 'react'
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
    IMSConfig,
    IConfigTableProps,
} from '../../../Interfaces/MicroserviceInterfaces'
import ConfigsTableToolbar from './ConfigsTableToolbar'
import ConfigsTableHead from './ConfigsTableHead'
import { Order } from '../../../Interfaces/MicroserviceInterfaces'

const ConfigsTable: FC<IConfigTableProps> = observer(
    ({ rows, heads, order, onAdd, onDelete, isFetching }) => {
        const classes = useTableStyles()
        const [rowsOrder, setRowsOrder] = React.useState<Order>(order)
        const [orderBy, setOrderBy] = React.useState<keyof IMSConfig>('label')
        const [selected, setSelected] = React.useState<string[]>([])

        useEffect(() => {}, [rows])

        const handleRequestSort = (
            event: React.MouseEvent<unknown>,
            property: keyof IMSConfig
        ) => {
            const isAsc = orderBy === property && rowsOrder === Order.Asc
            setRowsOrder(isAsc ? Order.Desc : Order.Asc)
            setOrderBy(property)
        }

        const handleSelectAllClick = (
            event: React.ChangeEvent<HTMLInputElement>
        ) => {
            if (event.target.checked) {
                const newSelected = rows.map((n) => n.scope)
                setSelected(newSelected)
                return
            }
            setSelected([])
        }

        const handleClick = (
            event: React.MouseEvent<unknown>,
            scope: string
        ) => {
            const selectedIndex = selected.indexOf(scope)
            let newSelected: string[] = []

            switch (true) {
                case selectedIndex === -1:
                    newSelected = newSelected.concat(selected, scope)
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

        const isSelected = (scope: string) => selected.indexOf(scope) !== -1

        return (
            <div className={classes.root}>
                <Paper className={classes.paper}>
                    <ConfigsTableToolbar
                        selected={selected}
                        setSelected={setSelected}
                        onDelete={onDelete}
                        addButtonTitle={'Добавить конфигурацию микросервиса'}
                    />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-labelledby="tableTitle"
                            size={'medium'}
                            aria-label="enhanced table"
                        >
                            <ConfigsTableHead
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
                                ).map((row) => {
                                    const isItemSelected = isSelected(row.scope)
                                    const labelId = `checkbox-${row.scope}`
                                    const key = row.scope

                                    return (
                                        <TableRow
                                            hover
                                            onClick={(event) =>
                                                handleClick(event, row.scope)
                                            }
                                            role="checkbox"
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={key}
                                            selected={isItemSelected}
                                        >
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    checked={isItemSelected}
                                                    inputProps={{
                                                        'aria-labelledby': labelId,
                                                    }}
                                                />
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                align="left"
                                                id={labelId}
                                            >
                                                {row.label}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                align="left"
                                            >
                                                {row.url}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                align="left"
                                            >
                                                {row.scope}
                                            </TableCell>
                                            <TableCell
                                                component="th"
                                                align="left"
                                            >
                                                {row.module}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </div>
        )
    }
)

export default ConfigsTable
