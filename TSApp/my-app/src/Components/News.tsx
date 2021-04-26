import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardComponent } from "./CardComponent";
import { NavBar } from "./NavBar";

const useStyles = makeStyles({
  wrapper: {
    backgroundColor: "rgba(225, 225, 225, 0.54)",
    margin: "auto",
    padding: "20px",
  },

  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "850px",
    // width: 'max-content',
    margin: "auto",
    // height: "max-content"
  },
});

const cards = [
  {
    header: "Microfrontends",
    title: "Webpack config",
    bottomTitle: "Set up plugin",
    text: `Create a Webpack.config.js on the root and put the following inside it`,
    link: `https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71`,
    bcgColor: "cardWhiteColor",
  },
  {
    header: "Microfrontends",
    title: "Webpack config",
    bottomTitle: "Set up plugin",
    text: `Create a Webpack.config.js on the root and put the following inside it`,
    link: `https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71`,
    bcgColor: "cardGreenColor",
  },
  {
    header: "Microfrontends",
    title: "Webpack config",
    bottomTitle: "Set up plugin",
    text: `Create a Webpack.config.js on the root and put the following inside it`,
    link: `https://levelup.gitconnected.com/micro-frontends-step-by-step-using-react-webpack-5-and-module-federation-e4b9d840ec71`,
    bcgColor: "cardGreenColor",
  },

  {
    header: "Microfrontends",
    title: "Module Federation",
    bottomTitle: "New features in Webpack 5",
    text: `Concept goals`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardRedColor",
  },
  {
    header: "Microfrontends",
    title: "Module Federation",
    bottomTitle: "New features in Webpack 5",
    text: `Concept goals`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardRedColor",
  },
  {
    header: "Microfrontends",
    title: "Module Federation",
    bottomTitle: "New features in Webpack 5",
    text: `Concept goals`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardRedColor",
  },

  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardGrayColor",
  },
  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardGrayColor",
  },
  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardGrayColor",
  },

  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardBrownColor",
  },
  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardBrownColor",
  },
  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardBrownColor",
  },

  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardRedColor",
  },
  {
    header: "Microfrontends",
    title: "Troubleshooting",
    bottomTitle: "errors",
    text: `How to solve typical errors.`,
    link: `https://webpack.js.org/concepts/module-federation/#modulefederationplugin-high-level`,
    bcgColor: "cardRedColor",
  },
];

export function News() {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <NavBar />
      {/*<h4>News</h4>*/}
      <div className={classes.container}>
        {cards.map((item, index) => {
          return <CardComponent key={index} {...item} />;
        })}
        {/*<CardComponent {...cards.first}/>*/}
        {/*<CardComponent {...cards.second}/>*/}
        {/*<CardComponent {...cards.third}/>*/}
      </div>
    </div>
  );
}
