import { Box, Flex } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Property from '../components/Property';
import { baseURL, fetchAPI } from '../utils/fetchAPI';

export default function Home({ propertyForRent, propertyForSale }) {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />

      <Flex flexWrap='wrap' justify='center'>
        {propertyForRent.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </Flex>

      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />

      <Flex flexWrap='wrap' justify='center'>
        {propertyForSale.map((property) => (
          <Property {...property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForRent = await fetchAPI(
    `${baseURL}?locationExternalIDs=5002,6020&purpose=for-rent&hitsPerPage=6`
  );
  const propertyForSale = await fetchAPI(
    `${baseURL}?locationExternalIDs=5002,6020&purpose=for-sale&hitsPerPage=6`
  );

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits,
    },
  };
}
