import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import SearchPage from './pages/SearchPage';
import MealDetail from './pages/MealDetail';
import AboutPage from './pages/AboutPage';

const App = () => {
  return (
    <>
      <header className='container'>
        <Navbar />
      </header>

      <main className='container min-h-screen'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/:category' element={<CategoryPage />} />
          <Route path='/:category/:id' element={<MealDetail />} />
          <Route path='/resep' element={<SearchPage />} />
        </Routes>
      </main>

      <footer className='container'>
        <Footer />
      </footer>
    </>
  );
};

export default App;
