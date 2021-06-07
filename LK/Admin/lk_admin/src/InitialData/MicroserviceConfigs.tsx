import React from "react";
import { IHeadCell } from "../Interfaces/MicroserviceInterfaces";
import HomeIcon from "@material-ui/icons/Home";
import BallotIcon from "@material-ui/icons/Ballot";
import Home from "../Components/Home";
import MSPage from "../Components/Microservices/MSPage";

export const routes = [
  {
    title: "Домашняя",
    path: "/",
    icon: <HomeIcon />,
    exact: true,
    component: <Home />,
  },
  {
    title: "Конфиг микросервисов",
    path: "/msconfigs",
    icon: <BallotIcon />,
    exact: false,
    component: <MSPage />,
  },
];

/*
{
  path: "/1",
  label: "Удаленное приложение",
  url: "https://micromodule-f509c.web.app/remoteEntry.js",
  scope: "firstModule",
  module: "./App",
}
* */

export const MSCHeads: IHeadCell[] = [
  { id: "path", numeric: false, disablePadding: true, label: "Путь" },
  { id: "label", numeric: false, disablePadding: false, label: "Название" },
  { id: "url", numeric: false, disablePadding: false, label: "Ссылка" },
  { id: "scope", numeric: false, disablePadding: false, label: "Область" },
  { id: "module", numeric: false, disablePadding: false, label: "Модуль" },
];

export const MSCRows = [
  {
    path: "/1",
    label: "Удаленное приложение",
    url: "https://micromodule-f509c.web.app/remoteEntry.js",
    scope: "firstModule",
    module: "./App",
  },
  {
    path: "/2",
    label: "Удаленное приложение",
    url: "https://micromodule-f509c.web.app/remoteEntry.js",
    scope: "secondModule",
    module: "./News",
  },
  {
    path: "/3",
    label: "Удаленное приложение",
    url: "https://micromodule-f509c.web.app/remoteEntry.js",
    scope: "thirdModule",
    module: "./Articles",
  },
  {
    path: "/4",
    label: "Удаленное приложение",
    url: "https://micromodule-f509c.web.app/remoteEntry.js",
    scope: "fourthModule",
    module: "./Configs",
  },
];
