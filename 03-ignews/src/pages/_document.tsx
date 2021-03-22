import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document{
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,900&display=swap" rel="stylesheet" />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}