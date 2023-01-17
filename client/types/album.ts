export interface Song {
    _id: string
    title: string
    album: string
    link: string
    text: string
    audio: string

}


export interface OneAlbum {
    _id: string
    artist: string
    title: string
    year: string
    description: string
    picture: string
    songs: Song[]
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
    albums: OneAlbum[]
}

export interface Artists {
    _id: string
    name: string
    year: string
    picture: string
    albums: string[]
}