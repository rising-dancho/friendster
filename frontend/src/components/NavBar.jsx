import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { useLogout } from '../hooks/useLogout';

function NavBar() {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const navigate = useNavigate();

  function handleLogout() {
    navigate('/login');
    logout();
  }

  return (
    <nav>
      <div className="topNav">
        <div className="friendster-logo">
          <NavLink to="/">
            <img
              id="f_logo"
              alt="Friendster"
              src="https://web.archive.org/web/20090322215714/http://images.friendster.com/images/friendster_nav_logo.png"
              border="0"
              width="130"
              height="18"
            />
          </NavLink>
        </div>

        <div className="right-nav">
          {user && (
            <>
              <span>{user.email}</span>
              <NavLink className="right-nav-links" to="/settings">
                Settings
              </NavLink>
              <span className="globnav_pipe"> | </span>
              <NavLink
                className="right-nav-links"
                to="#"
                onClick={handleLogout}
              >
                Log Out
              </NavLink>
            </>
          )}
        </div>
      </div>

      <div className="mainNav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <NavLink to="/">Profile</NavLink>
          </li>
          <li>
            <a href="#">Apps</a>
          </li>
          <li>
            <a href="#">Connections</a>
          </li>
          <li>
            <a href="#">Explore</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="#">Classified</a>
          </li>
          <li>
            <a href="#">Find Friends</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
