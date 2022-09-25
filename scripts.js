const scripts = () => {
  setTimeout(() => {
    window.oncontextmenu = (e) => e.preventDefault();

    if (window.location.pathname === "/") {
      console.log(
        "%cPsst! Try clicking my avatar on the top left!",
        "background-color: #5555FF; font-size: 1rem"
      );
    }
  }, 1);
};

export default scripts;
