import { IModulesAPIClient } from './../APIClient/ModulesAPIClient'
import { IMSConfig } from './../Interfaces/MicroserviceInterfaces'
import { makeAutoObservable } from 'mobx'

export interface IModulesViewModel {
    getAllModules: () => void
    isFetching: boolean
    list: IMSConfig[]
}

class ModulesViewModel implements IModulesViewModel {
    list: IMSConfig[]
    isFetching: boolean

    constructor(protected APIClient: IModulesAPIClient) {
        makeAutoObservable(this)

        this.list = []
        this.isFetching = false
    }

    getAllModules = async () => {
        this.isFetching = true
        this.list = await this.APIClient.getAll()
        this.isFetching = false
    }
}

export default ModulesViewModel
