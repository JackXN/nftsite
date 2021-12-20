// Components
import {Box} from '@chakra-ui/react';
import CollectionCard from './CollectionCard';


// Styles
import styles from '../../../styles/PunkList/PunkListStyles';

function PunkList({punkListData}) {
    return (
        <>
        <Box sx={styles.punkList}>
            {punkListData.map(punk => (
                <Box key={punk.token_id}>
                    <CollectionCard
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    />
                    </Box>
            ))}
        </Box>
        </>
    )
}

export default PunkList
