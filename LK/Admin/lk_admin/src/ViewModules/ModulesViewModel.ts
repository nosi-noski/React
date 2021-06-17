import { IModulesAPIClient } from './../APIClient/ModulesAPIClient'
import { IMSConfig } from './../Interfaces/MicroserviceInterfaces'
import { makeAutoObservable } from 'mobx'

export interface IModulesViewModel {
    getAllModules: () => void
    isFetching: boolean
    list: IMSConfig[]
    createModule: (payload: IMSConfig) => Promise<void>
    updateModule: (payload: IMSConfig) => Promise<void>
    moduleItem?: IMSConfig
    moduleScopes: string[]
    setModuleItem: (payload?: IMSConfig) => void
    removeModule: (payload: string) => Promise<void>
    removeModules: (id: string[]) => Promise<void>
    existedModuleScopes: string[]
}

class ModulesViewModel implements IModulesViewModel {
    list: IMSConfig[]
    isFetching: boolean
    moduleItem?: IMSConfig
    moduleScopes: string[]

    constructor(protected APIClient: IModulesAPIClient) {
        makeAutoObservable(this)

        this.list = []
        this.isFetching = false
        this.moduleItem = undefined
        this.moduleScopes = []
    }

    getAllModules = async () => {
        this.isFetching = true
        this.list = await this.APIClient.getAll()
        this.isFetching = false
    }

    createModule = async (payload: IMSConfig) => {
        this.isFetching = true
        await this.APIClient.createModule(payload)
        this.isFetching = false
    }

    updateModule = async (payload: IMSConfig) => {
        this.isFetching = true
        await this.APIClient.createModule(payload)
        this.isFetching = false
    }

    setModuleItem = (payload?: IMSConfig) => {
        this.moduleItem = payload
    }

    get existedModuleScopes() {
        return this.list.map((config) => config.scope)
    }

    removeModule = async (id: string) => {
        this.isFetching = true
        await this.APIClient.removeModule(id)
        this.isFetching = false
    }

    removeModules = async (ids: string[]) => {
        this.isFetching = true
        let promises = ids.map((id) => {
            return this.removeModule(id)
        })
        await Promise.all(promises)
        this.isFetching = false
    }
}

export default ModulesViewModel
