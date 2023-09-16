/* eslint-disable react/jsx-key */
import React from 'react';

import Header from '../components/header';

const Index = () => {
  return (
    <div className="bg-black-300 h-screen text-white">
      <Header />
      <div className="w-4/5 container mx-auto">
        <p className="text-lg pb-1">Hi, I am</p>
        <p className="text-xl text-orange-500 font-bold">Camila Tigre</p>
        <h1 className="text-3xl font-bold uppercase">
          Software Developer & <br />
          Data Apprentice
        </h1>
      </div>
    </div>
  );
};

export default Index;
