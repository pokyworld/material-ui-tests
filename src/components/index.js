import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import AuthTabBar from "./AuthTabBar";
// screens
import { SignInScreen, SignUpScreen, ReminderScreen } from "../screens/Auth";

const tabData = [
    {
        id: "1",
        label: "Sign In",
        icon: "person",
        type: "ion",
        screen: <SignInScreen />
    },
    {
        id: "2",
        label: "Sign Up",
        icon: "create",
        type: "ion",
        screen: <SignUpScreen />
    },
    {
        id: "3",
        label: "Forgot",
        icon: "hand",
        type: "ion",
        screen: <ReminderScreen />
    }
];

export class Auth extends Component {
    state = { user: null, signedIn: false, token: null };

    onClickHelp = () => {
        console.log("Help requested");
    };

    render() {
        //
        return (
            <Fragment>
                <AuthTabBar
                    classes={this.props.classes}
                    theme={this.props.theme}
                    styles={styles}
                    title="EAZiiNVENTORY"
                    tabIndex={this.state.index}
                    tabData={tabData}
                    onClickHelp={() => this.onClickHelp()}
                />
            </Fragment>
        );
    }
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#0a1e28",
        height: 20
    },
    toolbar: {
        backgroundColor: "#0a1e28",
        height: "20px"
    },
    tabs: {
        backgroundColor: "#0f2c3a",
        textTransform: "none",
        height: 10
    },
    bigIndicator: {
        height: 5,
        backgroundColor: "#1de9b6"
    },
    grow: {
        flexGrow: 1
    }
});

export default withStyles(styles, { withTheme: true })(Auth);
