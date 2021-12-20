// Components
import {Box, Image} from '@chakra-ui/react';

// Styles
import styles from '../../../styles/Main/MainStyles';

function Main() {
    return (
        <Box sx={styles.main}>
            <Box sx={styles.mainContent}>
                <Box sx={styles.punkHighlight}>
                    <Box sx={styles.punkContainer}>
                        <Image src={'https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=s0'} alt='' sx={styles.selectedPunk}/>
                    </Box>
                </Box>
            <Box sx={styles.punkDetails} color='white'>
        <Box sx={styles.title}>
            BandanaPunk
        </Box>
        <span style={{color: '#a1a5b0', fontSize: '72px', alignSelf: 'center'}}>#1</span>
            </Box>
            <Box sx={styles.ownerDetails}>
                <Box sx={styles.ownerImageContainer}>
                    <Image src={'https://lh3.googleusercontent.com/WrmpbMJMKmGfjJRCu2b0Bp_Pk2iPZcuRXyqPj7p3-I19DKHlIluigjdiwsnUZA28ssIQcydOnYgD2f6Qra05gFMZHWuojV1JSbM=s0'} alt=''/>
                    <Box sx={styles.ownerDetails}>
                        <Box sx={styles.ownerNameAndHandle}>
                            <Box>8272h31hhd819h2ehd289h1</Box>
                            <Box sx={styles.ownerHandle}>@JackRigan</Box>

                        </Box>
                    </Box>
                </Box>
            </Box>
            </Box>
        </Box>
    )
}

export default Main
