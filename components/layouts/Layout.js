import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderAppBar from './Header'
import SidebarDrawer from './Sidebar'
import Footer from './Footer'
import useStyles from './style'

const Layout = (props) => {
    const classes = useStyles()

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