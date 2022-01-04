import {AppProps} from 'next/app';
import { Header } from 'next/dist/lib/load-custom-routes';
import GlobalStyle from '../styles/GlobalStyle';


const app = ({Component, pageProps} : AppProps) => {
    return (
        <>
        <GlobalStyle/>
        <Header />
        <Component {...pageProps}/>
        </>
    )
}