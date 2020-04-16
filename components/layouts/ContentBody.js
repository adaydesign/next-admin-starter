import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import useStyles from './style'

const ContentBody = (props) => {
    const classes = useStyles()

    return (<>
        <Grid container>
            <Grid item xs={12}>
                <Paper className={classes.contentBody}>
                    {props.children}
                </Paper>
            </Grid>
        </Grid>

    </>)
}

export default ContentBody;