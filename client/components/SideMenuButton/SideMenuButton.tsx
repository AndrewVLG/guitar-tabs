import { Home, Info, LibraryMusic, Menu, MusicNote } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

interface PropsSideMenuButton {
    title: string
    link: string
}
const SideMenuButton:React.FC<PropsSideMenuButton> = ({title, link}) => {
    const router = useRouter();
    const icon = 
    title === 'Главная' && <Home />
    || title === 'Исполнители' && <LibraryMusic />
    || title === 'Гитарный тюнер' && <MusicNote />
    || title === 'О проекте' && <Info />
    || <MusicNote />;

    return (
        <ListItemButton onClick={() => router.push(link)}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItemButton>
    )
}

export default SideMenuButton;