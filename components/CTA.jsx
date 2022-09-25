import { useState } from "react";

function CTA() {
  const [hidden, setHidden] = useState(false);

  return (
    <div className={`bg-black select-none hidden ${hidden ? "" : "lg:block"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:items-center lg:justify-between py-10 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          <span className="block">Seem interested in my work?</span>
          <span className="block text-indigo-600">
            Consider leaving a star on GitHub!
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <a
              href="https://github.com/prat-zero/website"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700"
            >
              LET&apos;S GOOO!!
            </a>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <button
              onClick={() => setHidden(true)}
              className="inline-flex items-center justify-center border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 hover:bg-indigo-50"
            >
              Nevermind
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
