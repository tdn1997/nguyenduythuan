import "tailwindcss/tailwind.css";
import "../styles/App.css";
import "../styles/defaults.css";
import "../styles/globals.css";
import "../styles/range.css";
import "../styles/reset.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
