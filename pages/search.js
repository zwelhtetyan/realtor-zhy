import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import SearchFilters from '../components/SearchFilters';
import { BsFilter } from 'react-icons/bs';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Property from '../components/Property';
import notFound from '../assets/svgs/notFound.svg';
import { baseURL, fetchAPI } from '../utils/fetchAPI';
import Head from 'next/head';

export default function Search({ properties }) {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Realtor | Search</title>
      </Head>
      <Box>
        <Flex
          cursor='pointer'
          bg='gray.100'
          borderBottom='1px'
          borderColor='gray.200'
          p='2'
          fontWeight='black'
          fontSize='lg'
          justifyContent='center'
          alignItems='center'
          onClick={() => setShowSearch((prev) => !prev)}
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft='2' w='7' as={BsFilter} />
        </Flex>
        {showSearch && <SearchFilters />}

        <Text fontSize='2xl' p='4' fontWeight='bold'>
          Properties {router.query.purpose}
        </Text>

        <Flex flexWrap='wrap' justify='center'>
          {properties.map((property) => (
            <Property {...property} key={property.id} />
          ))}
        </Flex>

        {properties.length === 0 && (
          <Flex
            justifyContent='center'
            alignItems='center'
            flexDirection='column'
            marginTop='5'
            marginBottom='5'
          >
            <Image alt='not_found' src={notFound} />
            <Text fontSize='2xl' marginTop='3'>
              No Results Found !
            </Text>
          </Flex>
        )}
      </Box>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002,6020';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchAPI(
    `${baseURL}?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
