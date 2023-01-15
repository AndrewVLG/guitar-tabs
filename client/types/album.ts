export interface Tab {
    _id: string
    title: string
    album: string
    link: string
    text: string
}

export interface Album {
    _id: string
    title: string
    year: string
    picture: string
    tabs: string[]
    songs: Tab[]
}
export interface OneAlbum {
    _id: string
    artist: string
    title: string
    year: string
    description: string
    picture: string
    tabs: string[]
}



export interface Albums {
    _id: string
    title: string
    year: string
    picture: string
    tabs: string[]
}

export interface Artist {
    _id: string
    name: string
    description: string
    year: string
    picture: string
    albums: Album[]
}

export interface Artists {
    _id: string
    name: string
    year: string
    picture: string
    albums: string[]
}