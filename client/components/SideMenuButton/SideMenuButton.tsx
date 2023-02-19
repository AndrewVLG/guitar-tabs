import { Home, Info, LibraryMusic, Menu, MusicNote } from '@mui/icons-material';
import { Box, Button, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { useRouter } from 'next/router';

interface PropsSideMenuButton {
    title: string
    link: string
    onCloseBar: () => void
}
const SideMenuButton:React.FC<PropsSideMenuButton> = ({title, link, onCloseBar}) => {
    const router = useRouter();
    const icon = 
    title === 'Главная' && <Home />
    || title === 'Исполнители' && <LibraryMusic />
    || title === 'Гитарный тюнер' && <MusicNote />
    || title === 'О проекте' && <Info />
    || <MusicNote />;
    const switching = () => {
        onCloseBar()
        router.push(link)
    }
    return (
        <ListItemButton onClick={switching}>
            <ListItemIcon>
              {icon}
            </ListItemIcon>
            <ListItemText primary={title}/>
        </ListItemButton>
    )
}

export default SideMenuButton;