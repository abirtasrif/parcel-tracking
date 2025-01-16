"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, HomeIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ inHome }) {
  const pathname = usePathname();

  return (
    <Disclosure
      as="nav"
      className="absolute z-50 w-full text-center bg-gray-300 shadow"
    >
      {({ open }) => (
        <>
          <div
            className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-30 fixed ${
              inHome ? "bg-blue-700/5  backdrop-blur-3xl" : ""
            }`}
          >
            <div className="flex justify-between h-16">
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
                    <HomeIcon className="text-gray-900 size-6" />
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

                  <Link
                    className={`${
                      pathname === "/Chronopost"
                        ? "inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                        : "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                    }`}
                    href="/chronopost"
                  >
                    Chronopost
                  </Link>
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
                href="/"
                className={`${
                  pathname === "/"
                    ? "block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                    : "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                Home
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/dhl"
                className={`${
                  pathname === "/dhl"
                    ? "block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                    : "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                DHL
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/fedex"
                className={`${
                  pathname === "/fedex"
                    ? "block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                    : "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                FedEx
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/ups"
                className={`${
                  pathname === "/ups"
                    ? "block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                    : "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                }`}
              >
                UPS
              </DisclosureButton>
              <DisclosureButton
                as="a"
                href="/chronopost"
                className={`${
                  pathname === "/chronopost"
                    ? "block py-2 pl-3 pr-4 text-base font-medium text-indigo-700 border-l-4 border-indigo-500 bg-indigo-50"
                    : "block py-2 pl-3 pr-4 text-base font-medium text-gray-500 border-l-4 border-transparent hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                }`}
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
