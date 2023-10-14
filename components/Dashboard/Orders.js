import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Divider } from "@mui/material";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "16 Mar, 2019",
    "Yor Forger",
    "Win",
    "0.2 ETH",
    "1 ETH",
  ),
  createData(
    1,
    "16 Mar, 2019",
    "An Yujin",
    "Win",
    "0.2 ETH",
    "1 ETH",
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Kim Gaeul",
    "Win",
    "0.2 ETH",
    "1 ETH",
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Saya Hiyama",
    "Lose",
    "0.2 ETH",
    "1 ETH",
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Kim Gahyeon",
    "Lose",
    "0.2 ETH",
    "1 ETH",
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Matchmaking History</Title>
      <Divider variant="middle" sx={{ marginLeft: 0, marginBottom: 3 }} />
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 700}}>Date</TableCell>
            <TableCell sx={{fontWeight: 700}}>Waifu Betted</TableCell>
            <TableCell sx={{fontWeight: 700}}>Result</TableCell>
            <TableCell sx={{fontWeight: 700}}>Bet Amount</TableCell>
            <TableCell sx={{fontWeight: 700}}>Amount Gain / Loss</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell >{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link> */}
    </React.Fragment>
  );
}
