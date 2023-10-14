'use client'

// import Image from 'next/image'
// import styles from './page.module.css'
// import styles from '@/styles/page.module.css'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@/components/Paging/Drawer';

export default function CustomAppBar() {
    const [open, setIsOpen] = React.useState(false)

    return (
        <AppBar position="relative" className='appBar'>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setIsOpen(!open)}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Waifu NFT
            </Typography>
            </Toolbar>
            <Drawer open={open}/>
      </AppBar>
    )
}