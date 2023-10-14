"use client";

import { useState, useEffect } from "react";
import { Container } from "@mui/material";
import PageTitle from "@/components/Paging/PageTitle";
import WalletBalance from "@/components/Wallet/WalletBalance";
import { ethers } from "ethers";
// import TiredLife from '../artifacts/contracts/MyNFT.sol/TiredLife.json'
import TiredLife from "@/artifacts/contracts/MyNFT.sol/TiredLife.json";

const contractAddress = "0x0DCd1Bf9A1b36cE34237eEaFef220932846BCD82";

const provider = new ethers.BrowserProvider(window.ethereum); // Referring to metamask

const signer = provider.getSigner();

export default function TestPage() {
  const [totalMinted, setTotalMinted] = useState(0);
  useEffect(() => {
    getCount();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    console.log(parseInt(count));
    setTotalMinted(parseInt(count));
  };

  const contract = new ethers.Contract(contractAddress, TiredLife.abi, signer);
  return (
    <>
      <Container maxWidth="lg" sx={{ marginTop: 3 }}>
        <PageTitle title="Test" />
        <WalletBalance />

        {Array(totalMinted + 1)
          .fill(0)
          .map((_, i) => (
            <div key={i}>
              <NFTImage tokenId={i} getCount={getCount} />
            </div>
          ))}
      </Container>
    </>
  );
}
