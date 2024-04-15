import * as React from 'react';
import { AppBar, Typography, Stack, keyframes, useTheme } from '@mui/material';
import Image from '@mui/icons-material';
import Logo from '../images/logo.png';
import MenuIcon from '@mui/icons-material/Menu';
import CreateButton from '../buttons/CreateButton';
import NavButtons from '../buttons/NavButtons';

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
    const theme = useTheme();

    return(
        <AppBar 
            elevation={0} 
            position='sticky' 
            sx={{
                px: 3, 
                py: 2.5, 
                pb: 2, 
                bgcolor: 'background.default',    
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
                        <img 
                            src={Logo} alt='logo' 
                            style={{height: '30px', objectFit: 'contain'}} 
                        />

                        {/* App Name */}
                        <Typography 
                            variant='body2' 
                            sx={{
                                color:'primary.main',  
                                letterSpacing: '3px', 
                                animation: `${resourceKeyFrame} 3s inifinite ease`}}>
                            VISIONPULSE
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