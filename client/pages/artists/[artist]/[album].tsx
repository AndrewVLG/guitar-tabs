import Song from "../../../components/Song/Song";
import SongsList from "../../../components/SongsList/SongsList";
import Layout from "../../../layouts/Layout";
import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { OneAlbum } from "../../../types/album";
const Album = ({album}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [currentTab, setCurrentTab] = React.useState(album.songs[0].link)
    const changeTab = (link:string) => {
        setCurrentTab(link);
    };
    return (
        <>
            <Layout>
                <div className="wrap">
                    <SongsList  album={album} onChangeTab={changeTab}/>
                    <section className="current-tab">
                        <embed src={currentTab} width='100%' />
                    </section>
                </div>
            </Layout>
            
            <style jsx>
                {`
                    .wrap {
                        display: flex;
                        width: 100vw;
                        height: 100%;
                    }
                    .current-tab {
                        display: flex;
                        width: 65vw;                 
                    }
                    @media(max-width: 600px) {
                        .current-tab {
                            display: none;
                        }
                    }
                `}
            </style>  
        </>

    )
}
export const getServerSideProps:GetServerSideProps = async ({params}) => {

    const response = await fetch(`http://localhost:3030/albums/${params?.album}`);
    const data = await response.json();
    const album:OneAlbum = data;
    return {
        props: {
            album
        }
    }
}
export default Album;