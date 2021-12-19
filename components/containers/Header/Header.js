// Components
import { Box, Text, Input, Button } from "@chakra-ui/react";
import Image from "next/image";

// images
import HeaderImg from "../../../public/assets/Header/cryptopunk-logo.png";

// Icons
import { BsSearch as SearchIcon } from "react-icons/bs";
import { ImSwitch as ThemeSwitch } from "react-icons/im";

// Styles
import styles from "../../../styles/Header/HeaderStyles";

function Header() {
  return (
    <>
      <Box sx={styles.header}>
        <Box sx={styles.logoContainer}>
          <Image src={HeaderImg} alt="punks" sx={styles.punkLogo} />
        </Box>
        <Box sx={styles.searchBar}>
          <Box sx={styles.searchIconContainer}>
            <SearchIcon />
          </Box>
          <Input size="lg" placeholder="Search Punks" sx={styles.searchInput} />
        </Box>
        <Box sx={styles.headerItems}>
          <Text as="p">Drops</Text>
          <Text as="p">MarketPlace</Text>
          <Text as="p">Create</Text>
        </Box>
        <Box sx={styles.headerActions}>
          <Box sx={styles.themeSwitchContainer}>
            <ThemeSwitch sx={styles.themeSwitchIcon} />
          </Box>
        </Box>
<Box sx={styles.loginButton}>
<Button   bgGradient={[
    'linear(to-tr, teal.300, yellow.400)',
    'linear(to-t, blue.200, teal.500)',
    'linear(to-b, orange.100, purple.300)',
  ]}>Get In</Button>
</Box>

      </Box>
    </>
  );
}

export default Header;
