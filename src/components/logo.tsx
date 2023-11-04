import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../assets/logo-white.png';

const Logo = () => (
  <>
    <div className="flex items-start my-3">
      <Image src={logo} alt="logo" width={150} />
      <Link href="/" className="text-white uppercase font-bold my-2"></Link>
    </div>
  </>
);

export default Logo;
