import React from 'react';
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useStyles from './style';

const HeaderAvatar = (props) => {
    const classes = useStyles();
    const { userData } = props;
    return (
        <div className={classes.avatarInHeader}>
           <Avatar alt="N" src="" className={classes.avatarSmall} />
           <Typography variant="body1">{userData.fullName}</Typography> 
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

export default connect(mapStateToProps)(HeaderAvatar);