import React from 'react';
import { Home, Info, LibraryMusic, Menu, MusicNote } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import SideMenuButton from '../SideMenuButton/SideMenuButton';
import { SideMenuButtons, Links, Titles } from '../../types/SideMenuButtons';

const Header:React.FC = () => {
  const [sidePanelFlag, setSidePanelFlag] = React.useState(false);
  const router = useRouter();
    const sideMenuButtons: SideMenuButtons[] = [
      {title: Titles.HOME, link:Links.HOME},
      {title: Titles.ARTISTS, link: Links.ARTISTS},
      {title: Titles.GUITAR_TUNERS, link: Links.GUITAR_TUNERS},
      {title: Titles.ABOUT_Project, link: Links.ABOUT_Project},
    ]

    const buttons = sideMenuButtons.map((button, id) => <SideMenuButton key={id} title={button.title} link={button.link}/> )
    return(
    <header className={styles.header}>
        <div className={styles['label-container']}>
          <label>Guitar-tabs</label>
          <Button onClick={() => setSidePanelFlag(true)} color='secondary' variant='outlined' sx={{height: "30%", width: '25%'}}>
            <Menu color='secondary' fontSize='large'/>
          </Button>
        </div>
        <Drawer open={sidePanelFlag} onClose={() => setSidePanelFlag(false)} anchor='left'>
          <Box sx={
            {
              display: 'flex',
              flexDirection: 'column',
              width: '20vw', 
              backgroundColor: 'white'
              
            }}>
            <List>
              {buttons}
            </List>
          </Box>
        </Drawer>
    </header>
    )
}
export default Header;