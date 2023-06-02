import { useState } from 'react';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className='navbar rounded-b-xl'>
      <div className='flex-1'>
        <a className='btn-ghost btn' href='/'>
          <p className='text-xl font-bold'>Resep Makanan</p>
        </a>
      </div>
      <div className='flex-none'>
        <ul className={`menu ${showMenu ? 'show' : ''} menu-horizontal px-1`}>
          <li>
            <a href='/' className='text-base font-medium'>
              Home
            </a>
          </li>

          <li>
            <a href='/menu' className='text-base font-medium'>
              Menu
            </a>
          </li>

          <li>
            <a href='/favorites' className='text-base font-medium'>
              Favorites
            </a>
          </li>

          <li>
            <a href='/faq' className='text-base font-medium'>
              FAQ
            </a>
          </li>

          <li>
            <a href='/about' className='text-base font-medium'>
              About
            </a>
          </li>
        </ul>
        
        <div className='hamburger-menu' onClick={toggleMenu}>
          <div className={`bar ${showMenu ? 'change' : ''}`}></div>
          <div className={`bar ${showMenu ? 'change' : ''}`}></div>
          <div className={`bar ${showMenu ? 'change' : ''}`}></div>
          <div className={`bar ${showMenu ? 'change' : ''}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
