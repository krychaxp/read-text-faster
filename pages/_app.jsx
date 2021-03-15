import "../styles/index.css";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Read Text Faster - Krychaxp</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
