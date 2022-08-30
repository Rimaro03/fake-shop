import { createTheme } from "@mui/material";

export const palette = {
    primary: {
        main: "#FFCB74"
    },
    secondary: {
        main: "#F0DEFF",
    }
}

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
        }
    },
    typography: {
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
    },
})

export default theme;