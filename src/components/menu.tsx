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
      <Link href="/pdfs/resume.pdf">
        <a className="bg-orange-500 p-2 rounded text-white">Download CV</a>
      </Link>
    </nav>
  </>
);

export default Menu;
