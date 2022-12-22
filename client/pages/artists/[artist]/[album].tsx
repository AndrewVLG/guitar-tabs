import Song from "../../../components/Song/Song";
import SongsList from "../../../components/SongsList/SongsList";
import Layout from "../../../layouts/Layout"

const Album = () => {

    return (
        <>
            <Layout justifyContent="flex-start" alignContent="stretch" backgroundColor='#151215'>
                <SongsList />
                <div className="current-tab">
                    <embed src="http://localhost:3030/tabs/generator/filth.pdf" width='100%' />
                </div>
            </Layout>
            
            <style jsx>
                {`
                    .current-tab {
                        display: flex;
                        width: 67vw;                 
                    }
                `}
            </style>  
        </>

    )
}
export default Album;