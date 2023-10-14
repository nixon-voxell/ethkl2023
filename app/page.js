import { Container, Divider } from '@mui/material';
import { Typography } from '@mui/material';
import PageTitle from '@/components/Paging/PageTitle';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import { ethers } from 'ethers';
// import { abi } from '@/abi/abi';

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{marginTop: 3, fontWeight: 700}}>
      <PageTitle title="Main Page" />
    </Container>
  )
}
