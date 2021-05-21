import { useEffect } from 'react';
import '../styles/index.scss';

export default function App({ Component, pageProps }) {
  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "../node_modules/fullpage.js/dist/fullpage.js";
  //   script.async = true;

  //   document.body.appendChild(script);
  // }, [])
  return <Component style={{height: '100%'}} {...pageProps} />
}
