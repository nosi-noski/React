import React, { FC, useState } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'

import PersistentDrawerLeft from './Components/PersistentDrawerLeft'

import HomeIcon from '@material-ui/icons/Home'
import HomePage from './Components/HomePage'
import BallotIcon from '@material-ui/icons/Ballot'
import MSPage from './Components/Microservices/MSPage'
import RolesPage from './Components/MicroserviceRole/RolesPage'

const App: FC = () => {
    const [navBarOpen, setNavBarOpen] = useState(false)
    const routes = [
        {
            title: 'Домашняя страница',
            path: '/',
            icon: <HomeIcon />,
            exact: true,
            component: <HomePage navBarOpen={navBarOpen} />,
        },
        {
            title: 'Конфигурации микросервисов',
            path: '/msconfigs',
            icon: <BallotIcon />,
            exact: false,
            component: <MSPage navBarOpen={navBarOpen} />,
        },
        {
            title: 'Роли',
            path: '/roles',
            icon: <BallotIcon />,
            exact: false,
            component: <RolesPage navBarOpen={navBarOpen} />,
        },
    ]
    return (
        <BrowserRouter>
            <PersistentDrawerLeft
                routes={routes}
                navBarOpen={navBarOpen}
                setNavBarOpen={setNavBarOpen}
            />
            {routes.map((route, index) => {
                return (
                    <Route key={index} exact={route.exact} path={route.path}>
                        {route.component}
                    </Route>
                )
            })}
        </BrowserRouter>
    )
}

export default App
