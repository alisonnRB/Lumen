import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
        <Head>
          <meta charSet="UTF-8" />
        </Head>
      <body className="transition-colors delay-75">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
