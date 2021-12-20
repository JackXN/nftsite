import { useState, useEffect } from 'react';

// Components
import {Box, Image} from '@chakra-ui/react';
// import Image from 'next/image'

// Styles
import styles from '../../../styles/PunkList/CollectionCardStyles';

// assets
import weth from '../../../public/Images/weth.png'


function CollectionCard({id, name,traits,image}) {
    return (
        <>
     <Box sx={styles.collectionCard}>
<Image src={image} alt='collection card'/>
<Box sx={styles.details}>
<Box sx={styles.name}>
    {name} <Box sx={styles.id}>.#{id}</Box>
    </Box>
</Box>
<Box sx={styles.priceContainer}>
    <Image src={weth} sx={styles.wethImage} alt='Yo'/>
    <Box sx={styles.price}>{traits[0]?.value}</Box>
</Box>
     </Box>
     </>
    )
}

export default CollectionCard
