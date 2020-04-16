import React from 'react'

import { useDispatch } from 'react-redux';
import { clearUserData } from '../../includes/lib/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderAppBar from './Header'
import SidebarDrawer from './Sidebar'
import Footer from './Footer'
import useStyles from './style'

const Layout = (props) => {
    const classes = useStyles()
   
    // redux dispatch
   const dispatch = useDispatch();

   const logoutHandle = () => {
       // clear user data
       dispatch(clearUserData)
       // redirect
       Router.push('/')
   }
   
    return (
        <div className={classes.root}>
            <CssBaseline />
            <HeaderAppBar />
            <SidebarDrawer />
            <main className={classes.content}>
                <Toolbar />
                {props.children}
                <Footer />
            </main>
        </div>
    )
}

export default Layout;