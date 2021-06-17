import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
export const useModalFormStyles = makeStyles((theme: Theme) =>
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
