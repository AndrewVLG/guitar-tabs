import React from 'react';
import { Menu } from '@mui/icons-material';
import { Box, Button, Drawer } from '@mui/material';
import { useRouter } from 'next/router';
import styles from './Header.module.css';

const Header:React.FC = (props) => {
  const [sidePanelFlag, setSidePanelFlag] = React.useState(false);
  const router = useRouter();

    return(
    <div className={styles.header}>
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
              <Button onClick={() => router.push('/')}>Главная</Button>
            <Button onClick={() => router.push('/artists')}>Исполнители</Button>
            <Button onClick={() => router.push('/guitar_tuner')}>Гитарный тюнер</Button>
            <Button onClick={() => router.push('/about_project')}>О проекте</Button>
          </Box>
        </Drawer>
    </div>
    )
}
export default Header;