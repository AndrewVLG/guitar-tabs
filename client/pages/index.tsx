import React from 'react';
import { createTheme, Drawer, ThemeProvider, Box, Button } from '@mui/material';
import Header from '../components/Header/Header';
import MainContainer from '../components/MainContainer/MainContainer';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';
import Layout from '../layouts/Layout';

const theme = createTheme({
  palette: {
    secondary: {
      main: '#f7f7f7'
    }
  }
})
const Home = () => {


  return (
      <Layout>
        <MainContainer />
      </Layout>





    
    
    
  )
}
export default Home;

//  background-image: ('http://localhost:3030/img/41383e49758787fc7e444e40eae210fa.jpg');