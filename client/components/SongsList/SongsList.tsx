import Song from '../Song/Song';
import SongPlayer from '../SongPlayer/SongPlayer';
import styles from './SongsList.module.css';
const SongsList = () => {

    return (
        <div className={styles['songs-list']}>
            <Song />
            <SongPlayer />
        </div>
    )
}

export default SongsList;