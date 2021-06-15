import React from 'react'
import ModulesViewModel, {
    IModulesViewModel,
} from './../ViewModules/ModulesViewModel'
import DBConnector from '../Store/DBconnector'
import ModulesAPIClient from '../APIClient/ModulesAPIClient'

// TODO : вынести
const firebaseConfig = {
    apiKey: 'AIzaSyD089ppbNiam6huc6qJSdxAbJae3lMtNok',
    authDomain: 'admin-panel-d8073.firebaseapp.com',
    databaseURL:
        'https://admin-panel-d8073-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'admin-panel-d8073',
    storageBucket: 'admin-panel-d8073.appspot.com',
    messagingSenderId: '127899554524',
    appId: '1:127899554524:web:e4297414f2e90a45c19a19',
    measurementId: 'G-S016E21724',
}

const DBC = new DBConnector(firebaseConfig)
// DBC.getData('modules').then( (data) => { console.log( data) })

const ModulesAPI = new ModulesAPIClient(DBC)

export const ModulesContext = React.createContext<IModulesViewModel>(
    new ModulesViewModel(ModulesAPI) || {}
)
