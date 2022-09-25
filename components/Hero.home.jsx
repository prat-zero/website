/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import navigation from "../urls";

function Hero() {
  const audio = new Audio(
    "/audio/Sunflower-(Spider-Man_-Into-the-Spider-Verse)(PagalWorld).mp3"
  );

  audio.loop = true;

  audio.onplay = () => {
    const banner = document.getElementById("banner");
    banner.classList.remove("hidden");

    const pfp = document.getElementById("profilepic");
    pfp.classList.add("animate-spin");
  };

  audio.onpause = () => {
    const banner = document.getElementById("banner");

    if (!banner.classList.contains("hidden")) {
      banner.classList.add("hidden");
    }

    const pfp = document.getElementById("profilepic");
    pfp.classList.remove("animate-spin");
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen overflow-hidden bg-cover bg-no-repeat bg-[url('/image/bg/mobile.jpg')] lg:bg-[url('/image/bg/desktop.webp')] bg-black select-none"
    >
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-20 lg:w-full lg:max-w-2xl lg:pb-20 xl:pb-28">
          <Popover>
            <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
              <nav
                className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                aria-label="Global"
              >
                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                  <div className="flex w-full items-center justify-between md:w-auto">
                    <button>
                      <span className="sr-only">prat-zero</span>
                      <img
                        id="profilepic"
                        alt="Pratyush's GitHub avatar"
                        className="h-12 w-auto rounded-full"
                        onClick={() => {
                          if (audio.paused === true) {
                            audio.play();
                          } else {
                            audio.pause();
                            audio.currentTime = 0;
                          }
                        }}
                        src="https://avatars.githubusercontent.com/u/113883063?v=4"
                      />
                    </button>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="inline-flex items-center justify-center rounded-none  p-2 text-gray-300 hover:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-7 w-7" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-gray-400 hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
              >
                <div className="overflow-hidden rounded-none bg-indigo-600 shadow-xl ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img
                        className="h-12 w-auto rounded-full"
                        src="https://avatars.githubusercontent.com/u/113883063?v=4"
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="inline-flex items-center justify-center rounded-none  p-2 text-gray-300 hover:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300">
                        <span className="sr-only">Close main menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="space-y-1 px-2 pt-4 pb-3">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block rounded-none px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 hover:text-indigo-600"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      key="leaveastar"
                      href="https://github.com/prat-zero/website"
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-none px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-50 hover:text-indigo-600"
                    >
                      Leave a star on GitHub
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 lg:backdrop-blur-[1.5px] rounded-none p-10">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  <span id="expression">*wave*</span> Hi, I am
                </span>{" "}
                <span className="block text-indigo-600 xl:inline">
                  Pratyush
                </span>
              </h1>
              <p className="mt-3 text-base text-white sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                Greetings, traveller. I like to play Minecraft and program
                sometimes. This website feels empty, dosen&apos;t it?
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-none shadow-lg">
                  <a
                    href="https://discord.gg/NYSc2BBBxf"
                    className="flex w-full items-center justify-center rounded-none border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:py-4 md:px-10 md:text-lg"
                  >
                    Join Community
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/prat-zero?tab=repositories"
                    className="flex w-full items-center justify-center rounded-none border border-transparent bg-indigo-100 px-8 py-3 text-base font-medium text-indigo-700 hover:bg-indigo-200 md:py-4 md:px-10 md:text-lg"
                  >
                    GitHub Projects
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Hero;
