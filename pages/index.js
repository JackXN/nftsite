import { useState, useEffect } from 'react';


// Components
import Head from 'next/head';
import Header from '../components/containers/Header/Header';
import {Box} from '@chakra-ui/react';
import CollectionCard from '../components/containers/PunkList/CollectionCard';
import PunkList from '../components/containers/PunkList/PunkList';

// axios
import axios from 'axios';
import Main from '../components/containers/Main/Main';



// const getStaticProps = async () => {
//   const res = await fetch (
//     'https://testnets-api.opensea.io/assets?asset_contract_address=0x63886Ddf668ffF226cfEE7415ceF62EA7A28bA8e&order_direction=asc'
//   );
//   const data = await res.json();
// console.log(res)

// return {
//   props: {data: data}
// }
// }



export default function Home({data}) {
const [punkListData, setPunkListData] = useState([]);
const [selectedPunk, setSelectedPunk] = useState(0);

useEffect(() => {
  const getMyData = async () => {
 const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0x63886Ddf668ffF226cfEE7415ceF62EA7A28bA8e&order_direction=asc')
 
 setPunkListData(openseaData.data.assets)

  }

  getMyData()
}, [])




  return (
    <>
    <Head>
      <title>Crypto Punks</title>
    </Head>
    <Box bg='black'>
    <Header/>
    <Main/>
   <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>

    </Box>

    </>
  )
}
