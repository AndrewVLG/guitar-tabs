import { useRouter } from "next/router";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import Layout from "../../../layouts/Layout"
import { Albums } from "../../../types/album";


const Index = () => {
    const albums:Albums[] = [
        {
            _id: '32t3t',
            title: 'Генератор зла',
            year: '1998',    
            picture: 'http://localhost:3030/albumscover/generator.jpg',
            tabs: ['', ''],
    
        },
        {
            _id: 'qweqweqw3yw',
            title: 'Генератор зла',
            year: '1998',
            picture: 'http://localhost:3030/albumscover/generator.jpg',
            tabs: ['', '']
        },
        {
            _id: 'qwe3124124yw',
            title: 'Генератор зла',
            year: '1998',
            picture: 'http://localhost:3030/albumscover/generator.jpg',
            tabs: ['', '']
        },
        {
            _id: 'qwe3124124yw',
            title: 'Генератор зла',
            year: '1998',
            picture: 'http://localhost:3030/albumscover/generator.jpg',
            tabs: ['', '']
        },


    ];
    
    const router = useRouter();
    const allAlbums = albums.map(album => <AlbumCard navigation={() => router.push(`/artists/${router.query.artist}/${album._id}`)} {...album}/>)
    console.log(router.query)
    return(
        <Layout backgroundColor="#151215" alignContent="flex-start">
            {allAlbums}
        </Layout>
    )
}
export default Index;