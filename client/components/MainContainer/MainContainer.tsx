
import React from 'react';
import { Tab, Tabs, Box } from '@mui/material';
import Slider from '../Slider/Slider';
import styles from './MainContainer.module.css';
import { useRouter } from 'next/router';

const MainContainer = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = React.useState('');
  const [offset, setOffset] = React.useState(-3000);
  let timer: NodeJS.Timeout;
  const containerRef:React.LegacyRef<HTMLDivElement | undefined> = React.useRef();
  React.useEffect(() => {
    if(containerRef) {
      setContainerWidth(getComputedStyle(containerRef.current).width)
      setOffset(Number.parseInt(getComputedStyle(containerRef.current).width) * -2)
    }
  }, [])
  console.log(containerWidth)
  React.useEffect(() => {

    if (offset <= 0) {
      timer = setTimeout(() => setOffset(prev => {
        return prev + Number.parseInt(containerWidth)
      }), 5000)
    } else {
      setOffset(Number.parseInt(containerWidth) * -2)
    }
    return () => {
      console.log(timer);
      clearTimeout(timer)
    };
  }, [offset]);


  return (

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

      <div ref={containerRef} className={styles.box}>
        <Slider containerWidth={containerWidth} offset={offset} />
      </div>

    </div>
  )
}
export default MainContainer;