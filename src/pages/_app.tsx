/* eslint-disable import/order */
import React from 'react';

import { AppProps } from 'next/app';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';
import localFont from 'next/font/local';

const myFont = localFont({ src: './Poppins-Regular.ttf' });

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={myFont.className}>
    <Component {...pageProps} />
  </main>
);

export default MyApp;
