import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='title-logo'>
        <Link to='/'>DCI Converter</Link>
        {/* <span>logo</span> */}
      </div>
      <nav className='nav'>
        {/* <NavLink to='/'>DCI Converter</NavLink> */}
        <NavLink className='test' to='news'>
          News
        </NavLink>
        <NavLink className='test' to='help'>
          Help
        </NavLink>
        <NavLink className='test' to='contact'>
          Contact
        </NavLink>
        <NavLink className='test' to='loginForm'>
          Login
        </NavLink>
      </nav>
    </header>
  );
};
export default Header;
