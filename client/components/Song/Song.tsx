import { PlayCircle } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import styles from './Song.module.css';
const Song = () => {

    return (
        <div className={styles.wrap}>
            <IconButton >
                <PlayCircle fontSize="large" sx={{color: 'red'}}/>
            </IconButton>
            <div className={styles['song-name']}>
                <Button fullWidth>Ария - Грязь</Button>
            </div>
        </div>
    )
}

export default Song;