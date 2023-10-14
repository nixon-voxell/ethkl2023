import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Divider, CircularProgress } from "@mui/material";
import LoadingModal from "./LoadingModal";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
// import CircularProgress from '@mui/joy/CircularProgress';

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

function ChildModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        sx={{ marginTop: 5, display: "block" }}
        onClick={handleOpen}
      >
        Yor Forger
      </Button>

      <Button
        variant="contained"
        sx={{ marginTop: 5, display: "block" }}
        onClick={handleOpen}
      >
        Asa Akira
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 100 }}>
          <Grid container spacing={2}>
            <Grid xs={4} display="flex" justifyContent="center" alignItems="center">
              <Typography
                id="modal-modal-title"
                sx={{ fontWeight: 700 }}
                variant="h6"
                component="h2"
                gutterBottom
              >
                Loading  ❤️
              </Typography>
            </Grid>
            <Grid xs={1} display="flex" justifyContent="center" alignItems="center">
              <CircularProgress size="1.2rem" />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

export default function BasicModal(props) {
  const { open, onClose } = props;

  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h5"
            sx={{ fontWeight: 700 }}
            gutterBottom
          >
            Please Select Your Waifu 😘
          </Typography>
          <Divider variant="middle" sx={{ marginLeft: 0 }} />

          <ChildModal />
        </Box>
      </Modal>

      {/* <LoadingModal open={loadingOpen} onLoadingClose={handleLoadingClose} /> */}
    </div>
  );
}
