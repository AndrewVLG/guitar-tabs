import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import GuitarTuner from "../../components/GuitarTuner/GuitarTuner";
import Layout from "../../layouts/Layout";
import { GuitarFormation } from "../../types/tuner";


const Index = ({formations}:{formations:GuitarFormation []}) => {
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

export const getServerSideProps:GetServerSideProps = async () => {

    const response = await fetch('http://localhost:3030/formations');
    const data = await response.json();
    return {
        props: {
            formations: data
        }
    }
}