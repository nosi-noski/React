import React, { FC, useContext, useEffect, useState } from 'react'
import {
    Paper,
    Table,
    TableContainer,
    TableBody,
    TableRow,
    TableCell,
    Checkbox,
} from '@material-ui/core'
import { TableLoader } from './../../Common/TableLoader'
import { TitleListIsEmpty } from './../../Common/TitleListIsEmpty'
import { ModulesContext } from './../../../Context/ModulesContext'
import { useTableStyles } from '../../../Styles/MicroserviceStyles'
import { getComparator, stableSort } from '../../../Common/CommonFunctions'
import { observer } from 'mobx-react'

import {
    IMSConfig,
    IConfigTableProps,
} from '../../../Interfaces/MicroserviceInterfaces'
import { ConfigsTableToolbar } from './ConfigsTableToolbar'
import { ConfigsTableHead } from './ConfigsTableHead'
import { Order } from '../../../Interfaces/MicroserviceInterfaces'
import clsx from 'clsx'

export const ConfigTable: FC<IConfigTableProps> = observer(
    ({
        rows,
        heads,
        order,
        onAdd,
        onEdit,
        onDelete,
        isFetching,
        emptyListTitle,
    }) => {
        const classes = useTableStyles()
        const { setModuleItem } = useContext(ModulesContext)
        const [rowsOrder, setRowsOrder] = React.useState<Order>(order)
        const [orderBy, setOrderBy] = React.useState<keyof IMSConfig>('label')
        const [selected, setSelected] = React.useState<string[]>([])
        const [showForm, setShowForm] = useState(false)

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

        const rowHandleClick = (
            event: React.MouseEvent<unknown>,
            payload: IMSConfig
        ) => {
            setModuleItem(payload)
            setShowForm(true)
        }

        const checkboxHandleClick = (
            event: React.MouseEvent<unknown>,
            scope: string
        ) => {
            event.stopPropagation()

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
                        showForm={showForm}
                        setShowForm={setShowForm}
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
                                {!isFetching &&
                                    stableSort(
                                        rows,
                                        getComparator(rowsOrder, orderBy)
                                    ).map((row) => {
                                        const isItemSelected = isSelected(
                                            row.scope
                                        )
                                        const labelId = `checkbox-${row.scope}`
                                        const key = row.scope

                                        return (
                                            <TableRow
                                                hover
                                                onClick={(event) =>
                                                    rowHandleClick(event, row)
                                                }
                                                role="checkbox"
                                                aria-checked={isItemSelected}
                                                tabIndex={-1}
                                                key={key}
                                                selected={isItemSelected}
                                                className={clsx({
                                                    [classes.tableRowSelected]: isItemSelected,
                                                })}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        className={
                                                            classes.tableCellCheckBox
                                                        }
                                                        checked={isItemSelected}
                                                        inputProps={{
                                                            'aria-labelledby': labelId,
                                                        }}
                                                        onClick={(event) =>
                                                            checkboxHandleClick(
                                                                event,
                                                                row.scope
                                                            )
                                                        }
                                                    />
                                                </TableCell>
                                                {Object.keys(row).map((key) => {
                                                    if (
                                                        !!heads.find(
                                                            (head) =>
                                                                head.id === key
                                                        )
                                                    ) {
                                                        return (
                                                            <TableCell
                                                                key={key}
                                                                component="th"
                                                                align="left"
                                                            >
                                                                {
                                                                    row[
                                                                        key as keyof IMSConfig
                                                                    ]
                                                                }
                                                            </TableCell>
                                                        )
                                                    }
                                                })}
                                            </TableRow>
                                        )
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    {isFetching && <TableLoader />}
                    {!isFetching && rows?.length === 0 && (
                        <TitleListIsEmpty title={emptyListTitle} />
                    )}
                </Paper>
            </div>
        )
    }
)
