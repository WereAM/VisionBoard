import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Container from '@mui/material/Container';
import { Toolbar, Container, AppBar, Typography, IconButton, Box, Menu, MenuItem, Button, Stack, keyframes } from '@mui/material';
import Image from '@mui/icons-material';
import Logo from '../logo.svg';
import MenuIcon from '@mui/icons-material/Menu';
import CreateButton from '../buttons/CreateButton';
import NavButtons from '../buttons/NavButtons';


// const pages = ['Goals', 'Vision Board', 'Dream Board', 'Mood Board'];
const resourceKeyFrame = keyframes`
    0%{
        opacity: 1;
    }
    60%{
        opacity: 0.4;
    }
    100%{
        opacity: 1;
    }
`;

const Navbar = () => {

    // const [navMenu, setNavMenu] = React.useState<null | HTMLElement>(null);

    // const handleOpenNavMenu = (e: React.MouseEvent<HTMLElement>) => {
    //     setNavMenu(e.currentTarget);
    // };

    // const handleCloseNavMenu = () => {
    //     setNavMenu(null);
    // };

    return(
        <AppBar 
            elevation={0} 
            position='sticky' 
            sx={{
                px: 3, 
                py: 2.5, 
                pb: 2, 
                bgcolor: 'transparent', 
                backdropFilter: 'blur(8px)',
            }}
        >
            <Stack
                direction="row"
                alignItems='center'
                justifyContent='space-between'
                sx={{
                    height: '100%'
                }}
                >
                    <Stack direction='row' alignItems='center' spacing={5}>
                        {/* Logo */}
                        {/* <img 
                            src={Logo} alt='logo' 
                            style={{height: '30px', objectFit: 'contain'}} 
                        /> */}

                        {/* App Name */}
                        <Typography 
                            variant='body2' 
                            sx={{
                                color:'primary.light', 
                                letterSpacing: '3px', 
                                animation: `${resourceKeyFrame} 3s inifinite ease`}}>
                            See The Vision?
                        </Typography>
                    </Stack>
                    
                    <Stack direction='row' alignContent='center' spacing={3}>
                        <NavButtons>VISION BOARD</NavButtons>
                        <NavButtons>MOOD BOARD</NavButtons>
                        <NavButtons>DREAM BOARD</NavButtons>
                        <NavButtons>GOALS</NavButtons>
                        <CreateButton>CREATE</CreateButton>
                    </Stack>
            </Stack>

        </AppBar>
    )
}

export default Navbar