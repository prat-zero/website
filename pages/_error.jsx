import Head from "next/head";

function Error() {
  window.location.pathname = "/";

  return (
    <div className="font-firacode">
      <Head>
        <title>Pratyush - Error</title>
      </Head>
    </div>
  );
}

export default Error;
