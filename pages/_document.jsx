import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { ServerStyleSheets } from "@material-ui/core/styles";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet();
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            styledComponentsSheet.collectStyles(
              materialSheets.collect(<App {...props} />)
            ),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          initialProps.styles,
          materialSheets.getStyleElement(),
          styledComponentsSheet.getStyleElement(),
        ],
      };
    } finally {
      styledComponentsSheet.seal();
    }
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
