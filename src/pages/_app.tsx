import Layout from "@/components/Layout";
import { ThemeProvider } from "@/components/layout/theme-provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </ThemeProvider>

  )
}
