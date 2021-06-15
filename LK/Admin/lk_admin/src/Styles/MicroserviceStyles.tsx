import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useToolbarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(1),
        },
        highlight:
            theme.palette.type === 'light'
                ? {
                      color: 'black',
                      backgroundColor: '#ffd79f',
                  }
                : {
                      color: theme.palette.text.primary,
                      // backgroundColor: theme.palette.secondary.dark,
                      backgroundColor: '#ffd79f',
                  },
        title: {
            flex: '1 1 100%',
        },
    })
)

export const useTableStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
        },
        paper: {
            width: '100%',
            marginBottom: theme.spacing(2),
        },
        table: {
            minWidth: 750,
        },
        visuallyHidden: {
            border: 0,
            clip: 'rect(0 0 0 0)',
            height: 1,
            margin: -1,
            overflow: 'hidden',
            padding: 0,
            position: 'absolute',
            top: 20,
            width: 1,
        },
        linkTableCell: {
            cursor: 'pointer',
        },
        tableRowSelected: {
            backgroundColor: 'rgba(250, 183, 49, 0.28) !important',
        },
        tableCellCheckBoxSelected: {
            color: '#fab731 !important',
        },
    })
)

export const useNavBarStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: '#fab731',
            width: '100%',
            height: 40,
        },
        ul: {
            listStyle: 'none',
            textDecoration: 'none',
        },
        label: {
            fontFamily: 'Lato, Avenir, Arial',
            fontSize: 20,
            fontWeight: 900,
            textDecoration: 'none',
            color: 'black',
        },
    })
)

const drawerWidth = 240

export const useCommonStyles = makeStyles((theme: Theme) =>
    createStyles({
        wrapper: {
            paddingTop: 74,
            // display: 'flex',
            // justifyContent: 'center',
            // alignItems: 'center',
            // flexGrow: 1,
            // padding: theme.spacing(3),
        },
    })
)

export const useDrawerStyles = makeStyles((theme: Theme) =>
    createStyles({
        drawerHeight: {
            height: 'calc(100% - 64px)',
            top: 64,
        },
        root: {
            display: 'flex',
        },
        appBar: {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            backgroundColor: '#fab731',
            color: 'black',
        },
        appBarShift: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        },
        menuButton: {
            marginRight: theme.spacing(2),
            color: 'black',
        },
        blackButton: {
            color: 'black',
        },
        hide: {
            display: 'none',
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
            backgroundColor: '#fab731',
        },
        drawerHeader: {
            display: 'flex',
            alignItems: 'center',
            padding: theme.spacing(0, 1),
            // necessary for content to be below app bar
            ...theme.mixins.toolbar,
            justifyContent: 'flex-end',
        },
        content: {
            flexGrow: 1,
            padding: theme.spacing(3),
            paddingTop: 74,
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen,
            }),
            marginLeft: 0,
        },
        contentShift: {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        },
    })
)

export const useTransferListStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            margin: 'auto',
        },
        paper: {
            width: 300,
            height: 300,
            overflow: 'auto',
        },
        button: {
            margin: theme.spacing(0.5, 0),
        },
    })
)

export const useModalStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #000',
            boxShadow: theme.shadows[5],
            // padding: theme.spacing(2, 4, 3),
        },
    })
)
