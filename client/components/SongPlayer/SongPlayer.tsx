import { PauseCircle, PlayCircle, StopCircle } from '@mui/icons-material';
import { IconButton, Slider } from '@mui/material';
import React, { useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import styles from './SongPlayer.module.css';

const SongPlayer = () => {
    const {playTrack, pauseTrack, init, setVolume, setDuration, setCurrentTime} = useActions();
    const audioRef:any = React.useRef();
    const {currentTime, play, track, volume, duration, name} = useTypedSelector(state => state.player);
    useEffect(() => {
        audioRef.current.pause()
        audioRef.current.volume = volume / 100
        init(audioRef);
        audioRef.current.onloadedmetadata = () => {
            setDuration(audioRef.current.duration)
        }
        audioRef.current.ontimeupdate = () => {
            setCurrentTime(audioRef.current.currentTime)
        }

    }, []);

    useEffect(() => {
        audioRef.current.src = track;
        audioRef.current.play();
    }, [track]);
    
    const playbackControl = (play: boolean) => {
        if(!play) {
            playTrack();
            audioRef.current.play()
            return;
        }
        pauseTrack();
        audioRef.current.pause()
    }
    const changeVolume = (event: Event, newValue: number | number[]) => {
        audioRef.current.volume = newValue as number / 100
        setVolume(newValue as number)
    }
    const cnangeCurrentTime = (event: Event, newValue: number | number[]) => {
        audioRef.current.currentTime = newValue as number
        setCurrentTime(newValue as number)
    }
    return (
        <div className={styles.wrap}>
            <audio ref={audioRef}></audio>
            <div className={styles['progress-bar']}>

                <Slider value={currentTime} max={duration} onChange={cnangeCurrentTime}/>
            </div>
            <div className={styles['control-panel']}>
                <div className={styles.btns}>
                    <IconButton  onClick={() => playbackControl(play)}>
                        {!play 
                            ? <PlayCircle sx={{color: 'red'}} fontSize='large'/>
                            : <PauseCircle sx={{color: 'red'}} fontSize='large'/>}
                    </IconButton>
                </div>

                <div className={styles['song-name']}>
                    <h3>{name}</h3>
                </div>
                <div className={styles.volume}>
                    <label>Volume</label>
                    <Slider defaultValue={30} onChange={changeVolume} sx={{color: 'white'}}/>
                </div>

            </div>

        </div>
    )
}

export default SongPlayer;