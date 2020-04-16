import React,{useState} from 'react';
import Link from 'next/link';
// import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import useStyles from './style';
import { mainMenu } from '../../includes/sidebarMenu'

const MenuItem = (props) => {
    const classes = useStyles()
    const { subs, menu, fixClass } = props
    const [open, setOpen] = useState(false)
    const openSubHandle = () => {
        setOpen(!open)
    }
    
    if (subs != undefined) {
        return (
            <>
                <ListItem button onClick={openSubHandle}>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.text} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        { subs.map(subItem=>(<MenuItem menu={subItem} fixClass={classes.nested} key={subItem.key}/>)) }
                    </List>
                </Collapse>
            </>
        )
    } else {
        return (
            <Link href={menu.link}>
                <ListItem button className={fixClass}>
                    <ListItemIcon>{menu.icon}</ListItemIcon>
                    <ListItemText primary={menu.text} />
                </ListItem>
            </Link>
        )
    }
}


const SidebarDrawer = () => {
    const classes = useStyles();

    return (
        <>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List
                        aria-labelledby="nested-list-subheader"
                        subheader={
                            <ListSubheader component="div" id="nested-list-subheader">
                                Nested List Items
                            </ListSubheader>
                        }
                    >
                        { mainMenu.map( m =>(<MenuItem menu={m} subs={m.subs} key={m.key}/>))}
                    </List>
                </div>
            </Drawer>


        </>
    );
}

export default SidebarDrawer;
