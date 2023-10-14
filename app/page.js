"use client";

import { Container, Divider } from "@mui/material";
import { useState } from "react";
import { Typography } from "@mui/material";
import PageTitle from "@/components/Paging/PageTitle";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Dashboard from "@/components/Dashboard/Dashboard";
import { ethers } from "ethers";
import { abi } from "@/components/Abi/abi";

export default function Home() {
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [balance, setBalance] = useState();

  const getBlock = async () => {
    const wallet = new ethers.BrowserProvider(window.ethereum); // Referring to metamask
    const block = await wallet.getBlockNumber();

    // console.log(block)

    // Get connected address
    const address = await wallet.getSigner();

    // Define a new contact in ethers
    const token = new ethers.Contract(
      `0xc170bd5653B0d499eE2cAa700E4338B7549424eD`,
      abi,
      address
    );

    const name = await token.name();
    setName(name);

    const symbol = await token.symbol();
    setSymbol(symbol);

    // get connected address balance

    const balance = await token.balanceOf(address.address);
    setBalance(balance);
  };

  const mintToken = async () => {
    const wallet = new ethers.BrowserProvider(window.ethereum); // Referring to metamask
    const block = await wallet.getBlockNumber();

    // console.log(block)

    // Get connected address
    const address = await wallet.getSigner();

    const token = new ethers.Contract(
      `0xc170bd5653B0d499eE2cAa700E4338B7549424eD`,
      abi,
      address
    );

    await token.mint(address.address, ethers.parseEther("1000"));
  };

  getBlock();

  return (
    <Container maxWidth="lg" sx={{ marginTop: 3, fontWeight: 700 }}>
      <PageTitle title={`gm ${name}  😘`} />
      <Dashboard balance={balance}/>
    </Container>
  );
}
