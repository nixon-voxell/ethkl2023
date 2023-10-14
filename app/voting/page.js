"use client";

import * as React from "react";
import { Container, Button } from "@mui/material";
import PageTitle from "@/components/Paging/PageTitle";
import BasicModal from "@/components/Common/NftModal";
import Orders from "@/components/Dashboard/Orders";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  //   border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  height: 600,
};

export default function StorePage() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 3 }}>
        <PageTitle title="Vote for the best Waifu!" />
        <h2>Ether Balance: 10 Eth</h2>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch",  marginTop: 2 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Bet Amount" variant="outlined" />
        </Box>
        <Button variant="contained" sx={{ marginTop: 2 }} onClick={handleOpen}>
          Enter Voting Pool
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 500, height: 100 }}>
            <Grid container spacing={2}>
              <Grid
                xs={4}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Typography
                  id="modal-modal-title"
                  sx={{ fontWeight: 700 }}
                  variant="h6"
                  component="h2"
                  gutterBottom
                >
                  Joining ❤️
                </Typography>
              </Grid>
              <Grid
                xs={1}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <CircularProgress size="1.2rem" />
              </Grid>
            </Grid>
          </Box>
        </Modal>

        <Paper
          sx={{ p: 2, display: "flex", flexDirection: "column", marginTop: 5 }}
        >
          <Orders />
        </Paper>
      </Container>
    </>
  );
}
