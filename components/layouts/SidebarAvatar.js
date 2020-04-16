import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const SideBarAvatar = (props) => {
    const classes = useStyles();
    const { userData } = props;
    return (
        <div className={classes.avatarInSideBar}>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Avatar alt="N" src="" className={classes.avatarLarge} />
                </Grid>
                <Grid item>
                    <Typography variant="body1">{userData.fullName}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">{userData.courtName}</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        userData: {
            ...state
        }
    };
}

export default connect(mapStateToProps)(SideBarAvatar);