import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Fotografia Lumen - Capturando Momentos</title>
        <meta name="description" content="Explore o portfólio deslumbrante dos talentosos fotógrafos da Lumen. Capturando momentos que duram uma vida." />
        <meta name="keywords" content="Lumen, fotografia, fotógrafos, portfólio, galeria de fotos, fotografia profissional" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Fotografia Lumen - Capturando Momentos" />
        <meta property="og:description" content="Explore o portfólio deslumbrante dos talentosos fotógrafos da Lumen. Capturando momentos que duram uma vida." />
        <meta property="og:image" content="/images/lumen-og-image.jpg" />
        <meta property="og:url" content="https://www.lumenfotografia.com.br" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fotografia Lumen - Capturando Momentos" />
        <meta name="twitter:description" content="Explore o portfólio deslumbrante dos talentosos fotógrafos da Lumen. Capturando momentos que duram uma vida." />
        <meta name="twitter:image" content="/images/lumen-twitter-image.jpg" />
        <meta name="twitter:site" content="@LumenFotografia" />
        <link rel="canonical" href="https://www.lumenfotografia.com.br" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}
