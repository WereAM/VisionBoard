import React from 'react'
import { ThemeProvider ,createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode : 'dark',
    primary: {
        main: '#c1d0b5',
        light: '#dbead2',
        contrastText: '#fff8de',
    },
    secondary: {
        main: '#d9cbc0',
        light: '#ecd3bd',
    },
    text: {
        primary: '#1f261a',
        secondary: '#4d5d53',
    },
    background: {
        default: '#f1e8ca',
        paper: '#bbcbdb',
    },
  },

  typography:{
    fontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: 36,
      letterSpacing: '1.5px',   
    },
    h2: {
      fontWeight: 'bold',
      fontSize: 32,
      letterSpacing: '1.5px' ,
    },
    h3: {
      fontWeight: 'bold',
      fontSize: 28,
      letterSpacing: '1.5px' ,
    },
    h4: {
      fontWeight: 'bold',
      fontSize: 24,
      letterSpacing: '1.5px' ,
    },
    body1: {
        fontSize: 18,
        letterSpacing: '1.1px',
    },
    body2: {
        fontSize: 14,
        letterSpacing: '1px',
    },
  },
});

type ThemeProps = {
    children: React.ReactNode
}

export default function ThemeManager({children} : ThemeProps){
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}