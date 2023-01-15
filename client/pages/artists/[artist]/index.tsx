import { useRouter } from "next/router";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import Layout from "../../../layouts/Layout"
import { Album, Artist, OneAlbum } from "../../../types/album";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
const Index = ({artist}:{artist:Artist}) => {

    const router = useRouter();
    const allAlbums = artist.albums.map(album => <AlbumCard navigation={() => router.push(`/artists/${router.query.artist}/${album._id}`)} {...album}/>)

    return(
        <Layout backgroundColor="#151215" alignContent="flex-start">
            {allAlbums}
        </Layout>
    )
}
export const getServerSideProps:GetServerSideProps = async ({query, params}) => {

    const response = await fetch(`http://localhost:3030/artists/${params?.artist}`);
    const data:Artist = await response.json();
    return {
        props: {
            artist: data
        }
    }
}
export default Index;


