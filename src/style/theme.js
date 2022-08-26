import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#FFCB74",
                    borderTopRightRadius: 20,
                    borderBottomRightRadius: 20,
                    width: "300px",
                }
            }
        },
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
    }
})

export default theme;