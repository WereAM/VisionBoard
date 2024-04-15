import React from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Marquee from "../components/Marquee"
import Footer from "../components/Footer"
import { Box } from "@mui/material"

const Landing = () => {
    return (
        <Box >
            <Navbar />

            <Hero />

            {/* <Marquee /> */}

            <Footer />
        </Box>
    )
}

export default Landing
