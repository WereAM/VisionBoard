import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode : 'dark',
    primary: {
        main: '#55494O',
        light: '#C9AD93',
        contrastText: '#819171',
    },
    secondary: {
        main: '#d9cbc0',
        light: '#ecd3bd',
        dark: '#758467',
    },
    text: {
        primary: '#000000',
        secondary: '#4d5d53',
    },
    background: {
        default: '#DDFE6DA',
        paper: '#CBD5C0',
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
    );
}