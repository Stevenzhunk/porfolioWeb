import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Logo from '../Favicon/Logo3.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-darkpurple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center w-100 w-full justify-between">
              <div className="flex-shrink-0">
                <img
                  className="h-10 w-25"
                  src={Logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <a
                    href="#Aboutme"
                    className=" hover:bg-gray-700 hover:bg-purpleOpc text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Acerca de Mi
                  </a>

                  

                  <a
                    href="#proyects"
                    className=" hover:bg-gray-700 hover:bg-purpleOpc text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Projectos
                  </a>

                  

                  <a
                    href="#contacme"
                    className="text-gray-300 hover:bg-gray-700  hover:bg-purpleOpc text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contactar
                  </a>

                  <a
                    href="https://github.com/Stevenzhunk?tab=repositories" 
                    target="_blank"
                    className="text-gray-300 hover:bg-gray-700  hover:bg-purpleOpc  bg-purpleOpc text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium flex "
                  >
                    <p className="mr-1 items-center flex">Mi Github</p> 
                    <svg aria-hidden="true" height="24" viewBox="0 0 16 16" version="1.1" width="24" data-view-component="true" className="octicon octicon-mark-github">
                    <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>

                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#Aboutme"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Acerca de Mi
                </a>

                <a
                  href="#proyects"
                  className="text-gray-300 hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projectos
                </a>


                <button
                   href="#contacme"
                  className="text-gray-300 hover:bg-gray-700  hover:bg-purpleOpc text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contactar
                </button>
              </div>
            </div>
          )}
        </Transition>
      </nav>

      {/* aqui comienza la magia de la appi*/}
      
    </div>
  );
}

export default Nav;