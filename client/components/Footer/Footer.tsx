import { GitHub, Telegram } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import styles from './Footer.module.css';

const Footer:React.FC = () => {
    return (
        <footer className={styles.footer}>
            <IconButton href="https://github.com/AndrewVLG">
                <GitHub sx={{color: 'white'}}/>
            </IconButton>
            <IconButton href="https://t.me/@Breykin">
                <Telegram sx={{color: 'white'}}/>
            </IconButton>
        </footer>
    )
}

export default Footer;