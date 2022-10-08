function Banner() {
  return (
    <div className="bg-top hidden z-50 bg-indigo-600 shadow-2xl" id="banner">
      <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-6">
        <div className="flex flex-wrap items-center justify-between">
          <div className="flex w-0 flex-1 items-center">
            <p className="ml-3 truncate font-medium text-gray-200">
              <span className="md:hidden">
                Now playing{" "}
                <a
                  href="https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?autoplay=true"
                  className="text-indigo-500"
                >
                  Sunflower
                </a>{" "}
                from Spotify
              </span>
              <span className="hidden md:inline">
                Now playing{" "}
                <a
                  href="https://open.spotify.com/track/3KkXRkHbMCARz0aVfEt68P?autoplay=true"
                  className="text-black"
                >
                  Sunflower
                </a>{" "}
                by{" "}
                <a
                  href="https://open.spotify.com/artist/246dkjvS1zLTtiykXe5h60"
                  className="text-indigo-500"
                >
                  Post Malone
                </a>{" "}
                and{" "}
                <a
                  href="https://open.spotify.com/artist/1zNqQNIdeOUZHb8zbZRFMX"
                  className="text-indigo-500"
                >
                  Swae Lee
                </a>{" "}
                from Spotify
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
