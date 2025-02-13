'use client'

import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'

const Footer = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="static" sx={{ backgroundColor: 'var(--darkBlue)' }}>
        <Toolbar>
          <Image src="/Logo.svg" alt="Logo" width={70} height={60} />
          <Typography variant="body1" color="inherit" sx={{ fontSize: '12px' }}>
            © 2025 Carato
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Footer
