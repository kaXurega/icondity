import React from 'react';
import Logo from '../components/logo';
import Buttons from '../components/buttons';
import './Header.scss';

const Header = () => {
  return (
    <header>
      <Logo />
      <Buttons />
    </header>
  );
}

export default Header;