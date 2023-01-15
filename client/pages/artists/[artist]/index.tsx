import { useRouter } from "next/router";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import Layout from "../../../layouts/Layout"
import { Album, OneAlbum } from "../../../types/album";
import React from "react";
import { GetServerSideProps } from "next";
const Index = ({artist}) => {
    console.log(artist.albums)

    const router = useRouter();
    const [data, setData] = React.useState([])
    const allAlbums = artist.albums.map(album => <AlbumCard navigation={() => router.push(`/artists/${router.query.artist}/${album._id}`)} {...album}/>)


    React.useEffect(() => {
        const fetchData = async () => {

            const response = await fetch(`http://localhost:3030/artists/${router.query.artist}`);
            const data = await response.json();
            setData(data);
    
        }
        fetchData()
    }, [])
    console.log(data.albums)
    return(
        <Layout backgroundColor="#151215" alignContent="flex-start">
            {allAlbums}
        </Layout>
    )
}
export const getServerSideProps:GetServerSideProps = async ({query, params}) => {

    const response = await fetch(`http://localhost:3030/artists/${params.artist}`);
    const data = await response.json();
    return {
        props: {
            artist: data
        }
    }
}
export default Index;