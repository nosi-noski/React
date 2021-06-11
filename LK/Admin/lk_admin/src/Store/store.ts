import { makeAutoObservable } from 'mobx'
import {
    IMSConfigHeadCell,
    IMSConfigRoleHeadCell,
    IMSConfig,
    IRoleConfigs,
    IMSConfigRole,
} from '../Interfaces/MicroserviceInterfaces'

export interface IStore {
    MSCTableHeads: IMSConfigHeadCell[]
    MSCRoleTableHeads: IMSConfigRoleHeadCell[]
    MSConfigs: IMSConfig[]
    Roles: IMSConfigRole[]
    RoleConfigs: IRoleConfigs[]
    getNewMSConfigId: any
    getNewRoleId: any
    getSelectedConfigs: any
    addMSConfig: any
    addRole: any
    addRoleConfigs: any
}

class Store implements IStore {
    constructor() {
        makeAutoObservable(this)
    }

    MSCTableHeads: IMSConfigHeadCell[] = [
        {
            id: 'label',
            numeric: false,
            disablePadding: true,
            label: 'Название',
        },
        { id: 'path', numeric: false, disablePadding: false, label: 'Путь' },
        { id: 'url', numeric: false, disablePadding: false, label: 'Ссылка' },
        {
            id: 'scope',
            numeric: false,
            disablePadding: false,
            label: 'Область',
        },
        {
            id: 'module',
            numeric: false,
            disablePadding: false,
            label: 'Модуль',
        },
    ]

    MSCRoleTableHeads: IMSConfigRoleHeadCell[] = [
        {
            id: 'roleName',
            numeric: false,
            disablePadding: true,
            label: 'Идентификатор',
        },
        {
            id: 'roleTitle',
            numeric: false,
            disablePadding: false,
            label: 'Название роли',
        },
    ]

    MSConfigs: IMSConfig[] = [
        {
            id: 1,
            path: '/1',
            label: 'Удаленное приложение1',
            url: 'https://micromodule-f509c.web.app/remoteEntry.js',
            scope: 'firstModule',
            module: './App',
        },
        {
            id: 2,
            path: '/2',
            label: 'Удаленное приложение2',
            url: 'https://micromodule-f5ac.web.app/remoteEntry.js',
            scope: 'secondModule',
            module: './News',
        },
        {
            id: 3,
            path: '/3',
            label: 'Удаленное приложение3',
            url: 'https://micromodule-f5bc.web.app/remoteEntry.js',
            scope: 'thirdModule',
            module: './Articles',
        },
        {
            id: 4,
            path: '/4',
            label: 'Удаленное приложение4',
            url: 'https://micromodule-f5cc.web.app/remoteEntry.js',
            scope: 'fourthModule',
            module: './Configs',
        },
    ]

    Roles: IMSConfigRole[] = [
        { roleId: 1, roleName: 'Role 1', roleTitle: 'Роль 1' },
        { roleId: 2, roleName: 'Role 2', roleTitle: 'Роль 2' },
        { roleId: 3, roleName: 'Role 3', roleTitle: 'Роль 3' },
        { roleId: 4, roleName: 'Role 4', roleTitle: 'Роль 4' },
    ]

    RoleConfigs: IRoleConfigs[] = [
        { roleId: 1, msConfigIds: [1, 2] },
        { roleId: 2, msConfigIds: [4] },
    ]

    getNewMSConfigId = () => {
        let length = this.MSConfigs.length
        return length > 0 ? this.MSConfigs[length - 1].id + 1 : 1
    }

    getNewRoleId = () => {
        let length = this.Roles.length

        return length > 0 ? this.Roles[length - 1].roleId + 1 : 1
    }

    getSelectedConfigs = (roleId?: number) => {
        if (!roleId) return []

        let roleConfig = this.RoleConfigs.find((config) => {
            return config.roleId === roleId
        })

        if (!roleConfig) return []

        return this.MSConfigs.filter((config) => {
            return roleConfig?.msConfigIds.find((msConfigId) => {
                return msConfigId === config.id
            })
        })
    }

    addMSConfig = (value: IMSConfig) => {
        let newId = this.getNewMSConfigId()
        let newMSConfig = {
            ...value,
            id: newId,
        }
        this.MSConfigs.push(newMSConfig)
    }

    addRole = (value: IMSConfigRole, configs: number[]) => {
        if (value && value.roleId) {
            let roleIndex = this.Roles.findIndex(
                (role) => role.roleId === value.roleId
            )
            this.Roles[roleIndex] = { ...value }

            let roleConfigIndex = this.RoleConfigs.findIndex(
                (role) => role.roleId === value.roleId
            )

            if (roleConfigIndex !== -1) {
                this.RoleConfigs[roleConfigIndex].msConfigIds = [...configs]
            } else {
                this.RoleConfigs.push({
                    roleId: value.roleId,
                    msConfigIds: [...configs],
                })
            }

            // this.RoleConfigs.map( (roleConfig) => {
            // if(roleConfig.roleId === value.roleId) {
            //
            //     roleConfig.msConfigIds = [...configs]
            // }
            // })
        } else if (value && !value.roleId) {
            let newId = this.getNewRoleId()
            let newRole = {
                ...value,
                roleId: newId,
            }
            this.Roles.push(newRole)
            this.RoleConfigs.push({ roleId: newId, msConfigIds: configs })
        }
        //console.log( 'this.Roles: ' , this.Roles , ', this.RoleConfigs: ', this.RoleConfigs)
    }

    addRoleConfigs = (value: IMSConfig) => {
        let newId = this.getNewMSConfigId()
        let newMSConfig = {
            ...value,
            id: newId,
        }
        this.MSConfigs.push(newMSConfig)
    }
}

export default new Store()
