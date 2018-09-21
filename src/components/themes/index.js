import { darkTheme } from "./_dark";
import { lightTheme } from "./_light";
import { testTheme } from "./_test";
import { defaultTheme } from "./_default";

const themeChoice = "dark";

const getTheme = themeChoice => {
    switch (themeChoice) {
        case "dark":
            return darkTheme;
        case "light":
            return lightTheme;
        case "test":
            return testTheme;
        default:
            return defaultTheme;
    }
};

export const userTheme = getTheme(themeChoice);
