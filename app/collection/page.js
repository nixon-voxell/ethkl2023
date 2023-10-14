import { Container } from "@mui/material";

// import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CustomItem from "@/components/Misc/CustomItem";
import Image from "next/image";
import { Margin } from "@mui/icons-material";
import PageTitle from "@/components/Paging/PageTitle";

export default function BasicGrid() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <PageTitle title="My Waifu 🥰" />
      <Box sx={{ flexGrow: 1, marginTop: 3 }}>
        <Grid container spacing={2}>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/1.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: 6</p>
          </Grid>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/2.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: 2</p>
          </Grid>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/3.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: 2</p>
          </Grid>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/4.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: 4</p>
          </Grid>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/5.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: 0</p>
          </Grid>
          <Grid xs={4} sx={{textAlign: "center"}}>
            <Image
              src="/Waifus/6.png"
              width={250}
              height={250}
              alt="Picture of the author"
            />
            <h2>Best Waifu</h2>
            <p style={{ marginTop: '8px' }}>Matches Played: 15</p>
            <p>Win History: </p>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}