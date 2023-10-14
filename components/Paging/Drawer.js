import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Link from 'next/link'

export default function DrawerLeft(props) {

  const { open } = props;

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    >
      <List>
      
        {[{text: 'Inbox', key: 'inbox'}, {text: 'Home', key: './'}, {text: 'Purchase NFT', key: './store'}, {text: 'My Waifu', key: './collection'}, {text: 'Matchmake', key: './matchmake'}, {text: 'Vote', key: './voting'}, {text: 'My Profile', key: './profile'}].map((obj, index) => (
           <Link href={`/${obj.key}`}>
                <ListItem key={obj.text} disablePadding sx={{marginTop: 1}}>
                    <ListItemButton>
                    <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={obj.text} />
                    </ListItemButton>
                </ListItem>
           </Link> 
         
        ))}
      </List>
    </Box>
  );

  

  return (
    <div>
        <React.Fragment>
            <Drawer 
                elevation={0}
                open={open}
            >
                {list()}
            </Drawer>
        </React.Fragment>
    </div>
  );
}