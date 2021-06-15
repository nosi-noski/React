import firebase from 'firebase'

export interface IDBConnector {
    getData: (ref: string) => Promise<any>
    postData: (ref: string, payload: any) => void
}

class DBConnector implements IDBConnector {
    private database

    constructor(config: any) {
        firebase.initializeApp(config)
        this.database = firebase.database()
    }

    getData = async (ref: string) => {
        let data

        await this.database.ref(ref).once('value', (snapshot) => {
            data = snapshot.val()
        })

        return data
    }

    postData = async (ref: string, payload: any) => {
        await this.database.ref(ref).set(payload)
    }
}

export default DBConnector
