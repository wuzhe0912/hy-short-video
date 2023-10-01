import { useState } from 'react';

function Home() {
  const [activeSection, setActiveSection] = useState('ForYou');

  const switchSection = (section: string) => {
    setActiveSection(section);
  };

  return (
    <div className='home-wrapper'>
      <nav className='absolute left-1/2 flex justify-center transform -translate-x-1/2 whitespace-nowrap'>
        <div
          className={`mr-4 ${activeSection === 'Following' ? 'active' : ''}`}
          onClick={() => switchSection('Following')}>
          Following
        </div>
        <div
          className={activeSection === 'ForYou' ? 'active' : ''}
          onClick={() => switchSection('ForYou')}>
          For You
        </div>
      </nav>

      <div className='video-content'>
        {activeSection === 'ForYou' ? (
          <div>
            <h1>For You Content</h1>
          </div>
        ) : (
          <div>
            <h1>Following Content</h1>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
