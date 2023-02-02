import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='title-logo'>
        <Link className='title-logo' to='/'>
          DCI Converter
        </Link>
        {/* <span>logo</span> */}
      </div>
      <nav className='nav'>
        {/* <NavLink to='/'>DCI Converter</NavLink> */}
        <NavLink className='navlink' to='news'>
          News
        </NavLink>
        <NavLink className='navlink' to='help'>
          Help
        </NavLink>
        <NavLink className='navlink' to='contact'>
          Contact
        </NavLink>
        <NavLink className='navlink' to='loginForm'>
          Login
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
