import React, { FC, useContext, useEffect, useState } from 'react'
import {
    OutlinedInput,
    TextField,
    InputLabel,
    FormControl,
    Button,
    Typography,
    Fade,
} from '@material-ui/core'
import clsx from 'clsx'
import {
    IMSConfig,
    IConfigModalForm,
} from '../../../Interfaces/MicroserviceInterfaces'
import { ModulesContext } from '../../../Context/ModulesContext'
import { useModalFormStyles } from '../../../Styles/ModalFormStyles'

export const ModalModuleForm: FC<IConfigModalForm> = ({
    onCreate,
    onUpdate,
    onReject,
    isOpen,
    setIsOpen,
}) => {
    const classes = useModalFormStyles()
    const { moduleItem, setModuleItem, existedModuleScopes } = useContext(
        ModulesContext
    )
    const [isDouble, setIsDouble] = useState(false)
    const errorScope = isDouble ? 'Данное значение области уже существует' : ''
    const emptyItem: IMSConfig = {
        label: '',
        url: '',
        scope: '',
        module: '',
    }
    const [values, setValues] = React.useState<IMSConfig>(
        moduleItem || emptyItem
    )

    const handleChange = (prop: keyof IMSConfig) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        if (event.currentTarget.id === 'scope') {
            const isSameAsExisted = existedModuleScopes.includes(
                event.currentTarget.value
            )
            const isNewHasExistedScope = !moduleItem && isSameAsExisted
            const isChangedToExistedScope =
                moduleItem &&
                moduleItem.scope !== event.currentTarget.value &&
                isSameAsExisted

            if (isNewHasExistedScope || isChangedToExistedScope) {
                setIsDouble(true)
            } else {
                setIsDouble(false)
            }
        }
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleSubmit = () => {
        if (existedModuleScopes.indexOf(values.scope) !== -1) {
            return setIsDouble(true)
        }
        if (moduleItem) {
            onUpdate(values)
        } else {
            onCreate(values)
        }
    }

    const handleRejected = () => {
        onReject()
        setModuleItem(undefined)
    }

    return (
        <Fade in={isOpen} onExit={handleRejected}>
            <div>
                <Typography variant="h6" className={classes.title}>
                    Новая конфигурация микросервиса
                </Typography>
                <div className={classes.root}>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            label="Название"
                            id="label"
                            type={'text'}
                            value={values.label}
                            variant="outlined"
                            onChange={handleChange('label')}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            label="URL-адрес"
                            id="url"
                            type={'text'}
                            value={values.url}
                            variant="outlined"
                            onChange={handleChange('url')}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            error={isDouble}
                            label="Область"
                            disabled={!!moduleItem}
                            helperText={errorScope}
                            id="scope"
                            type={'text'}
                            value={values.scope}
                            variant="outlined"
                            onChange={handleChange('scope')}
                        />
                    </FormControl>
                    <FormControl fullWidth className={classes.margin}>
                        <TextField
                            label="Модуль"
                            id="module"
                            type={'module'}
                            value={values.module}
                            variant="outlined"
                            onChange={handleChange('module')}
                        />
                    </FormControl>
                    <FormControl
                        fullWidth
                        className={clsx(classes.margin, classes.buttonsWrapper)}
                        variant="outlined"
                    >
                        <Button disabled={isDouble} onClick={handleSubmit}>
                            Сохранить
                        </Button>
                        <Button onClick={handleRejected}>Отмена</Button>
                    </FormControl>
                </div>
            </div>
        </Fade>
    )
}
