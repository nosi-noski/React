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
    // MSConfigs: IMSConfig[]
    Roles: IMSConfigRole[]
    RoleConfigs: IRoleConfigs[]

    getNewRoleId: any
    getSelectedConfigs: any
    addMSConfig: any
    addRole: any
    deleteMSConfig: any
    deleteRole: any
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
            disablePadding: false,
            label: 'Название',
        },
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
            id: 'roleTitle',
            numeric: false,
            disablePadding: false,
            label: 'Название роли',
        },
        {
            id: 'roleName',
            numeric: false,
            disablePadding: false,
            label: 'Идентификатор',
        },
    ]

    Roles: IMSConfigRole[] = [
        { roleId: 1, roleName: 'Role 1', roleTitle: 'Роль 1' },
        { roleId: 2, roleName: 'Role 2', roleTitle: 'Роль 2' },
        { roleId: 3, roleName: 'Role 3', roleTitle: 'Роль 3' },
        { roleId: 4, roleName: 'Role 4', roleTitle: 'Роль 4' },
    ]

    RoleConfigs: IRoleConfigs[] = [
        { roleId: 1, msConfigIds: ['eighthModule', 'tenthModule'] },
        { roleId: 2, msConfigIds: ['seventhModule'] },
    ]

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

        // return this.MSConfigs.filter((config) => {
        //     return roleConfig?.msConfigIds.find((msConfigId) => {
        //         return msConfigId === config.scope
        //     })
        // })
    }

    addMSConfig = (value: IMSConfig) => {
        // let newId = this.getNewMSConfigId()
        // let newMSConfig = {
        //     ...value
        // }
        // this.MSConfigs.push({ ...value })
    }

    deleteMSConfig = (payload: string[]) => {
        // if (Array.isArray(payload) && payload.length > 0) {
        //     this.MSConfigs = this.MSConfigs.filter((config: IMSConfig) => {
        //         return !payload.find((scope) => config.scope === scope)
        //     })
        // }
    }

    deleteRole = (payload: number[]) => {
        if (Array.isArray(payload) && payload.length > 0) {
            this.Roles = this.Roles.filter((config: IMSConfigRole) => {
                return !payload.find((roleId) => config.roleId === roleId)
            })

            this.RoleConfigs = this.RoleConfigs.filter(
                (roleConfig: IRoleConfigs) => {
                    return !payload.find(
                        (roleId) => roleConfig.roleId === roleId
                    )
                }
            )
        }
    }

    addRole = (value: IMSConfigRole, configs: string[]) => {
        if (value && value.roleId) {
            // Отдельно дабляем в this.Roles
            let roleIndex = this.Roles.findIndex(
                (role) => role.roleId === value.roleId
            )
            this.Roles[roleIndex] = { ...value }

            // Отдельно дабляем в this.RoleConfigs (связь один ко многим)
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
        // let newId = this.getNewMSConfigId()
        let newMSConfig = {
            ...value,
            // id: newId,
        }
        // this.MSConfigs.push(newMSConfig)
    }
}

export default new Store()
