import { Button } from "@mui/material";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from "next";
import GuitarTuner from "../../components/GuitarTuner/GuitarTuner";
import Layout from "../../layouts/Layout";
import { GuitarFormation } from "../../types/tuner";


const Index = ({formations}:InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            <Layout alignContent="flex-start">
                <div className="content">
                    <GuitarTuner formations={formations}/>
                </div>

            </Layout>

            <style jsx>
                {`
                    h1 {
                        color: white;
                        text-align: center;
                    }
                    .content {
                        display: flex;
                        flex-direction: column;
                        width: 40vw;
                        height: 100%;
                    }
                `}
            </style>
        </>


    )
}
export default Index;

export const getStaticProps:GetStaticProps = async () => {

    const response = await fetch('http://localhost:3030/formations');
    const formations: GuitarFormation [] = await response.json();
    return {
        props: {
            formations
        }
    }
}