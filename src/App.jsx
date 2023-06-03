import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import MealDetail from './pages/MealDetail';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import { FavoriteRecipesProvider } from './favoriteRecipesContext';
import FavoritesPage from './pages/FavoritesPage';
import FAQPage from './pages/FAQPage';

const App = () => {
  return (
    <>
      <header className='container'>
        <Navbar />
      </header>

      <main className='container min-h-screen'>
        <FavoriteRecipesProvider>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/menu' element={<MenuPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='/faq' element={<FAQPage />} />
            <Route path='/:menu' element={<CategoryPage />} />
            <Route path='/:menu/:id' element={<MealDetail />} />
          </Routes>
        </FavoriteRecipesProvider>
      </main>

      <footer className='container footer footer-center pt-6 text-base-content'>
        <Footer />
      </footer>
    </>
  );
};

export default App;
