import { OneAlbum } from '../../types/album';
import Song from '../Song/Song';
import SongPlayer from '../SongPlayer/SongPlayer';
import styles from './SongsList.module.css';

interface SongsListProps  {
    album: OneAlbum;
    onChangeTab: (arg: string) => void;
}
const SongsList:React.FC<SongsListProps> = (props) => {
    const songs = props.album.songs.map((song) => 
        <Song 
            artist={props.album.artist} 
            name={song.title} 
            audio={song.audio} 
            onChangeTab={() => props.onChangeTab(song.link)}
        />)
        
    return (
        <section className={styles['songs-list']}>
            <ul className={styles.container}>
                {songs}
            </ul>

            <SongPlayer />
        </section>
    )
}

export default SongsList;