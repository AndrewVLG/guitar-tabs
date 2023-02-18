import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
interface Layout {
    flexDirection?: 'row' | 'column'
    justifyContent?: 'flex-start' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
    flexWrap?: 'unwrap' | 'wrap'
    backgroundColor?: 'black' | '#151215'
    alignContent?: 'flex-start' | 'center' | 'stretch'
    children: React.ReactNode
}

const theme = createTheme({
    palette: {
      secondary: {
        main: '#f7f7f7'
      },
      primary: {
        main: '#FF0700'
      }
    }
  })

const Layout:React.FC<Layout> = (props) => {

    return (
        <>
            <ThemeProvider theme={theme}>
                <Header />
                <div className="container">
                    {props.children}
                </div>
                <Footer />
            </ThemeProvider>

            <style jsx>
                {`
                    .container {
                            display: flex;
                            flex-direction: ${props.flexDirection || 'row'};
                            justify-content: ${props.justifyContent || 'center'};
                            flex-wrap: ${props.flexWrap || 'wrap'};
                            align-content: ${props.alignContent || 'center'};
                            height: 80vh;
                            background-color: ${props.backgroundColor || 'black'};
                    }
                `}
            </style>  
        </>


    )
}

export default Layout;

