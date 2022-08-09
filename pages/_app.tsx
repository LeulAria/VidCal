import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/system";
// import "../styles/s.css"
import theme from "configs/theme";
// import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
