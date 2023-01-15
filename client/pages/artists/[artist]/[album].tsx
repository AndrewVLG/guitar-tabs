import Song from "../../../components/Song/Song";
import SongsList from "../../../components/SongsList/SongsList";
import Layout from "../../../layouts/Layout";
import React from 'react';
import { GetServerSideProps } from "next";
const Album = ({album}) => {
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
export const getServerSideProps:GetServerSideProps = async ({query, params}) => {

    const response = await fetch(`http://localhost:3030/albums/${params.album}`);
    const data = await response.json();
    return {
        props: {
            album: data
        }
    }
}
export default Album;