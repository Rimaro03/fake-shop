import { createTheme } from "@mui/material";

export const palette = {
    primary: {
        main: "#FFCB74"
    },
    secondary: {
        main: "#F0DEFF",
    },
    black: {
        main: "#000000"
    }
}

const defaultTheme = createTheme({});
const { breakpoints } = defaultTheme

const theme = createTheme({
    palette: palette,
    shape: {
        borderRadius: 20
    },
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: palette.primary.main,
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    width: "300px",
                    border: "none"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 5,
                    boxShadow: "none",
                }
            }
        },
        MuiTypography: {
            styleOverrides: {
                h2: {
                    fontSize: "4em",
                    [breakpoints.down("md")]: {
                        fontSize: "2em",
                    },
                    [breakpoints.down("sm")]: {
                        fontSize: "1.5em",
                    }
                },
                h5: {
                    fontSize: "1.5em",
                    [breakpoints.down("md")]: {
                        fontSize: "1.3em",
                    },
                    [breakpoints.down("sm")]: {
                        fontSize: "1.2em",
                    },
                },
                h6: {
                    fontSize: "1.3em",
                    [breakpoints.down("md")]: {
                        fontSize: "1.1em",
                    },
                    [breakpoints.down("sm")]: {
                        fontSize: "1em",
                    },
                }
            }
        },
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
    },
})

export default theme;