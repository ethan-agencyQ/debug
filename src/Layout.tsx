import React from 'react';
import Head from 'next/head';
import Script from 'next/script';

const Layout = (): JSX.Element => {
  return (
    <>
      <Head>
        <link rel="stylesheet" type="text/css" href={`/main.css`} />
      </Head>

      {/* root placeholder for the app, which we add components to using route data */}
      <div className="container">Test</div>

      <Script
        src={`/main.js`}
        strategy="lazyOnload"
        onLoad={() => {
          console.log('javascript loaded');
        }}
        onReady={() => {
          console.log('javascript ready');
        }}
        onError={(e: Error) => {
          console.log('javascript error');
          console.log(e);
        }}
      />
    </>
  );
};

export default Layout;
