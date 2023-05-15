const Navbar = () => {
  return (
    <div className='navbar bg-base-200 rounded-b-xl'>
      <div className='flex-1'>
        <a className='btn-ghost btn text-3xl normal-case'><span className="text-primary">Masakan </span> Rumah</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <a href="/">Home</a>
          </li>
        
          <li>
            <a href="/resep">Resep</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar
