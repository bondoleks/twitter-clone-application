import {createContext} from "react";

export const CustomThemeContext = createContext({
    themeMode: "light",
    color: "#00ff00"
});