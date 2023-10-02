import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import Navigation from '@/components/Navigation/Navigation';
import { VideoPlaybackProvider } from '@/components/VideoPlayer/VideoPlaybackProvider';

function App() {
  return (
    <BrowserRouter>
      <VideoPlaybackProvider>
        <main className='app'>
          <div className='fixed inset-0 flex flex-col'>
            <section className='relative flex-1 max-h-[calc(100%-49px)]'>
              <AppRoutes />
            </section>
            <section className='relative flex-none z-20'>
              <Navigation />
            </section>
          </div>
        </main>
      </VideoPlaybackProvider>
    </BrowserRouter>
  );
}

export default App;
