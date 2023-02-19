import React from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import SongPlayer from "../components/SongPlayer/SongPlayer";
import Layout from "../layouts/Layout"
import { Song } from "../types/album";
import { useActions } from '../hooks/useActions';
import { Button } from '@mui/material';
import { useTypedSelector } from '../hooks/useTypedSelector';


const OneSong = ({song}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const {setActiveTrack} = useActions();
    const { audioRef } = useTypedSelector(state => state.player);
    console.log(audioRef)
    React.useEffect(() => {
        console.log(song.audio)
        setActiveTrack({track: song.audio, name: song.title})
    }, [])
    return (
        <>
            <Layout>
                <div className='current-tab'>
                    <embed className="tab" src={song.link} width='100%'/>
                    <SongPlayer />
                </div>
            </Layout>
            <style jsx>
                {`
                    .current-tab {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        width: 50vw;             
                    }
                    .tab {
                        height: 100%;
                    }
                `}
            </style>     
        </>

    )
}
export default OneSong;
export const getServerSideProps:GetServerSideProps = async ({params}) => {

    const response = await fetch(`http://localhost:3030/tabs/${params?.song}`);
    const song: Song = await response.json();
    return {
        props: {
            song
        }
    }
}