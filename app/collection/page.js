import { Container } from "@mui/material";

// import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CustomItem from "@/components/Misc/CustomItem";
import Image from "next/image";
import { Margin } from "@mui/icons-material";
import CustomImage from "@/components/Misc/CustomImage";

export default function BasicGrid() {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/1.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/2.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/3.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/4.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/5.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
          <Grid xs={4} sx={{ textAlign: "center" }}>
            <CustomImage
              imagePath="/Waifus/6.png"
              title="Best Waifu"
              matchCount="15"
              winCount="6"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
