import GlobalStyle from "@/styles/GlobalStyle";
import Sidebar from "./components/Sidebar/Sidebar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
  
  
}