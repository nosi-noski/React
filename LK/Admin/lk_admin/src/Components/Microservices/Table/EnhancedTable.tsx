import React, { FC } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

import { useStyles } from "../../../Styles/MicroserviceStyles";
import { getComparator, stableSort } from "../../../Common/CommonFunctions";

import {
  IMSConfig,
  IEnhancedTableProps,
} from "../../../Interfaces/MicroserviceInterfaces";
import EnhancedTableToolbar from "./EnhancedTableToolbar";
import EnhancedTableHead from "./EnhancedTableHead";
import { Order } from "./../../../Interfaces/MicroserviceInterfaces";

const EnhancedTable: FC<IEnhancedTableProps> = (props) => {
  const { rows, heads, order } = props;
  const classes = useStyles();
  const [rowsOrder, setRowsOrder] = React.useState<Order>(order);
  const [orderBy, setOrderBy] = React.useState<keyof IMSConfig>("label");
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof IMSConfig
  ) => {
    const isAsc = orderBy === property && rowsOrder === Order.asc;
    setRowsOrder(isAsc ? Order.desc : Order.asc);
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.label);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, label: string) => {
    const selectedIndex = selected.indexOf(label);
    let newSelected: string[] = [];

    switch (true) {
      case selectedIndex === -1:
        newSelected = newSelected.concat(selected, label);
        break;
      case selectedIndex === 0:
        newSelected = newSelected.concat(selected.slice(1));
        break;
      case selectedIndex === selected.length - 1:
        newSelected = newSelected.concat(selected.slice(0, -1));
        break;
      case selectedIndex > 0:
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
        break;
    }

    setSelected(newSelected);
  };

  const isSelected = (label: string) => selected.indexOf(label) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={"medium"}
            aria-label="enhanced table"
          >
            <EnhancedTableHead
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
              {stableSort(rows, getComparator(rowsOrder, orderBy)).map(
                (row, index) => {
                  const isItemSelected = isSelected(row.label);
                  const labelId = `enhanced-table-checkbox-${index}`;
                  const key = `${row.label} - ${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.label)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={key}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </TableCell>
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.path}
                      </TableCell>
                      <TableCell component="th" align="left">
                        {row.label}
                      </TableCell>
                      <TableCell component="th" align="left">
                        {row.url}
                      </TableCell>
                      <TableCell component="th" align="left">
                        {row.scope}
                      </TableCell>
                      <TableCell component="th" align="left">
                        {row.module}
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default EnhancedTable;
