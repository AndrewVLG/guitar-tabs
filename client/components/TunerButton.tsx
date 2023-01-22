import { PauseCircle, PlayCircle } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
interface TunerButtonProps {
    string: number,
    currentString: string,
    link: string,
    changeStatus: (value: boolean, string: string) => void,
    
}
const TunerButton: React.FC<TunerButtonProps> = (props) => {
    console.log(props.link);
    const [isPlay, setPlay] = React.useState<boolean>(true);
    const startPlayback = (bool: boolean) => {
        props.changeStatus(bool, props.link);
        setPlay(prev => !prev);
    }
    if(!isPlay && props.link !== props.currentString) {
        setPlay(true);
    }
    return (
        <>
            <label style={{color: 'white'}}>{`${props.string + 1}st`}</label>
            <IconButton onClick={() => startPlayback(isPlay)}>
                {isPlay ? <PlayCircle sx={{color: 'red'}} fontSize='large'/> : <PauseCircle sx={{color: 'red'}} fontSize='large'/>}
                

            </IconButton>
        </>
    )
}

export default TunerButton;