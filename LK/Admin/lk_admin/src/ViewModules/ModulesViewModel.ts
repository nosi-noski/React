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
    setModuleItem: (payload: IMSConfig) => void
}

class ModulesViewModel implements IModulesViewModel {
    list: IMSConfig[]
    isFetching: boolean
    moduleItem?: IMSConfig

    constructor(protected APIClient: IModulesAPIClient) {
        makeAutoObservable(this)

        this.list = []
        this.isFetching = false
        this.moduleItem = undefined
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

    setModuleItem = (payload: IMSConfig) => {
        this.moduleItem = payload
    }
}

export default ModulesViewModel
