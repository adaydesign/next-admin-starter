import React, { useEffect } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux';

import { useDispatch } from 'react-redux';
import { saveLoginUser, clearUserData } from '../../includes/lib/store';

import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import HeaderAppBar from './Header'
import SidebarDrawer from './Sidebar'
import Footer from './Footer'
import useStyles from './style'

const Layout = (props) => {
    const classes = useStyles()

    const { userData } = props;

    // redux dispatch
    const dispatch = useDispatch();

    const logoutHandle = () => {
        // clear user data
        dispatch(clearUserData)
        // clear localstorage
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        // redirect
        Router.push('/')
    }

    useEffect(()=>{
        // if not store data in redux but have data in localstorage
        // put data in localstorage to redux
        const userLocal = localStorage.getItem('user')
        const tokenLocal = localStorage.getItem('token')

        // console.log(userData)
        // console.log(userLocal)
        // console.log(tokenLocal)

        if(!userData.loginSuccess && (userLocal != undefined && tokenLocal != undefined)){
            // store user data to redux
            dispatch(saveLoginUser(JSON.parse(userLocal), tokenLocal))
        }

    },[])

    return (
        <div className={classes.root}>
            <CssBaseline />
            <HeaderAppBar logoutHandle={logoutHandle} />
            <SidebarDrawer />
            <main className={classes.content}>
                <Toolbar />
                {props.children}
                <Footer />
            </main>
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

export default connect(mapStateToProps)(Layout);