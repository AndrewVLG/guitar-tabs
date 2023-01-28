import React from 'react';
import { Home, Info, LibraryMusic, Menu, MusicNote } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './Header.module.css';
import SideMenuButton from '../SideMenuButton/SideMenuButton';

type Tile = 'Главная' | 'Исполнители' | 'Гитарный тюнер' | 'О проекте';
type Link = '/' | '/artists' | '/guitar_tuner' | '/about_project';
export interface SideMenuButton {
  title: Tile
  link: Link
}

const Header:React.FC = () => {
  const [sidePanelFlag, setSidePanelFlag] = React.useState(false);
  const router = useRouter();
    const sideMenuButtons: SideMenuButton[] = [
      {title:'Главная', link: '/'},
      {title: 'Исполнители', link: '/artists'},
      {title: 'Гитарный тюнер', link: '/guitar_tuner'},
      {title: 'О проекте', link: '/about_project'}
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