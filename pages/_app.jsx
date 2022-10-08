import NoSSR from "react-no-ssr";
import "../styles/global.css";

function App({ Component, pageProps }) {
  return (
    <NoSSR>
      <Component {...pageProps} />
    </NoSSR>
  );
}

export default App;
