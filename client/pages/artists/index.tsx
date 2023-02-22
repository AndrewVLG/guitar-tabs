import { Button } from '@mui/material';
import { border } from '@mui/system';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import TabsComponent from '../../components/Tabs/TabsComponent';
import Layout from "../../layouts/Layout";
import { Artist, Artists } from '../../types/album';

const Index = ({artists}:InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const [value, setValue] = React.useState<number>(0);
    const router = useRouter();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }
    
    const artist = (data: any, value?:number | undefined, action?: string) => {
        try {
            if(action === 'names') {
                return data.map((artist:Artist) => {
                    const index = artist.name.indexOf('/');
                    return artist.name.slice(0, index);
                })
            } else {
                const artist = data.find((item:Artist, id:number) => id === value)
                const index = artist.name.indexOf('/');
                return {name: artist.name.slice(index + 1), _id: artist._id};
            }
        } catch(e) {
            return '';
        }
    }

    return (
        <>
            <Layout>
                <div className="content">
                    <TabsComponent items={artist(artists, undefined, 'names')} value={value} handleChange={handleChange}/>
                    <div className='img-container'>
                        <Button 
                            onClick={() => router.push(`/artists/${artist(artists, value)._id}/`)}
                            sx={{height: "10%", width: '20%', fontSize: '100%'}} 
                            variant='outlined' 
                            color='primary'>Перейти</Button>
                    </div>
                </div>    
            </Layout> 

            <style jsx>
                {`
                .content {
                    width: 60vw;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .img-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    width: 100vw;
                    background-image: url('http://localhost:3030/img/${artist(artists, value).name}.jpg');
                    background-size: cover;

                }
                @media(max-width: 600px) {
                    .img-container {
                        background-size: contain;
                        background-repeat: no-repeat;
                    }
                }
                `}
            </style>         
        </>
    )
}


export const getServerSideProps:GetServerSideProps = async () => {
    const response = await fetch('http://localhost:3030/artists');
    const artists: Artists[] = await response.json();
    return {
        props: {
            artists
        }
    }
}
export default Index;