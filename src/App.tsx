import { BrowserRouter } from 'react-router-dom';
import AppRoutes from '@/routes/AppRoutes';
import Navigation from '@/components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
