import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import {
    useCommonStyles,
    useTransferListStyles,
} from '../../../Styles/MicroserviceStyles'
import clsx from 'clsx'
import {
    IMSConfigTransferList,
    IMSConfig,
} from '../../../Interfaces/MicroserviceInterfaces'

function not(a: IMSConfig[], b: IMSConfig[]) {
    return a.filter((n) => !b.some((n2) => n.label === n2.label))
}

function intersection(a: IMSConfig[], b: IMSConfig[]) {
    return a.filter((n) => b.some((n2) => n.label === n2.label))
}

const ConfigsTransferList: FC<IMSConfigTransferList> = ({
    onSelected,
    all,
    selected,
}) => {
    const initialLeft: IMSConfig[] = not(all, selected)

    //console.log('MicroserviceConfigProfile selected:', selected);

    const classes = { ...useTransferListStyles(), ...useCommonStyles() }
    const [checked, setChecked] = React.useState<IMSConfig[]>([])
    const [left, setLeft] = React.useState<IMSConfig[]>(initialLeft)
    const [right, setRight] = React.useState<IMSConfig[]>(selected)

    const leftChecked = intersection(checked, left)
    const rightChecked = intersection(checked, right)

    // console.log('checked:', checked, 'leftChecked: ', leftChecked, 'rightChecked: ', rightChecked);

    const handleToggle = (value: IMSConfig) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const handleAllRight = () => {
        setRight(right.concat(left))
        setLeft([])
        onSelected(right.concat(left))
    }

    const handleCheckedRight = () => {
        setRight(right.concat(leftChecked))
        setLeft(not(left, leftChecked))
        setChecked(not(checked, leftChecked))
        onSelected(right.concat(leftChecked))
    }

    const handleCheckedLeft = () => {
        setLeft(left.concat(rightChecked))
        setRight(not(right, rightChecked))
        setChecked(not(checked, rightChecked))
        onSelected(not(right, rightChecked))
    }

    const handleAllLeft = () => {
        setLeft(left.concat(right))
        setRight([])
        onSelected([])
    }

    const customList = (items: IMSConfig[]) => (
        <Paper className={classes.paper}>
            <List dense component="div" role="list">
                {items.map((value) => {
                    const labelId = `transfer-list-item-${value}-label`

                    return (
                        <ListItem
                            key={value.label}
                            role="listitem"
                            button
                            onClick={handleToggle(value)}
                        >
                            <ListItemIcon>
                                <Checkbox
                                    checked={checked.indexOf(value) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={value.label} />
                        </ListItem>
                    )
                })}
                <ListItem />
            </List>
        </Paper>
    )

    return (
        <Grid
            container
            spacing={2}
            justify="center"
            alignItems="center"
            className={clsx(classes.root, classes.wrapper)}
        >
            <Grid item>{customList(left)}</Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleAllRight}
                        disabled={left.length === 0}
                        aria-label="move all right"
                    >
                        ≫
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedRight}
                        disabled={leftChecked.length === 0}
                        aria-label="move selected right"
                    >
                        &gt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleCheckedLeft}
                        disabled={rightChecked.length === 0}
                        aria-label="move selected left"
                    >
                        &lt;
                    </Button>
                    <Button
                        variant="outlined"
                        size="small"
                        className={classes.button}
                        onClick={handleAllLeft}
                        disabled={right.length === 0}
                        aria-label="move all left"
                    >
                        ≪
                    </Button>
                </Grid>
            </Grid>
            <Grid item>{customList(right)}</Grid>
        </Grid>
    )
}
export default ConfigsTransferList
