import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/HomePage/Home';
import Discover from '@/pages/Discover';

function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/discover' element={<Discover />} />
    </Routes>
  );
}

export default AppRoutes;
