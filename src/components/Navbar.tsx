'use client'

import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'

const drawerWidth = 240
const navItems = ['Crear cuenta', 'Iniciar sesión']

interface Props {
  window?: () => Window
}

const Navbar = (props: Props) => {
  const { window } = props
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          padding: '10px',
          alignContent: 'center',
          justifyContent: 'center',
          backgroundColor: 'var(--darkBlue)',
        }}
      >
        <Link href={'/'}>
          <Image
            src="/Logo&Lema.svg"
            alt="Logo"
            width={140}
            height={70}
            style={{ marginRight: '1rem' }}
          />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  const container =
    window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{ backgroundColor: 'var(--darkBlue)' }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Link href={'/'}>
            <Image
              src="/Logo&Lema.svg"
              alt="Logo"
              width={140}
              height={70}
              style={{ marginRight: '1rem' }}
            />
          </Link>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff',
                  border: '1px solid #fff',
                  textTransform: 'none',
                  marginLeft: 1,
                  borderRadius: '20px',
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          anchor="right"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3, width: '100%' }}>
        <Toolbar />
      </Box>
    </Box>
  )
}

export default Navbar
