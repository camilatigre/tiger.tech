import React from 'react';

import Link from 'next/link';

const Logo = () => (
  <>
    <div className="flex items-start my-3">
      <img
        className="logo"
        src="https://drive.google.com/uc?id=1chvz5mH1B8c_ceErCygEgCqd6U2w4xT5"
        alt=""
      />
      <Link href="/" className="text-white uppercase font-bold my-2"></Link>
    </div>
  </>
);

export default Logo;
