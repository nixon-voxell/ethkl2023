"use client";

import { useState } from "react";
import { ethers } from "ethers";
import { abi } from "../Abi/abi";

function WalletBalance() {
  const [name, setName] = useState();
  const [symbol, setSymbol] = useState();
  const [balance, setBalance] = useState();
  const [showBalance, setShowBalance] = useState(false);

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

  getBlock();

  return (
    <div>
      <h5>Your Balance: {showBalance ? balance : 'Nah'}</h5>
      <button onClick={() => setShowBalance(!showBalance)}>Show My Balance</button>
    </div>
  );
}

export default WalletBalance;
