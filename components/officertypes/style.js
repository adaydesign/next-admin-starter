import { makeStyles } from '@material-ui/core/styles'
import { orange, red, grey} from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
    editButton: {
        backgroundColor: orange[500],//theme.palette.warning,
        color: orange[50]
    },
    deleteButton: {
        backgroundColor: red[500],//theme.palette.error,
        color: red[50]
    },
}));

export default useStyles;