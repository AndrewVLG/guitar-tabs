import SliderElement from '../SliderElement/SliderElement';
import styles from './Slider.module.css';
interface SliderProps {
    offset: number;
    containerWidth: string;
}

const Slider:React.FC<SliderProps> = (props) => {
    const arr = [
        {
            color: 'white',
            title: 'Табы',
            description: 'Большая коллекция гитарных табулатур',
            picture: '1235564758',
        },
                {
            color: 'black',
            title: 'Альбомы',
            description: '',
            picture: 'f721afdca2704f1f38e45672e85e83d6123',
        },
                {
            color: 'white',
            title: 'Рок-легенды',
            description: 'Любимые рок исполнители',
            picture: '3657356',
        },
    ];
    const images = arr.map(elem => <SliderElement {...elem} width={props.containerWidth}/>)
    return (
        <div className={styles.wrap} style={{left: props.offset}}>
            {images}
        </div>
    )
}

export default Slider;
