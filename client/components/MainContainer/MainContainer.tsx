import React from 'react';
import { Tab, Tabs } from '@mui/material';
import Slider from '../Slider/Slider';
import styles from './MainContainer.module.css';
import { useRouter } from 'next/router';

const MainContainer = () => {
  const router = useRouter();
  const [containerWidth, setContainerWidth] = React.useState('');
  const [offset, setOffset] = React.useState(-3000);
  const holdOffset = React.useMemo(() => offset, [containerWidth]);
  let timer: NodeJS.Timeout;
  const containerRef:any = React.useRef();
  React.useEffect(() => {
    const proxyRef = new Proxy(containerRef, {
      get(target, prop) {
        if(prop in target) {
          return target[prop];
        } else {
          return 0;
        }
      }
    })
    setContainerWidth(getComputedStyle(proxyRef.current).width)
    setOffset(Number.parseInt(getComputedStyle(proxyRef.current).width) * -2)
    const foo = () => {
      setOffset(Number.parseInt(getComputedStyle(proxyRef.current).width) * -2)
      setContainerWidth(getComputedStyle(proxyRef.current).width)}
    window.addEventListener('resize', foo);
    return () => {
      removeEventListener('resize', foo)}
  }, [])

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
          value={holdOffset}
          label="Исполнители"
        />
        <Tab
          value={holdOffset / 2}
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