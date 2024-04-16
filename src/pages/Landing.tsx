import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Footer from "../components/Footer"
import { Box } from "@mui/material"
import { useTheme } from "@emotion/react"

const Landing = () => {
    const theme = useTheme();

    return (
        <Box 
            sx={{
                bgcolor: 'background.default',
            }
            }
        >
            <Navbar />

            {/* <Marquee /> */}

            <Hero />

            <Footer />
        </Box>
    )
}

export default Landing
