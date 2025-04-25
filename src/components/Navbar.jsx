import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="absolute z-50 w-full text-center bg-gray-300 shadow"
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto w-full px-4 sm:px-6 lg:px-8 z-30 fixed bg-white`}
          >
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`
                    }
                  >
                    <HomeIcon className="text-gray-900 size-6" />
                  </NavLink>

                  <NavLink
                    to="/dhl"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`
                    }
                  >
                    DHL
                  </NavLink>

                  <NavLink
                    to="/fedex"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`
                    }
                  >
                    FedEx
                  </NavLink>

                  <NavLink
                    to="/ups"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`
                    }
                  >
                    Ups
                  </NavLink>

                  <NavLink
                    to="/chronopost"
                    className={({ isActive }) =>
                      `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                        isActive
                          ? "border-b-2 border-indigo-500 text-gray-900"
                          : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                      }`
                    }
                  >
                    Chronopost
                  </NavLink>
                </div>
              </div>

              <div className="flex items-center -mr-2 sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-end justify-center p-2 text-gray-400 rounded-md hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="pt-16 pb-3 space-y-1">
              <DisclosureButton
                as="a"
                to="/"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-indigo-500 text-gray-900"
                      : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                Home
              </DisclosureButton>
              <DisclosureButton
                as={NavLink}
                to="/dhl"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-indigo-500 text-gray-900"
                      : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                DHL
              </DisclosureButton>
              <DisclosureButton
                as={NavLink}
                to="/fedex"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-indigo-500 text-gray-900"
                      : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                FedEx
              </DisclosureButton>
              <DisclosureButton
                as={NavLink}
                to="/ups"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-indigo-500 text-gray-900"
                      : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                UPS
              </DisclosureButton>
              <DisclosureButton
                as={NavLink}
                to="/chronopost"
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? "border-b-2 border-indigo-500 text-gray-900"
                      : "border-b-2 border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  }`
                }
              >
                Chronopost
              </DisclosureButton>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
