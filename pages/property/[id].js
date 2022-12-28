import { Avatar, Badge, Box, Flex, Text } from '@chakra-ui/react';
import ImageScrollbar from '../../components/ImageScrollbar';
import { fetchAPI, baseURL } from '../../utils/fetchAPI';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import Head from 'next/head';

export default function PropertyDetails({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) {
  console.log(description);

  return (
    <>
      <Head>
        <title>Realtor | {title}</title>
      </Head>
      <Box maxW='container.lg' margin='auto'>
        {photos && <ImageScrollbar photos={photos} />}

        <Box w='full' p={{ base: 3, md: 6 }}>
          <Flex
            paddingTop='2'
            alignItems='center'
            justifyContent='space-between'
          >
            <Flex alignItems='center'>
              <Box paddingRight='3' color='green.400'>
                {isVerified && <GoVerified />}
              </Box>
              <Text fontWeight='bold' fontSize='2xl'>
                AED {millify(price)}
                {rentFrequency && `/${rentFrequency}`}
              </Text>
            </Flex>
            <Box>
              <Avatar size='sm' src={agency?.logo?.url} />
            </Box>
          </Flex>

          <Flex
            alignItems='center'
            p='1'
            justifyContent='space-between'
            w='250px'
            color='blue.400'
          >
            {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{' '}
            <BsGridFill />
          </Flex>

          <Box marginTop='2'>
            <Text fontSize='xl' marginBottom='2' fontWeight='bold'>
              {title}
            </Text>

            <Box
              lineHeight='2'
              color='gray.600'
              fontSize={{ sm: 'lg' }}
              dangerouslySetInnerHTML={{ __html: description }}
              sx={{ ul: { ps: '2rem' } }}
            />
          </Box>

          <Flex
            flexWrap='wrap'
            textTransform='uppercase'
            justifyContent='space-betweent'
          >
            <Flex
              justifyContent='space-between'
              w='400px'
              borderBottom='1px'
              borderColor='gray.100'
              p='3'
            >
              <Text>Type</Text>
              <Text fontWeight='bold'>{type}</Text>
            </Flex>
            <Flex
              justifyContent='space-between'
              w='400px'
              borderBottom='1px'
              borderColor='gray.100'
              p='3'
            >
              <Text>Purpose</Text>
              <Text fontWeight='bold'>{purpose}</Text>
            </Flex>
            {furnishingStatus && (
              <Flex
                justifyContent='space-between'
                w='400px'
                borderBottom='1px'
                borderColor='gray.100'
                p='3'
              >
                <Text>Furnishing Status</Text>
                <Text fontWeight='bold'>{furnishingStatus}</Text>
              </Flex>
            )}
          </Flex>

          <Box>
            {amenities.length > 0 && (
              <Text fontSize='2xl' fontWeight='black' marginTop='5'>
                Amenities
              </Text>
            )}

            <Flex flexWrap='wrap'>
              {amenities.map((item) =>
                item.amenities.map((amenity) => (
                  <Badge
                    key={amenity.text}
                    py={1}
                    px={2}
                    m={1}
                    colorScheme='telegram'
                    fontSize='12px'
                  >
                    {amenity.text}
                  </Badge>
                ))
              )}
            </Flex>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchAPI(
    `https://bayut.p.rapidapi.com/properties/detail?externalID=${id}`
  );

  return { props: { propertyDetails: data } };
}
