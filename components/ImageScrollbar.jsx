import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';

export default function ImageScrollbar({ photos }) {
  return (
    <Swiper
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
    >
      {photos.map((photo) => (
        <SwiperSlide key={photo.id}>
          <Box h={{ base: '250px', sm: '350px', md: '500px' }}>
            <Image
              src={photo.url}
              placeholder='blur'
              blurDataURL={photo.url}
              alt='slide_img'
              fill
              style={{ borderRadius: '5px' }}
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
