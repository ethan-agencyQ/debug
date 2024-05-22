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

      {process.env.NODE_ENV !== 'production' && <Script src={`/main.js`} strategy="lazyOnload" />}
      {process.env.NODE_ENV === 'production' && <script src="/main.js" async />}
    </>
  );
};

export default Layout;
