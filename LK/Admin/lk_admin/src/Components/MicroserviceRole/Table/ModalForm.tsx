import React, { FC, useContext, useState } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import {
    IMSConfigRole,
    IRoleModalForm,
} from './../../../Interfaces/MicroserviceInterfaces'
import ConfigsTransferList from './ConfigsTransferList'
import Context from './../../../Store/Context'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            width: '50vw',
            padding: theme.spacing(2, 4, 3),
        },
        title: {
            backgroundColor: '#fab731',
            paddingLeft: 24,
            paddingRight: 24,
            display: 'flex',
            width: '100%',
            height: 64,
            justifyContent: 'center',
            alignItems: 'center',
        },
        margin: {
            margin: theme.spacing(1),
        },
        withoutLabel: {
            marginTop: theme.spacing(3),
        },
        buttonsWrapper: {
            display: 'flex',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            flexDirection: 'row',
        },
    })
)

const ModalForm: FC<IRoleModalForm> = ({
    roleId,
    roleName,
    roleTitle,
    onClose,
}) => {
    const { MSConfigs, getSelectedConfigs } = useContext(Context)

    const classes = useStyles()
    const [values, setValues] = React.useState<IMSConfigRole>({
        roleId: roleId || 0,
        roleName: roleName || '',
        roleTitle: roleTitle || '',
    })

    const selected: IMSConfigRole[] = getSelectedConfigs(roleId)

    const [selectedConfigs, setSelectedConfigs] = useState<number[]>([
        ...selected.map((config) => {
            return config.roleId
        }),
    ])

    const handleChange = (prop: keyof IMSConfigRole) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleSelectConfigs = (configs: IMSConfigRole[]) => {
        setSelectedConfigs(
            configs.map((config) => {
                return config.roleId
            })
        )
        //console.log('selectedConfigs', selectedConfigs)
    }

    const onSubmit = () => {
        // console.log('Ok', values);
        onClose(values, selectedConfigs)
    }

    const onCanceled = () => {
        // console.log('Cancel', values);
        onClose()
    }

    return (
        <div>
            <Typography variant="h6" className={classes.title}>
                Новая роль
            </Typography>
            <div className={classes.root}>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="path">Идентификатор</InputLabel>
                    <OutlinedInput
                        id="path"
                        type={'text'}
                        value={values.roleName}
                        placeholder={''}
                        onChange={handleChange('roleName')}
                        labelWidth={140}
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="label">Название роли</InputLabel>
                    <OutlinedInput
                        id="label"
                        type={'text'}
                        value={values.roleTitle}
                        onChange={handleChange('roleTitle')}
                        labelWidth={140}
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    {/*<ConfigsTransferList*/}
                    {/*    onSelected={handleSelectConfigs}*/}
                    {/*    all={MSConfigs}*/}
                    {/*    selected={selected}*/}
                    {/*/>*/}
                </FormControl>
                <FormControl
                    fullWidth
                    className={clsx(classes.margin, classes.buttonsWrapper)}
                    variant="outlined"
                >
                    <Button onClick={onSubmit}>Сохранить</Button>
                    <Button onClick={onCanceled}>Отмена</Button>
                </FormControl>
            </div>
        </div>
    )
}

export default ModalForm
