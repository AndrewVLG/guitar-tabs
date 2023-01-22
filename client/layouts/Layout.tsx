import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
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
                <section className="container">
                    {props.children}
                </section>
            </ThemeProvider>

            <style jsx>
                {`
                    .container {
                            display: flex;
                            flex-direction: ${props.flexDirection || 'row'};
                            justify-content: ${props.justifyContent || 'center'};
                            flex-wrap: ${props.flexWrap || 'wrap'};
                            align-content: ${props.alignContent || 'center'};
                            height: 85vh;
                            background-color: ${props.backgroundColor || 'black'};
                    }
                `}
            </style>  
        </>


    )
}

export default Layout;

//#151215