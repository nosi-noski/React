// Microservice Config structure

import React from "react";
import { useStyles } from "../Styles/MicroserviceStyles";
import { RouteComponentProps } from "react-router-dom";

type Order = "asc" | "desc";

/*
{
  path: "/1",
  label: "Удаленное приложение",
  url: "https://micromodule-f509c.web.app/remoteEntry.js",
  scope: "firstModule",
  module: "./App",
}
* */

export interface IMSConfig {
  path: string;
  label: string;
  url: string;
  scope: string;
  module: string;
}

export interface IHeadCell {
  disablePadding: boolean;
  id: keyof IMSConfig;
  label: string;
  numeric: boolean;
}

export interface ITableToolbarProps {
  numSelected: number;
  title?: string;
}

export interface ITableProps {
  classes: ReturnType<typeof useStyles>;
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof IMSConfig
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
  headCells: IHeadCell[];
}

export interface IEnhancedTableProps {
  rows: IMSConfig[];
  heads: IHeadCell[];
  pagination?: number[];
}
export interface IRoute {
  title: string;
  icon: JSX.Element;
  path: string;
  exact: boolean;
  component: JSX.Element;
}

export interface IPersistentDrawerLeft extends RouteComponentProps<any> {
  routes: IRoute[];
}
