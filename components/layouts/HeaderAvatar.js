import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import useStyles from './style';

const HeaderAvatar = () => {
    const classes = useStyles();

    return (
        <div className={classes.avatarInHeader}>
           <Avatar alt="N" src="" className={classes.avatarSmall} />
           <Typography variant="body1">ชื่อ - นามสกุล</Typography> 
        </div>
    )
}

export default HeaderAvatar;