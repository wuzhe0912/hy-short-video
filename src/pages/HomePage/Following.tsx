import { useEffect, useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { videoItemType } from '@/interfaces/VideoLinkTypes';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/pagination';

const Following = () => {
  const [data, setData] = useState<{ items: videoItemType[] } | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/following_list')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  const options: SwiperOptions = {
    direction: 'vertical',
  };

  return (
    <Swiper {...options} className='h-full'>
      {data?.items.map((item, index: number) => (
        <SwiperSlide key={index}>
          <VideoPlayer videoData={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Following;
