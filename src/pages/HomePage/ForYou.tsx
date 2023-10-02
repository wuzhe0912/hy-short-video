import { useEffect, useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer/VideoPlayer';
import { videoItemType } from '@/interfaces/VideoLinkTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

const ForYou = () => {
  const [data, setData] = useState<{ items: videoItemType[] } | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/for_you_list')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const options: SwiperOptions = {
    direction: 'vertical',
    noSwipingClass: 'swiper-no-swiping',
  };

  return (
    <Swiper {...options} className='h-full z-4'>
      {data?.items.map((item, index: number) => (
        <SwiperSlide key={index} className='z-5'>
          <VideoPlayer videoData={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ForYou;
