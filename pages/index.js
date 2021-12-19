// Components
import Head from 'next/head';
import Header from '../components/containers/Header/Header';
import {Box} from '@chakra-ui/react';



export default function Home() {
  return (
    <>
    <Head>
      <title>Crypto Punks</title>
    </Head>
    <Box bg='black'>
    <Header/>
    
    </Box>

    </>
  )
}
