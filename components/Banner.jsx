import { Box, Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) {
  return (
    <Flex
      justify='center'
      direction={{ base: 'column', lg: 'row' }}
      align='center'
      m='2rem 0'
    >
      <Image
        src={imageUrl}
        alt='banner_img'
        width={500}
        height={300}
        priority
        style={{ height: '270px', borderRadius: '5px' }}
      />

      <Box
        ps={{ lg: 10 }}
        mt={{ base: 4, lg: 0 }}
        w={{ base: 'full', sm: 'auto' }}
      >
        <Text color='gray.500' fontSize='sm' fontWeight='medium'>
          {purpose}
        </Text>
        <Text fontSize='3xl' fontWeight='bold'>
          {title1} <br /> {title2}
        </Text>

        <Text fontSize='lg' pt={2} color='gray.700'>
          {desc1} <br /> {desc2}
        </Text>
        <Button fontSize='xl' mt={5}>
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
}
