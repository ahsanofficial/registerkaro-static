import Script from 'next/script'
import NextNProgress from "nextjs-progressbar";
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | RegisterKaro</title>
        <meta property="og:description" content="The Official RegisterKaro" />
        <meta name="description" content="The Official RegisterKaro" />
        <link rel="canonical" href="https://www.registerkaro.in" />
        <meta property="og:title" content="Home | RegisterKaro" />
        <meta property="og:description" content="The Official RegisterKaro" />
      </Head>
      <>
        <NextNProgress color="#ffa229" height={5} />
      </>
      <Script id="pagesense" src="https://cdn-in.pagesense.io/js/60026709743/82347cc123444452a9f555d135a7a4c5.js" />
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M9BCLJM"
        height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
    </div>
  );
}