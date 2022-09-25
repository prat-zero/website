import NoSSR from "react-no-ssr";
import scripts from "../scripts";
import "../tailwind.css";

function App({ Component, pageProps }) {
  return (
    <NoSSR>
      <Component {...pageProps} />
      {scripts()}
    </NoSSR>
  );
}

export default App;
