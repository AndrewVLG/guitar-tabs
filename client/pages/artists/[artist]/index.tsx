import { useRouter } from "next/router";
import AlbumCard from "../../../components/AlbumCard/AlbumCard";
import Layout from "../../../layouts/Layout"
import { Artist, OneAlbum } from "../../../types/album";
import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Typography } from "@mui/material";
const Index = ({artist}:InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const router = useRouter();
    const allAlbums = artist.albums.map((album: OneAlbum, id: number) => <AlbumCard navigation={() => router.push(`/artists/${router.query.artist}/${album._id}`)} {...album} key={id}/>)

    return(
        <>
            <Layout>
                <div className="wrap">
                    {allAlbums}
                </div>
            </Layout>
            <style jsx>
                {`
                    .wrap {
                        display: flex;
                        height: 100%;
                        width: 100vw;
                    }
                    @media(max-width: 600px) {
                        .wrap {
                            flex-direction: column;
                            align-items: center;
                        }
                    }
                `}
            </style>    
        </>

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


