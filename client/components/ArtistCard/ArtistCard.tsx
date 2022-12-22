import { useRouter } from 'next/router';
import { Artist, Artists } from '../../types/album';
import styles from './ArtistCard.module.css';

const ArtistCard:React.FC<Artists> = (props) => {
    const router = useRouter();
    
    return (
        <div onClick={() => router.push('/artists/' + props._id)} className={styles.wrap}>
            <div className={styles['picture-container']}>
                <img src={props.picture}/>
            </div>
            <div className={styles['description-container']}>
                <h3>{`Исполнитель: ${props.name}`}</h3>
                <h4>{`Год создания группы: ${props.year}`}</h4>
            </div>
        </div>
    )
}

export default ArtistCard;