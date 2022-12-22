import { PlayCircle } from '@mui/icons-material';
import { IconButton, Slider } from '@mui/material';
import styles from './SongPlayer.module.css';
const SongPlayer = () => {

    return (
        <div className={styles.wrap}>
            <div className={styles['progress-bar']}>
                <Slider />
            </div>
            <div className={styles['control-panel']}>
                <div className={styles.btns}>
                    <IconButton>
                        <PlayCircle sx={{color: 'red'}} fontSize='large'/>
                    </IconButton>
                </div>

                <div className={styles['song-name']}>
                    <h3>Ария - Грязь</h3>
                </div>
                <div className={styles.volume}>
                    <label>Volume</label>
                    <Slider sx={{color: 'white'}}/>
                </div>

            </div>

        </div>
    )
}

export default SongPlayer;