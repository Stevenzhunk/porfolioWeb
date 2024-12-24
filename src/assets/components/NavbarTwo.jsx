import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { UilGithub } from '@iconscout/react-unicons';
import { useDarkMode } from '../provider/Darkmode'; // Asegúrate de corregir la ruta de importación.

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode(); // Usar el hook para acceder al contexto.

  return (
    <div className="">
      <section id="navBar"></section>
      <nav className="pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-end h-16">
            <div className="flex items-center w-100 w-full justify-between">
              <div className="ml-10 flex items-baseline space-x-4 ">
                <span className="text-fullBlack dark:text-white px-3 py-2 rounded-md text-xl font-medium">
                  <span className="text-metal">{'<'}</span>Luis&nbsp;Becerra
                  <span className="text-metal">{'/>'}</span>
                </span>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-4 ">
                  {/* Implementando Darkmode */}
                  <label className="flex cursor-pointer gap-2">
                    {/* Sol Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${
                        darkMode ? 'opacity-0' : 'opacity-100'
                      } transition-opacity duration-300`}
                    >
                      <circle cx="12" cy="12" r="5" />
                      <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>

                    {/* Dark Mode Toggle */}
                    <input
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller hidden"
                      checked={darkMode} // Enlazar estado desde el contexto
                      onChange={toggleDarkMode} // Actualizar estado desde el contexto
                    />

                    {/* Slider */}
                    <span
                      className={`w-12 h-6 rounded-full ${
                        darkMode
                          ? 'bg-purpleOpc'
                          : 'bg-transparent border border-gray-300'
                      } relative transition-all duration-300 ease-in-out flex items-center justify-between p-1`}
                    >
                      <span
                        className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ease-in-out transform ${
                          darkMode ? 'translate-x-6' : 'translate-x-0'
                        }`}
                      ></span>
                    </span>

                    {/* Moon Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`${
                        darkMode ? 'opacity-100' : 'opacity-0'
                      } transition-opacity duration-300`}
                    >
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                  </label>

                  <a
                    href="#Aboutme"
                    className="hover:bg-gray-700 hover:bg-purpleOpc text-fullBlack dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Acerca de Mi
                  </a>

                  <a
                    href="#proyects"
                    className="hover:bg-gray-700 hover:bg-purpleOpc text-fullBlack dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Proyectos
                  </a>

                  <a
                    href="#contacme"
                    className="hover:bg-gray-700 hover:bg-purpleOpc text-fullBlack dark:text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Contactar
                  </a>

                  <a
                    href="https://github.com/Stevenzhunk"
                    target="_blank"
                    className="text-gray-300 hover:bg-gray-700  hover:bg-purpleOpc  bg-purpleOpc text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium flex "
                  >
                    <p className="mr-1 items-center flex">Mi Github</p>
                    <UilGithub className="text-white mx-auto" />
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex text-white md:hidden">
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
                    className={`block h-6 w-6 ${
                      darkMode ? 'text-white' : 'text-purpleOpc'
                    }`}
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
                    className={`block h-6 w-6 ${
                      darkMode ? 'text-white' : 'text-purpleOpc'
                    }`}
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
                  className="hover:bg-gray-700 bg-purpleOpc text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Acerca de Mi
                </a>

                <a
                  href="#proyects"
                  className="text-gray-300 hover:bg-gray-700 bg-purpleOpc text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Proyectos
                </a>

                <a
                  href="#contacme"
                  className="text-gray-300 hover:bg-gray-700 bg-purpleOpc text-white hover:text-white px-3 py-2 rounded-md text-sm font-medium flex"
                >
                  Contactar
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Nav;
