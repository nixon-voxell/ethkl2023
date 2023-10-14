'use client'

import * as React from 'react'
import { Container, Button } from "@mui/material"
import PageTitle from "@/components/Paging/PageTitle"
import BasicModal from '@/components/Common/NftModal'
import Orders from '@/components/Dashboard/Orders'
import Paper from '@mui/material/Paper';

export default function StorePage () {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: 3}}>
                <PageTitle title="Matchmake" />
                <Button variant="contained" sx={{marginTop: 5}} onClick={handleOpen}>Matchmake Now</Button>
                <BasicModal open={open} onClose={handleClose} />

                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop: 5 }}>
                  <Orders />
                </Paper>
            </Container>
        </>
    )
}