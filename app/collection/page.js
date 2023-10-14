import { Container } from "@mui/material"


// import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import CustomItem from '@/components/Misc/CustomItem';
import Image from 'next/image'




export default function BasicGrid() {
  return (
    <Container maxWidth="lg" sx={{marginTop: 3}}>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={6}>
          <CustomItem>xs=4</CustomItem>
        </Grid>
        <Grid xs={6}>
          <CustomItem>xs=4</CustomItem>
        </Grid>
        <Grid xs={6}>
          <CustomItem>xs=4</CustomItem>
        </Grid>
        <Grid xs={6}>
          <CustomItem>xs=4</CustomItem>
        </Grid>
      </Grid>
    </Box>
    <Image
      src="/profile.png"
      width={500}
      height={500}
      alt="Picture of the author"
    />
    </Container>
    
  );
}
