
import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import Slider from '../Slider/Slider';
import styles from './MainContainer.module.css';
import { useRouter } from 'next/router';

const MainContainer = () => {
  const router = useRouter();
    const [offset, setOffset] = React.useState(-3000);
    let timer: any;

    React.useEffect(() => {
        if(offset < 1500) {
            timer = setTimeout(() => setOffset(prev => {
                return prev + 1500
              }), 5000)  
        } else {
            setOffset(-3000)
        }
        return () => clearTimeout(timer);
    }, [offset]);


    return(
        <div className={styles['main-container']}>

              <Tabs
                variant='standard'
                
                indicatorColor='secondary'
                textColor='secondary'
                value={offset}

              >
                <Tab
                  value={-3000}
                  label="Исполнители"
                  onClick={() => router.push('/')}
                />
                <Tab 
                  value={-1500} 
                  label="Альбомы" 
                  onClick={() => router.push('/albums')}  
                />
                <Tab 
                  value={0} 
                  label="Табы" 
                  onClick={() => router.push('/tabs')}
                />
              </Tabs>

        <div className={styles.box}>
          <Slider offset={offset}/>
        </div>

      </div>
    )
}
export default MainContainer;