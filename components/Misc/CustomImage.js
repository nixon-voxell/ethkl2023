import { Container } from "@mui/material";

import * as React from 'react';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import CustomItem from "@/components/Misc/CustomItem";
import Image from "next/image";
import { Margin } from "@mui/icons-material";

export default function CustomImage(props) {

  const { imagePath, title, matchCount, winCount} = props

  return (
    <> 
        <Image
        src={imagePath}
        width={250}
        height={250}
        alt="Picture of the author"
    />
     <h2>{title}</h2>
     <p style={{ marginTop: '8px' }}>Matches Played: {matchCount}</p>
     <p>Win History: {winCount}</p>
    </>
  )
  
}