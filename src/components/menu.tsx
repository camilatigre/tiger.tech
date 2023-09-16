import React from 'react';

import Link from 'next/link';

const Menu = () => (
  <>
    <nav className="flex sm:justify-center space-x-4 m-5">
      <Link href="/" className="text-white p-2">
        Home
      </Link>
      <Link href="/projects" className="text-white p-2">
        Projects
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
