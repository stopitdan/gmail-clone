
import React from 'react';
import Menu from '@mui/icons-material/Menu';

import './Header.css';

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="sidebar-toggle">
        <Menu />
      </div>
      <div className="gmail-icon">Gmail</div>
    </div>
  );
}

export default Header;
