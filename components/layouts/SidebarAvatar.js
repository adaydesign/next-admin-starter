import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';

const SideBarAvatar = () => {
    const classes = useStyles();

    return (
        <div className={classes.avatarInSideBar}>
            <Grid container spacing={1} direction="column" justify="center" alignItems="center">
                <Grid item>
                    <Avatar alt="N" src="" className={classes.avatarLarge} />
                </Grid>
                <Grid item>
                    <Typography variant="body1">ชื่อ - นามสกุล</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">สำนักงาน/หน่วยงาน</Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default SideBarAvatar;