import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoadingProvider from "@/contexts/LoadingContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <Component {...pageProps} />
    </LoadingProvider>
  )
}
