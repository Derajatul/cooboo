const Navbar = () => {
  return (
    <div className='navbar rounded-b-xl'>
      <div className='flex-1'>
        <a className='btn-ghost btn' href='/'>
         <p className="text-xl font-bold">Hidangan Internasional</p> 
        </a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href='/' className="text-base font-medium">Home</a>
          </li>

          <li>
            <a href='/about' className="text-base font-medium">About</a>
          </li>

          <li>
            <a href='/resep' className="text-base font-medium">Resep</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
