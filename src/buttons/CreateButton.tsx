import React from 'react'
import { Button, ButtonProps } from '@mui/material'

const CreateButton: React.FC<ButtonProps> = ({children}) => {
  return (
    <Button
      sx={(theme) =>({
        bgcolor: 'secondary.dark',
        border: `1px solid ${theme.palette.secondary.dark}`,
        borderRadius: 2,
        px: '20px',
        py: '6px',
      })}
    >
      {children }
    </Button>
  )
}

export default CreateButton