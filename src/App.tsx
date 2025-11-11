import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import { Toaster } from 'sonner';

function App() {
  return (
    <div className='min-h-screen bg-background text-foreground flex flex-col'>
      <Header />
      <main className='flex-grow'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <Toaster richColors />
    </div>
  );
}

export default App;