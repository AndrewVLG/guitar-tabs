import { OneAlbum } from '../../types/album';
import Song from '../Song/Song';
import SongPlayer from '../SongPlayer/SongPlayer';
import styles from './SongsList.module.css';

interface SongsListProps  {
    album: OneAlbum;
    onChangeTab: (arg: string) => void;
}
const SongsList:React.FC<SongsListProps> = (props) => {
    const songs = props.album.songs.map((song) => <Song artist={props.album.artist} name={song.title} audio={song.audio} onChangeTab={() => props.onChangeTab(song.link)}/>)
    return (
        <div className={styles['songs-list']}>
            <div className={styles.container}>
                {songs}
            </div>

            <SongPlayer />
        </div>
    )
}

export default SongsList;