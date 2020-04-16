import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    contentTitle: {
        color: theme.palette.primary
    },
    contentBody: {
        marginTop: '20px',
        padding: '20px'
    },
    footer: {
        padding: theme.spacing(2, 1),
        marginTop: 'auto',
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.primary.light : theme.palette.primary.dark,
    }
}))

export default useStyles;