/* eslint-disable react/jsx-key */
import React from 'react';

import Link from 'next/link';

// logo, menu, intro, foto, rodape
const Index = () => (
  <>
    <header className="bg-black-300">
      <div className="min-h-12 flex justify-between gap-2 mx-20">
        <div>
          <Link href="/">
            <a className="text-white">Camila Tigre</a>
          </Link>
        </div>

        <nav className="flex sm:justify-center space-x-4">
          {[
            ['Home', '/'],
            ['Projects', '/projects'],
            ['Download CV', ''],
          ].map(([title, url]) => (
            <Link href={url}>
              <a className="text-white hover:text-slate-900">{title}</a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  </>
);

export default Index;
