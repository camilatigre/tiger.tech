/* eslint-disable react/jsx-key */

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../assets/profile.jpeg';
import Header from '../components/header';

const Index = () => {
  return (
    <div className="bg-black-300 text-white h-screen">
      <Header />

      <main className="w-4/5 container mx-auto h-auto flex justify-between">
        <div className="w-2/5">
          <p className="text-md">Hi, I am</p>
          <p className="text-xl text-orange-500 font-bold">Camila Tigre</p>
          <h1 className="text-3xl font-bold uppercase pb-10">
            Software Developer
          </h1>
          <p className="text-sm mb-5">
            Vivamus sed porta tellus. Vivamus eget metus dictum, tincidunt leo
            eu, consequat nibh. Suspendisse vestibulum scelerisque facilisis.
            Pellentesque in porttitor purus. Nulla luctus leo nec sapien rutrum
            finibus. In mollis neque sit amet ipsum euismod, ut mattis massa
            sagittis. Nulla facilisi.
          </p>
          <Link
            href="https://www.linkedin.com/in/camilatigre/"
            className="bg-orange-500 p-2 rounded text-white"
          >
            Contact Me
          </Link>
        </div>
        <div className="w-2/5 profile">
          <Image src={profilePic} alt="profile picture from camila" />
        </div>
      </main>
    </div>
  );
};

export default Index;
