function SkydivingCat() {
  return (
    <div
      className="top-0 z-50 fixed hidden min-h-screen min-w-full bg-[url('https://raw.githubusercontent.com/fireship-io/skydiving-cat-parallax/main/src/cat.gif')] bg-no-repeat bg-center"
      id="skydivingcat"
    >
      <button
        className="min-h-screen min-w-full cursor-help"
        onClick={() =>
          document.getElementById("skydivingcat").classList.add("hidden")
        }
      ></button>
    </div>
  );
}

export default SkydivingCat;
