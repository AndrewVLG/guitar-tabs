import aboutProject from "../pages/about_project"

export enum Titles {
    HOME = "Главная",
    ARTISTS = 'Исполнители',
    GUITAR_TUNERS = 'Гитарный тюнер',
    ABOUT_Project = 'О проекте',
}
export enum Links {
    HOME = "/",
    ARTISTS = '/artists',
    GUITAR_TUNERS = '/guitar_tuner',
    ABOUT_Project = '/about_project',
}
  
interface HomeButton {
    title: Titles.HOME
    link: Links.HOME
}
interface ArtistButton {
    title: Titles.ARTISTS
    link: Links.ARTISTS
}
interface GuitarTunerButton {
    title: Titles.GUITAR_TUNERS
    link: Links.GUITAR_TUNERS
}
interface AboutProjectButton {
    title: Titles.ABOUT_Project
    link: Links.ABOUT_Project
}

export type SideMenuButtons = 
HomeButton
| ArtistButton
| GuitarTunerButton
| AboutProjectButton