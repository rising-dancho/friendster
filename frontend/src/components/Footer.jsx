import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div style={{ display: 'block' }}>
        <NavLink to="#">About Us</NavLink> | <NavLink to="#">Blog</NavLink>|
        <NavLink to="#">Contact Us</NavLink> |{' '}
        <NavLink to="#">Developers</NavLink> |{' '}
        <NavLink to="#">Share Your Profile</NavLink> |{' '}
        <NavLink to="#">Help</NavLink> | <NavLink to="#">Advertise</NavLink>
        <span style={{ color: '#f26649', position: 'relative', top: '-3px' }}>
          New
        </span>{' '}
        | <NavLink to="#">Terms of Service</NavLink> |{' '}
        <NavLink to="#">Privacy Policy</NavLink>
        <div className="bottom-links">
          Copyright 2002-2009 Friendster, Inc. All rights reserved. U.S. Patent
          No. 7,069,308, 7,117,254, 7,188,153 &amp; 7,451,161
        </div>
      </div>
    </footer>
  );
}

export default Footer;
