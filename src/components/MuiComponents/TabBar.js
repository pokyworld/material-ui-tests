import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SwipeableViews from "react-swipeable-views";
import { Tabs, Tab, Typography } from "@material-ui/core";

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired
};

const styles = theme => ({
    bigIndicator: {
        height: 5,
        backgroundColor: "#CC0000"
    },
    root: {
        //backgroundColor: "gold"
    },
    tabBar: {
        backgroundColor: "lightblue"
    }
});

class TabBar extends React.Component {
    static defaultProps = { tabs: 0, tabData: [], startTab: 0 };
    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    renderTabs = data => {
        return data.map((tab, index) => {
            const { id, name, icon } = tab;
            return <Tab key={index} label={name} />;
        });
    };

    // handleChangeIndex = index => {
    //     this.setState({ value: index });
    // };

    render() {
        const { classes, theme } = this.props;
        console.log(theme);
        return (
            <div className={classes.root}>
                <Tabs
                    value={this.state.value}
                    classes={{
                        indicator: classes.bigIndicator,
                        root: classes.tabBar
                    }}
                    onChange={this.handleChange}
                    indicatorColor="primary"
                    textColor="inherit"
                    fullWidth
                >
                    <Tab label="Item One" />
                    <Tab label="Item Two" />
                    <Tab label="Item Three" />
                </Tabs>
                <SwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>Item One</TabContainer>
                    <TabContainer dir={theme.direction}>Item Two</TabContainer>
                    <TabContainer dir={theme.direction}>
                        Item Three
                    </TabContainer>
                </SwipeableViews>
            </div>
        );
    }
}

TabBar.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(TabBar);
