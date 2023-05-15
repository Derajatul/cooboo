import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Resep from './pages/Resep';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <header className='container'>
        <Navbar />
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/resep' element={<Resep />} />
      </Routes>

      <footer className='container'>
        <Footer />
      </footer>
    </>
  );
};

export default App;
