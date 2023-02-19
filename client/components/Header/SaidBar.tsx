import React from 'react';
import { Drawer, List } from "@mui/material";
import styles from './Header.module.css';
import SideMenuButton from "../SideMenuButton/SideMenuButton";
import { Titles, Links, SideMenuButtons } from "../../types/SideMenuButtons";
interface SideBarProps {
    onCloseBar: () => void
}
const SideBar:React.FC<SideBarProps> = (props) => {
    const sideBarRef:React.LegacyRef<HTMLDivElement | undefined> = React.useRef();
    React.useEffect(() => {
      if(sideBarRef) {
        sideBarRef?.current?.addEventListener('click', (e) => {
          console.log(e.target)
        })
      }
    }, [])
    const sideMenuButtons: SideMenuButtons[] = [
      {title: Titles.HOME, link:Links.HOME},
      {title: Titles.ARTISTS, link: Links.ARTISTS},
      {title: Titles.GUITAR_TUNERS, link: Links.GUITAR_TUNERS},
      {title: Titles.ABOUT_Project, link: Links.ABOUT_Project},
    ]

    const buttons = sideMenuButtons.map((button, id) => 
      <SideMenuButton 
        key={id} 
        title={button.title} 
        link={button.link} 
        onCloseBar={props.onCloseBar}/> )
    return (
        <Drawer ref={sideBarRef} open={true} onClose={props.onCloseBar}  anchor='left'>
          <div className={styles['side-bar']}>
            <List>
              {buttons}
            </List>
          </div>
        </Drawer>
    )
}
export default SideBar;