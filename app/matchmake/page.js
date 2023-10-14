'use client'

import * as React from 'react'
import { Container, Button } from "@mui/material"
import PageTitle from "@/components/Paging/PageTitle"
import BasicModal from '@/components/Common/NftModal'

export default function MatchmakePage () {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: 3}}>
                <PageTitle title="Matchmake" />
                <Button variant="contained" sx={{marginTop: 5}} onClick={handleOpen}>Matchmake Now</Button>
                <BasicModal open={open} onClose={handleClose} />
            </Container>
        </>
    )
}