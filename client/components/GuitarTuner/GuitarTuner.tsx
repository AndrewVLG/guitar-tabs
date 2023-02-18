import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';
import styles from './GuitarTuner.module.css';
import { color } from '@mui/system';
import { GuitarFormation } from '../../types/tuner';
import TunerButton from '../TunerButton/TunerButton';
interface GuitarTunerProps {
  formations: GuitarFormation [],
}
const GuitarTuner:React.FC<GuitarTunerProps> = ({formations}) => {
    const [currentString, setCurrentString] = React.useState<string>(formations[0].formation[0]);
    const [isPlay, setPlay] = React.useState<boolean>(false);
    const [name, setName] = React.useState<string>(formations[0].name);
    const tunerRef:any = React.useRef();
    const handleChange = (event: SelectChangeEvent) => {
        setName(event.target.value);
    };
    const changeStatus = (value: boolean, string: string) => {
      setCurrentString(string)
      setPlay(value);
    }
    React.useEffect(() => {
      if(isPlay) {
        tunerRef.current.src = currentString;
        tunerRef.current.play();
      } else {
        tunerRef.current.pause();
      }

    }, [currentString, isPlay]);

    const menuItems = formations.map(formation => <MenuItem value={formation.name}>{formation.name}</MenuItem>);

    const getStrings = () => {
      let buttonElem: any = []
      formations.forEach((formation, id) => {
        if(formation.name === name) {
          buttonElem = formation.formation.map((string, id) => <TunerButton key={id} string={id} currentString={currentString} link={string} changeStatus={changeStatus}/>)
        }
      });
      return buttonElem;
    };

    return (
        <div className={styles.tuner}>
        <audio ref={tunerRef}></audio>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120, color: 'black', backgroundColor: 'white'}}>
        <InputLabel sx={{color: 'white'}}>Строй</InputLabel>
        <Select
            variant='outlined'
            onChange={handleChange}
            value={name}
        >
        
        {menuItems}
        </Select>
      </FormControl>
      {getStrings()}
        </div>
    )
}
export default GuitarTuner;