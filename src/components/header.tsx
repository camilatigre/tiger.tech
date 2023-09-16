/* eslint-disable react/jsx-key */
import React from 'react';

import Logo from './logo';
import Menu from './menu';

const Header = () => (
  <>
    <header className="w-4/5 container mx-auto">
      <div className="min-h-12 flex justify-between gap-2">
        <Logo />
        <Menu />
      </div>
    </header>
  </>
);

export default Header;
