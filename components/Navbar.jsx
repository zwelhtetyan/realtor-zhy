import Link from 'next/link';
import {
  Box,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

export default function Navbar() {
  return (
    <Flex justify='center' align='center' w='full' boxShadow='base' p='2'>
      <Flex w='full' maxW='container.lg' align='center'>
        <Box fontSize='3xl' fontWeight='bold' color='blue.400'>
          <Link href='/'>Realtor</Link>
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<FcMenu size={24} />}
              variant='outline'
            />
            <MenuList>
              <Link href='/' passHref>
                <MenuItem icon={<FcHome />} py={2}>
                  Home
                </MenuItem>
              </Link>
              <Link href='/search' passHref>
                <MenuItem icon={<BsSearch />} py={2}>
                  Search
                </MenuItem>
              </Link>
              <Link href='/search?purpose=for-sale' passHref>
                <MenuItem icon={<FcAbout />} py={2}>
                  Buy Property
                </MenuItem>
              </Link>
              <Link href='/search?purpose=for-rent' passHref>
                <MenuItem icon={<FiKey />} py={2}>
                  Rent Property
                </MenuItem>
              </Link>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Flex>
  );
}
