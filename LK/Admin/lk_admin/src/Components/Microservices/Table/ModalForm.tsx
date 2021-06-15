import React, { FC, useContext } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
import {
    IMSConfig,
    IConfigModalForm,
} from './../../../Interfaces/MicroserviceInterfaces'

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

// interface IModalForm {
//     onClose: (value?:IMSConfig|undefined) => void;
// }

const ModalForm: FC<IConfigModalForm> = ({ onClose }) => {
    const classes = useStyles()
    const [values, setValues] = React.useState<IMSConfig>({
        // path: '',
        label: '',
        url: '',
        scope: '',
        module: '',
    })

    const handleChange = (prop: keyof IMSConfig) => (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const onSubmit = () => {
        //console.log('ОК', values);
        onClose(values)
    }

    const onCanceled = () => {
        //console.log('Cancel', values);
        onClose()
    }

    return (
        <div>
            <Typography variant="h6" className={classes.title}>
                Новая конфигурация микросервиса
            </Typography>
            <div className={classes.root}>
                {/*<FormControl*/}
                {/*    fullWidth*/}
                {/*    className={classes.margin}*/}
                {/*    variant="outlined"*/}
                {/*>*/}
                {/*    <InputLabel htmlFor="path">Путь</InputLabel>*/}
                {/*    <OutlinedInput*/}
                {/*        id="path"*/}
                {/*        type={'text'}*/}
                {/*        value={values.path}*/}
                {/*        placeholder={''}*/}
                {/*        onChange={handleChange('path')}*/}
                {/*        labelWidth={70}*/}
                {/*    />*/}
                {/*</FormControl>*/}
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="label">Название</InputLabel>
                    <OutlinedInput
                        id="label"
                        type={'text'}
                        value={values.label}
                        onChange={handleChange('label')}
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="url">URL-адрес</InputLabel>
                    <OutlinedInput
                        id="url"
                        type={'text'}
                        value={values.url}
                        onChange={handleChange('url')}
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="scope">Область</InputLabel>
                    <OutlinedInput
                        id="scope"
                        type={'text'}
                        value={values.scope}
                        onChange={handleChange('scope')}
                        labelWidth={70}
                    />
                </FormControl>
                <FormControl
                    fullWidth
                    className={classes.margin}
                    variant="outlined"
                >
                    <InputLabel htmlFor="module">Модуль</InputLabel>
                    <OutlinedInput
                        id="module"
                        type={'module'}
                        value={values.module}
                        onChange={handleChange('module')}
                        labelWidth={70}
                    />
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
