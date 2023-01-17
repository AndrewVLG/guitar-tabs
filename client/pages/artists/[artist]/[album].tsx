import Song from "../../../components/Song/Song";
import SongsList from "../../../components/SongsList/SongsList";
import Layout from "../../../layouts/Layout";
import React from 'react';
import { GetServerSideProps } from "next";
import { OneAlbum } from "../../../types/album";
const Album = ({album}:{album:OneAlbum}) => {
    const [currentTab, setCurrentTab] = React.useState(album.songs[0].link)
    const changeTab = (link:string) => {
        setCurrentTab(link);
    };
    return (
        <>
            <Layout justifyContent="flex-start" alignContent="stretch" backgroundColor='#151215'>
                <SongsList  album={album} onChangeTab={changeTab}/>
                <div className="current-tab">
                    <embed src={currentTab} width='100%' />
                </div>
            </Layout>
            
            <style jsx>
                {`
                    .current-tab {
                        display: flex;
                        width: 65vw;                 
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
            album: album
        }
    }
}
export default Album;