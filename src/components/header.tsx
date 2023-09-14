/* eslint-disable react/jsx-key */
import React from 'react';

import Logo from './logo';
import Menu from './menu';

const Header = () => (
  <>
    <header className="bg-black-300">
      <div className="min-h-12 flex justify-between gap-2 mx-20">
        <Logo />
        <Menu />
      </div>
    </header>
  </>
);

export default Header;
