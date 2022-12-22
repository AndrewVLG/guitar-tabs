import { Button } from '@mui/material';
import { border } from '@mui/system';
import { useRouter } from 'next/router';
import React from 'react';
import TabsComponent from '../../components/Tabs/TabsComponent';
import Layout from "../../layouts/Layout";




const Index = () => {
    const [value, setValue] = React.useState<number>(0);
    const router = useRouter();
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }

    const artists:string[] = ['aria', 'black-sabbath', 'helloween', 'iron-maiden'];
    const artist:string = artists.map((img, id) => {
        if(value === id) {
            return img;
        }
    }).join('');
    
    return (
        <>
            <Layout backgroundColor='#151215'>
                <div className="content">
                    <TabsComponent items={['Ария', 'Black Sabbath', 'Helloween', 'Iron maiden']} value={value} handleChange={handleChange}/>
                    <div className='img-container'>
                        <Button 
                            onClick={() => router.push(`/artists/${artist}/`)}
                            sx={{height: "10%", width: '20%', fontSize: '150%'}} 
                            variant='outlined' 
                            color='primary'>Перейти</Button>
                    </div>
                </div>       
            </Layout> 

            <style jsx>
                {`
                .content {
                    width: 60vw;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .img-container {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 900px;
                    width: 1900px;
                    background-image: url('http://localhost:3030/img/${artist}.jpg');
                }
                `}
            </style>         
        </>
    )
}

export default Index;