import Head from 'next/head';
import React from 'react';
import Header from '@components/Header';

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      <h1>Hey PAPAFAM</h1>
      <Header />
    </div>
  );
};
