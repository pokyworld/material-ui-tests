import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { red } from "@material-ui/core/colors";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: red["900"]
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    button: {
        textTransform: "none"
    }
});

function PlainAppBar(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <AppBar position="static" classes={{ root: classes.root }}>
                <Toolbar>
                    <IconButton
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="Menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="body1"
                        color="inherit"
                        className={classes.grow}
                    >
                        Exercise Picker
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
