'use client'

import * as React from 'react'
import { Container, Button } from "@mui/material"
import PageTitle from "@/components/Paging/PageTitle"
import BasicModal from '@/components/Common/NftModal'
import Orders from '@/components/Dashboard/Orders'
import Paper from '@mui/material/Paper';
import { ethers } from "ethers";
import { abi } from "@/components/Abi/v";

export default function MatchmakePage () {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    async function onMatchmake() {
        // console.log("Voted");
    
        const contractAddress = "0xC270a139FC34CE78dD753e3a753DC238c75CD781";
    
        const wallet = new ethers.BrowserProvider(window.ethereum); // Referring to metamask
        const block = await wallet.getBlockNumber();
    
        // console.log(block)
    
        // Get connected address
        const address = await wallet.getSigner();
    
        // get the smart contract
        const contract = new ethers.Contract(
          contractAddress,
          abi,
          address
        );
    
        contract.addPlayer();
      }
    

    return (
        <>
            <Container maxWidth="lg" sx={{marginTop: 3}}>
                <PageTitle title="Matchmake" />
                <Button variant="contained" sx={{marginTop: 5}} onClick={onMatchmake}>Matchmake Now</Button>
                <BasicModal open={open} onClose={handleClose} />

                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', marginTop: 5 }}>
                  <Orders />
                </Paper>
            </Container>
        </>
    )
}