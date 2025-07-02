import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { NoMatch } from './pages/NoMatch'
import './index.css';

const Characters = lazy(() => import('characters/App'));
const Detail = lazy(() => import('detail/App'));

export default function App() {
  return (
    <BrowserRouter>      
      <Navbar />
      <Suspense fallback={<div className="p-4">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path='*' element={<NoMatch/>} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
