import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { text } from 'stream/consumers'

const NavButtons: React.FC<ButtonProps> = ({ children }) => {
  return (
    <Button
      sx={(theme) => ({
        fontSize: 16,
        color: 'text.secondary',
        letterSpacing: '2px',
        '&:hover': {
          bgcolor: 'transparent',
          color: 'text.primary',
          filter: 
          'drop-shadow(0px 0px 10px #4d5d53) drop-shadow(0px 0px 16px #4d5d53) drop-shadow(0px 0px 40px rgba(255, 74, 169, 0.8)',
        }, 
      })}
    >
      {children}
    </Button>
  )
}

export default NavButtons