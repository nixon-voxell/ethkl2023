import './globals.css'
import { Inter } from 'next/font/google'
import Box from '@mui/material/Box';
import CustomAppBar from '@/components/Paging/CustomAppBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eth Learn',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <>
        <Box sx={{ flexGrow: 1 }}>
          <CustomAppBar />
        </Box>
        {children}        
        </>
       
      </body>
    </html>
  )
}
