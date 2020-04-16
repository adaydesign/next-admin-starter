import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HeaderAvatar from './HeaderAvatar'
import Link from 'next/link'
import useStyles from './style'

export default function HeaderAppBar(props) {
    const classes = useStyles();
    const {logoutHandle} = props;
    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    ชื่อระบบโปรแกรมอะไรเอ่ย
                </Typography>
                <HeaderAvatar />
                <Button color="inherit" variant="outlined" onClick={logoutHandle}>ออกจากระบบ</Button>
            </Toolbar>
        </AppBar>
    );
}
