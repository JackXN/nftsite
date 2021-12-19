// Components
import {Box, Text, Input} from '@chakra-ui/react';
import Image from 'next/image';

// images
import HeaderImg from '../../../public/assets/Header/cryptopunk-logo.png'


// Icons
import {BsSearch as SearchIcon} from 'react-icons/bs';

// Styles 
import styles from '../../../styles/Header/HeaderStyles';

function Header() { 
    return (
        <>  
<Box sx={styles.header}>
    <Box sx={styles.logoContainer}>
        <Image src={HeaderImg} alt='punks' sx={styles.punkLogo}/>
    </Box>
    <Box sx={styles.searchBar}>
        <Box sx={styles.searchIconContainer}>
            <SearchIcon/>
        </Box>
        <Input size='lg' placeholder='Search Punks' sx={styles.searchInput}/>
    </Box>


    <Box sx={styles.headerItems}>
        <Text as='p'>Drops</Text>
        <Text as='p'>MarketPlace</Text>
        <Text as='p'>Create</Text>

    </Box>
</Box>
        </>
    )
}

export default Header


