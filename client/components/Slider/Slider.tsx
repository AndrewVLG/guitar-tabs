import SliderElement from '../SliderElement/SliderElement';
import styles from './Slider.module.css';
interface SliderProps {
    offset: number
}

const Slider:React.FC<SliderProps> = (props) => {

    return (
        <div className={styles.wrap} style={{left: props.offset}}>
            <SliderElement color='white' title='Табы' description='Большая коллекция гитарных табулатур' picture='1235564758'/>
            <SliderElement color='black' title='Альбомы' description=''  picture='f721afdca2704f1f38e45672e85e83d6123'/>
            <SliderElement color='white' title='Рок-легенды' description='Любимые рок исполнители' picture='3657356'/>
        </div>
    )
}

export default Slider;
