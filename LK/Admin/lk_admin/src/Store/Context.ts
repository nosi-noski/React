import React from 'react'
import store, { IStore } from './store'

const StoreContext = React.createContext<IStore>(store || {})
export default StoreContext
