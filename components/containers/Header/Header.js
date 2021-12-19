// Components
import {Box, Text, Input} from '@chakra-ui/react';
import Image from 'next/image';

// images
import HeaderImg from '../../../public/assets/Header/cryptopunk-logo.png'


// Icons
import {BsSearch as Search} from 'react-icons/bs'

// Styles 
import styles from '../../../styles/Header/HeaderStyles'

function Header() {
    return (
        <>  
<Box sx={styles.container}>
<Box sx={styles.leftContainer}>
<Image src={HeaderImg} alt='header punks'/>
</Box>
<Box sx={styles.searchContainer}>
    <Search style={{color: 'white'}}/> 
<Input size='lg' placeholder='search punks' border='none'/>
</Box>
<Box sx={styles.searchContainerTwo}>
</Box>
</Box>
        </>
    )
}

export default Header


