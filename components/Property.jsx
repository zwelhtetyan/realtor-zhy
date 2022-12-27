import { HiCheckBadge } from 'react-icons/hi2';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import millify from 'millify';
import Image from 'next/image';
import Link from 'next/link';
import defaultPropertyImg from '../assets/images/defaultPropertyImg.jpg';

export default function Property({
  coverPhoto,
  price,
  rentFrequency,
  rooms,
  title,
  baths,
  area,
  agency,
  isVerified,
  externalID,
}) {
  return (
    <Box width={350} m={3} mb={5}>
      <Link href={`property/${externalID}`} passHref>
        <Image
          placeholder='blur'
          blurDataURL={coverPhoto?.url}
          src={coverPhoto?.url || defaultPropertyImg}
          width={400}
          height={260}
          alt='property_img'
          priority
          style={{
            width: '100%',
            height: '230px',
            borderRadius: '5px',
            objectFit: 'cover',
          }}
        />

        <Box>
          <Flex pt='2' align='center' justify='space-between'>
            <Flex alignItems='center'>
              <Box pr='3' color='green.400' fontSize='xl'>
                {isVerified && <HiCheckBadge />}
              </Box>
              <Text fontWeight='bold' fontSize='lg'>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>

            <Box>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Box>
          </Flex>

          <Flex
            align='center'
            p='1'
            justify='space-between'
            w='250px'
            color='blue.400'
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Flex>
          <Text
            fontSize='lg'
            display='-webkit-box'
            sx={{
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {title}
          </Text>
        </Box>
      </Link>
    </Box>
  );
}
