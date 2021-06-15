// Microservice Config structure

import React from 'react'
import { useTableStyles } from '../Styles/MicroserviceStyles'
import { RouteComponentProps } from 'react-router-dom'

// type Order = "asc" | "desc";
export enum Order {
    Asc = 'asc',
    Desc = 'desc',
}

/*
    {
      path: "/1",
      label: "Удаленное приложение",
      url: "https://micromodule-f509c.web.app/remoteEntry.js",
      scope: "firstModule",
      module: "./App",
    }
*/

//-==== Поля сущности ====-
export interface IMSConfig {
    // path: string
    label: string
    url: string
    scope: string
    module: string
}

// Сущность Роль
export interface IMSConfigRole {
    roleId: number
    roleName: string
    roleTitle: string
}

export interface IRoleConfigs {
    roleId: number
    msConfigIds: string[]
}

//================================

//-==== Заголовки таблицы ====-
export interface IMSConfigHeadCell {
    disablePadding: boolean
    id: keyof IMSConfig
    label: string
    numeric: boolean
}

export interface IMSConfigRoleHeadCell {
    disablePadding: boolean
    id: keyof IMSConfigRole
    label: string
    numeric: boolean
}
//============================

//-==== Панель настроек  ====-
export interface IConfigTableToolbarProps {
    selected: string[]
    setSelected: (payload: any) => void
    title?: string
    addButtonTitle?: string
    onDelete?: (payload: any) => void
}

export interface IRoleTableToolbarProps {
    selected: number[]
    setSelected: (payload: any) => void
    title?: string
    addButtonTitle?: string
    onDelete?: (payload: any) => void
}
//============================

export interface IConfigTableHeadProps {
    classes: ReturnType<typeof useTableStyles>
    numSelected: number
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof IMSConfig
    ) => void
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    order: Order
    orderBy: string
    rowCount: number
    headCells: IMSConfigHeadCell[]
}

export interface IRoleTableHeadProps {
    classes: ReturnType<typeof useTableStyles>
    numSelected: number
    onRequestSort: (
        event: React.MouseEvent<unknown>,
        property: keyof IMSConfigRole
    ) => void
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
    order: Order
    orderBy: string
    rowCount: number
    headCells: IMSConfigRoleHeadCell[]
}

export interface IConfigTableProps {
    rows: IMSConfig[]
    heads: IMSConfigHeadCell[]
    order: Order
    onAdd?: (payload: any) => void
    onDelete?: (payload: any) => void
    isFetching: boolean
}

export interface IRoleTableProps {
    rows: IMSConfigRole[]
    heads: IMSConfigRoleHeadCell[]
    order: Order
    onAdd?: (payload: any) => void
    onDelete?: (payload: any) => void
}

export interface IRoute {
    title: string
    icon: JSX.Element
    path: string
    exact: boolean
    component: JSX.Element
}

export interface IPersistentDrawerLeft extends RouteComponentProps<any> {
    routes: IRoute[]
    navBarOpen: boolean
    setNavBarOpen: (value: boolean) => void
}

export interface IMSConfigTransferList {
    all: IMSConfig[]
    selected: IMSConfig[]
    onSelected: (selectedConfigs: IMSConfig[]) => void
}

export interface ITransitionsModal {
    roleId?: number
    roleName?: string
    roleTitle?: string
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}

export interface IConfigModalForm {
    onClose: (value?: IMSConfig | undefined) => void
}

export interface IRoleModalForm {
    roleId?: number
    roleName?: string
    roleTitle?: string
    onClose: (
        value?: IMSConfigRole | undefined,
        selectedConfigs?: number[]
    ) => void
}

export interface IMainPage {
    leftBarOpen?: boolean
    children?: JSX.Element
}
