import { useState } from 'react';
import ForYou from './ForYou';
import Following from './Following';

function Home() {
  const [activeSection, setActiveSection] = useState('ForYou');

  const switchSection = (section: string, event: React.MouseEvent) => {
    event.stopPropagation();
    setActiveSection(section);
  };

  return (
    <div className='home-wrapper relative h-full'>
      <nav className='flex absolute z-50 w-full h-[87px] justify-center items-center'>
        <div
          className={`mr-8 text-xl font-bold ${
            activeSection === 'Following' ? 'active text-amber-900' : ''
          }`}
          onClick={(e) => switchSection('Following', e)}>
          Following
        </div>
        <div
          className={`text-xl font-bold ${
            activeSection === 'ForYou' ? 'active text-amber-900' : ''
          }`}
          onClick={(e) => switchSection('ForYou', e)}>
          For You
        </div>
      </nav>

      <div className='video-content h-full'>
        {activeSection === 'ForYou' ? <ForYou /> : <Following />}
      </div>
    </div>
  );
}

export default Home;
