import { Container, Divider } from "@mui/material";
import { Typography } from "@mui/material";

export default function PageTitle(props) {
  const { title } = props;

  return (
    <>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Divider variant="middle" sx={{ marginLeft: 0 }} />
    </>
  );
}
