import Head from 'next/head';
import Router from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    Router.push(`/surveys`);
  }, []);

  return (
    <div>
      <Head>
        <title>Next App by @phmc99</title>
        <meta name="description" content="Next App by @phmc99" />
      </Head>
    </div>
  );
}
