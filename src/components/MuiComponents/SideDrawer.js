import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
    Drawer,
    AppBar,
    Toolbar,
    List,
    Typography,
    IconButton,
    Hidden,
    Divider
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";

import {
    mailFolderListItems,
    otherMailFolderListItems
} from "./DrawerListItems";
import TabBar from "./TabBarComponents/TabBar";

const { width } = window.screen;
const drawerWidth = Math.min(Math.floor(width * 0.8), 250);

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: 440,
        zIndex: 1,
        overflow: "hidden",
        position: "relative",
        display: "flex",
        width: "100%"
    },
    appBar: {
        position: "static",
        marginLeft: drawerWidth,
        // backgroundColor: red["900"],
        [theme.breakpoints.up("md")]: {
            width: `calc(100% - ${drawerWidth}px)`
        }
    },
    navIconHide: {
        [theme.breakpoints.up("md")]: {
            display: "none"
        }
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            position: "relative"
        }
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3
    }
});

class SideDrawer extends React.Component {
    state = {
        mobileOpen: false
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, theme } = this.props;

        const drawer = (
            <div>
                <div className={classes.toolbar} />
                <Divider />
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div className={classes.root}>
                <AppBar>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.handleDrawerToggle}
                            className={classes.navIconHide}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" noWrap>
                            Responsive drawer
                        </Typography>
                    </Toolbar>
                    <TabBar />
                </AppBar>
                <Hidden mdUp>
                    <Drawer
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={this.state.mobileOpen}
                        onClose={this.handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        variant="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Typography noWrap>
                        {"You think water moves fast? You should see ice."}
                    </Typography>
                </main>
            </div>
        );
    }
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(SideDrawer);
