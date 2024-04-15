import { AppBar, Stack } from '@mui/material'
import React from 'react'
import NavButtons from '../buttons/NavButtons';

const Footer = () => {
  return (
    <AppBar
      elevation={0}
      sx={{bottom: 0, 
        top: 'auto',
      }}
    >

      <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{px: 3, py: 0.3}}>
        {/* left */}
        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <NavButtons>INSTAGRAM</NavButtons>
          <NavButtons>X</NavButtons>
          <NavButtons>DISCORD</NavButtons>
        </Stack>

        {/* right */}
        <Stack direction={{xs: 'column', sm: 'row'}}>
          <NavButtons>ABOUT</NavButtons>
          <NavButtons>T&Cs</NavButtons>
          <NavButtons>GALLERY</NavButtons>
        </Stack>

      </Stack>
    </AppBar>
  )
}

export default Footer