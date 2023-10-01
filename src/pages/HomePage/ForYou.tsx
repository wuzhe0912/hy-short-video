import { useEffect, useState } from 'react';
import { videoItemType } from '@/interfaces/VideoLinkTypes';

const ForYou = () => {
  const [data, setData] = useState<{ items: videoItemType[] } | null>(null);

  useEffect(() => {
    fetch('http://localhost:3000/for_you_list')
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
              <h2>{item.title}</h2>
              <img src={item.cover} alt={item.title} />
              <a href={item.play_url}>Play</a>
            </li>
          ))}
        </ul>
      ) : (
        'Loading...'
      )}
    </div>
  );
};

export default ForYou;
