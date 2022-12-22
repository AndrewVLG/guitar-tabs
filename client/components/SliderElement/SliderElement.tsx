import { url } from 'inspector';
import styles from './SliderElement.module.css';
interface SliderElementProps {
    picture: string
    title: string
    description?: string
    color?: string

}
const SliderElement:React.FC<SliderElementProps> = (props) => {

    return (
        <div className={styles.element} style={{backgroundImage: `url(http://localhost:3030/img/${props.picture}.jpg)`, color: props.color}}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default SliderElement;