const scripts = () => {
  setTimeout(() => {
    window.oncontextmenu = (e) => e.preventDefault();

    console.log(
      `%cWelcome to Pratyush's portfolio/website`,
      "background-color: #5555FF; font-size: 1rem; padding: 5px;"
    );

    console.log("Why not try using ctrl + <0 | 9> key combo?");

    /**
     * if (window.location.pathname === "/") {
      console.log(
        "%cPsst! Try clicking my avatar on the top left!",
        "background-color: #5555FF; font-size: 1rem"
      );
    }
     */
  }, 100);
};

export default scripts;
