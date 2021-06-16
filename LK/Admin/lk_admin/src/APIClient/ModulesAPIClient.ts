import { IDBConnector } from '../Store/DBconnector'
import { IMSConfig } from './../Interfaces/MicroserviceInterfaces'

export interface IModulesAPIClient {
    getAll: () => Promise<IMSConfig[]>
    createModule: (payload: IMSConfig) => void
    updateModule: (payload: IMSConfig) => void
}

class ModulesAPIClient implements IModulesAPIClient {
    constructor(protected DBConnector: IDBConnector) {}

    getAll = async () =>
        Object.values(
            (await this.DBConnector.getData('modules')) as IMSConfig[]
        )

    createModule = (payload: IMSConfig) => {
        let preparedRef = `modules/` + payload.scope
        this.DBConnector.postData(preparedRef, payload)
    }

    updateModule = (payload: IMSConfig) => {
        let preparedRef = `modules/` + payload.scope
        this.DBConnector.putData(preparedRef, payload)
    }
}

export default ModulesAPIClient
