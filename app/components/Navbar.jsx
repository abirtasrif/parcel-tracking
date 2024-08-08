"use client";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 fixed">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  <Link
                    className={`${
                      pathname === "/"
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                      />
                    </svg>
                  </Link>

                  <Link
                    className={`${
                      pathname === "/dhl"
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    href="/dhl"
                  >
                    DHL
                  </Link>

                  <Link
                    className={`${
                      pathname === "/fedex"
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    href="/fedex"
                  >
                    FedEx
                  </Link>

                  <Link
                    className={`${
                      pathname === "/ups"
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    href="/ups"
                  >
                    UPS
                  </Link>
                </div>
              </div>

              <div className="-mr-2 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-end justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-16">
              <Disclosure.Button
                as="a"
                href="/"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/dhl"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                DHL
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/fedex"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                FedEx
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/ups"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                UPS
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
