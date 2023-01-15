import { useRouter } from 'next/router';
import { Album } from '../../types/album';
import styles from './AlbumCard.module.css';

const AlbumCard:React.FC<any> = (props) => {
    const router = useRouter();

    return (
        <div onClick={props.navigation} className={styles.wrap}>
            <div className={styles['picture-container']}>
                <img src={props.picture}/>
            </div>
        </div>
    )
}


export default AlbumCard;