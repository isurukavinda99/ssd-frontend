import {createTheme} from "@mui/material/styles";


export const color = () => ({

    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
    },
    primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
    },
    greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
    },
    redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
    },
    blueAccent: {
        100: "#E3F2FD",
        200: "#90CAF9",
        300: "#2196F3",
        400: "#1E88E5",
        500: "#1565C0",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
    },
    other: {
        "color1": "#000000",
        "color2": "#ffffff",
        "color3": "#191c24",
        "color4": "#2a3038",
        "color5": "#FAFAFA",
        "color6": "#F5F5F5",
        "color7": "#EEEEEE"

    }

});


export const themeSettings = () => {
    const colors = color();
    return {
        palette: {

            primary: {
                main:colors.blueAccent["300"]

            },
            secondary: {
                main: "#9806c4",
            },
            neutral: {
                dark: colors.grey[700],
                main: colors.grey[500],
                light: colors.grey[100],
            },
            background: {
                default: colors.blueAccent["100"],
            }


        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 16,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            },
        },
        breakpoints: {
            values: {
                mobile: 0,
                tablet: 640,
                laptop: 1024,
                desktop: 1200,
            }
        }
    };
};


export const useTheme = () => {
    return createTheme(themeSettings());
};
