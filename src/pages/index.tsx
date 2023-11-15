/* eslint-disable react/jsx-key */

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import profilePic from '../assets/profile.png';
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
            {`Driven and results-oriented with a knack for bridging the gap
            between tech and business. I'm a pro at communicating complex
            technical stuff in a way that even non-tech folks can grasp. And
            when it comes to solving problems, I'm always up for the challenge,
            relishing the opportunity to find creative solutions.`}
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
