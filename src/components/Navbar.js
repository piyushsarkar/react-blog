import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">
        <span className="nav-img">😎 Blog</span>
        <span className="nav-title">The Awesome Blog</span>
      </Link>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
