import { Box, BoxProps, Container, Stack, Typography, useTheme } from '@mui/material'
import Logo from '../images/logo3.png'
import React from 'react'
import CreateButton from '../buttons/CreateButton';

const LayeredBox: React.FC<BoxProps> = ({ sx = {} }) => {
  const theme = useTheme();

  return(
    <Box 
      sx={{
        position: 'absolute',
        height: '300',
        width: '400',
        border: '3px solid #55494O',
        
        // top: 0,
        // left: 0,
        // zIndex: 100,
        // backgroundColor: theme.palette.background.paper,
        // opacity: 0.8,
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
      //  ...sx,
      }}
    />
  )
};

const Hero = () => {
  const theme = useTheme();

  return (
    <Container
      sx={{height: '85vh'}}  
    >
      {/* Logo and button */}
      <Stack 
        alignItems='center'
        justifyContent='center'
        sx={{height: '100%'}}
        gap={2}
      >

        <img 
          src={Logo} 
          alt='logo'
          style={{ width: '100%', height: 250, objectFit: 'contain' }}
        />

        <CreateButton>CREATE VISION BOARD</CreateButton>

      </Stack>

      <LayeredBox />

    </Container>
  )
}

export default Hero