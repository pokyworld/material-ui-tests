import React from "react";
import { createMuiTheme } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";

// import TabBar from "./components/TabBar";
// import ButtonAppBar from "./components/ButtonAppBar";
import Auth from "./components";
import "./styles.css";

const theme = createMuiTheme({
    root: {
        backgroundColor: "yellow",
        width: 300
    },
    bigIndicator: {
        height: 8,
        backgroundColor: "#CC0000"
    }
});

export const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <Auth />
        </MuiThemeProvider>
    );
};
export default Auth;
