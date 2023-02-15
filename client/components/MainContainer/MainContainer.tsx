
import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import Slider from '../Slider/Slider';
import styles from './MainContainer.module.css';
import { useRouter } from 'next/router';

const MainContainer = () => {
  const router = useRouter();
  const [offset, setOffset] = React.useState(-3000);
  let timer: NodeJS.Timeout;

  React.useEffect(() => {

    if (offset <= 0) {
      timer = setTimeout(() => setOffset(prev => {
        return prev + 1500
      }), 5000)
    } else {
      setOffset(-3000)
    }
    return () => {
      console.log(timer);
      clearTimeout(timer)
    };
  }, [offset]);


  return (

    <div className={styles['main-container']}>
      {console.log(timer)}
      <Tabs
        variant='standard'
        indicatorColor='secondary'
        textColor='secondary'
        value={offset}
      >
        <Tab
          value={-3000}
          label="Исполнители"
        />
        <Tab
          value={-1500}
          label="Альбомы"
        />
        <Tab
          value={0}
          label="Табы"
        />
      </Tabs>

      <div className={styles.box}>
        <Slider offset={offset} />
      </div>

    </div>
  )
}
export default MainContainer;