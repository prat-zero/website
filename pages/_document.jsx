import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <meta name="theme-color" content="blue" />
        <link rel="icon" href="/image/favicon.png" />
      </Head>
      <body>
        <div id="container">
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  );
}

export default Document;
