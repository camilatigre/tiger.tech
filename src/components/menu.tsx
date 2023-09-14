import React from 'react';

import Link from 'next/link';

const Menu = () => (
  <>
    <nav className="flex sm:justify-center space-x-4 m-5">
      <Link href="/">
        <a className="text-white p-2">Home</a>
      </Link>
      <Link href="/projects">
        <a className="text-white p-2">Projects</a>
      </Link>
      <a
        href="/files/resume.pdf"
        className="bg-orange-500 p-2 rounded text-white"
        download="CamilaTigre-resume.pdf"
      >
        Download CV
      </a>
    </nav>
  </>
);

export default Menu;
