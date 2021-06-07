import React, { FC } from "react";
import clsx from "clsx";
import { withRouter } from "react-router-dom";

import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { IPersistentDrawerLeft } from "../Interfaces/MicroserviceInterfaces";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import { useDrawerStyles } from "../Styles/MicroserviceStyles";

const PersistentDrawerLeft: FC<IPersistentDrawerLeft> = (props) => {
  const { history, routes } = props;
  const classes = useDrawerStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/*Persistent drawer*/}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className={classes.blackButton} />
            ) : (
              <ChevronRightIcon className={classes.blackButton} />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {routes.map((route) => {
            const { title, icon, path } = route;
            const onClickHandler = () => {
              history.push(path);
            };

            return (
              <ListItem button key={title} onClick={onClickHandler}>
                <ListItemIcon className={classes.blackButton}>
                  {icon}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItem>
            );
          })}
        </List>
        <Divider />
      </Drawer>
    </div>
  );
};

export default withRouter(PersistentDrawerLeft);
