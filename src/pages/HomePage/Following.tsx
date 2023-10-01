import { useEffect, useState } from 'react';
import VideoPlayer from '@/components/VideoPlayer';
import { videoItemType } from '@/interfaces/VideoLinkTypes';

const Following = () => {
  const [data, setData] = useState<{ items: videoItemType[] } | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/following_list')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.items.map((item, index: number) => (
            <li key={index}>
              <VideoPlayer videoData={item} />
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default Following;
