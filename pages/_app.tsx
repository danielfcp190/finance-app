import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyle";
import "../styles/global.css";
import { StoreProvider } from "../utils/Store";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StoreProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Component {...pageProps} />
        </ThemeProvider>
      </StoreProvider>
    </>
  );
}
