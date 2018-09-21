import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles, createMuiTheme } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Tabs,
    Tab
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { AccountCircle } from "@material-ui/icons";
import SwipeableViews from "react-swipeable-views";

// import TabBar from "./MuiComponents/TabBar";

const theme = createMuiTheme({
    palette: {
        primary: red
    }
});

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

const TabContainer = ({ children, dir }) => {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
};

export class AuthTabBar extends Component {
    static defaultProps = {
        classes: {},
        title: "Sign In to continue",
        tabIndex: 0,
        tabData: [],
        // onClickTab: () => {},
        onClickHelp: () => {}
    };

    state = {
        tabIndex: this.props.tabIndex
    };

    onClickTab = (event, tabIndex) => {
        // event.preventDefault();
        event.persist();
        this.setState({ tabIndex });
    };

    renderTabs = data => {
        return data.map((tab, idx1) => {
            const { label, icon, type } = tab;
            return (
                <Tab
                    key={idx1}
                    className={this.props.classes.tabs}
                    label={label}
                    href="#"
                />
            );
        });
    };

    renderScreens = (data, theme) => {
        return data.map((tab, idx2) => {
            const { screen } = tab;

            return <TabContainer key={idx2} screen={screen} />;
        });
    };
    render() {
        // console.log(tabData);
        return (
            <div className={this.props.classes.root}>
                <AppBar className={this.props.classes.root}>
                    <Toolbar className={this.props.classes.toolbar}>
                        <Typography
                            variant="body1"
                            color="inherit"
                            className={this.props.classes.grow}
                        >
                            {this.props.title}
                        </Typography>
                        <div>
                            <IconButton
                                onClick={() => this.props.onClickHelp()}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </div>
                    </Toolbar>
                    <Tabs
                        value={this.state.tabIndex}
                        classes={{
                            indicator: this.props.classes.bigIndicator,
                            root: this.props.classes.tabBar
                        }}
                        // onChange={() => {}}
                        onChange={this.onClickTab}
                        indicatorColor="secondary"
                        textColor="inherit"
                        fullWidth
                    >
                        {this.renderTabs(this.props.tabData)}
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                >
                    {this.renderScreens(this.props.tabData, theme)}
                </SwipeableViews>
            </div>
        );
    }
}

AuthTabBar.propTypes = {
    // classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(AuthTabBar);
