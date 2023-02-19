import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import React from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ActionSetTrack } from "../../types/player";
import styles from './Song.module.css';
interface SongProps {
    artist: string
    name: string
    audio: string
    onChangeTab: () => void
}
const Song:React.FC<SongProps> = (props) => {

    const [isPlay, setPlay] = React.useState(false)
    const { setActiveTrack } = useActions();
    const { play, track } = useTypedSelector(state => state.player);
    const changeTrack = (trackInfo:ActionSetTrack, play: boolean) => {
        setActiveTrack(trackInfo);
        setPlay(true)
    }
    if(isPlay && props.audio !== track) {
        setPlay(false);
    }

    return (
        <li className={styles.wrap}>
            <IconButton disabled={props.audio.length < 1} onClick={() => changeTrack({track: props.audio, name: `${props.artist} - ${props.name}`}, play)}>
                {!isPlay
                    ?<PlayCircle  fontSize="large" sx={{color: 'red'}}/>
                    :<PauseCircle fontSize="large" sx={{color: 'red'}}/>}
            </IconButton>
            <div className={styles['song-name']}>
                <Button onClick={props.onChangeTab} fullWidth>{`${props.artist} - ${props.name}`}</Button>
            </div>
        </li>
    )
}

export default Song;