import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // const sheet = new ServerStyleSheet();
    const sheets = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => [
          //   sheet.collectStyles(<App {...props} />),
          sheets.collect(<App {...props} />),
        ],
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        // sheet.getStyleElement(),
        sheets.getStyleElement(),
      ],
    };
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src="https://krychaxp.pl/footer.js"
            data-github="https://github.com/krychaxp/read-text-faster"
            data-link="https://krychaxp.pl"
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
