import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bars3Icon,
  HomeIcon,
  TruckIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/dhl", label: "DHL" },
  { to: "/fedex", label: "FedEx" },
  { to: "/ups", label: "UPS" },
  { to: "/chronopost", label: "Chronopost" },
];

const linkClasses = ({ isActive }) =>
  `relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
    isActive
      ? "text-white bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/30"
      : "text-white/60 hover:text-white hover:bg-white/[0.06]"
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <nav className="glass-strong border-x-0 border-t-0">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="group flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/40 transition-transform duration-300 group-hover:rotate-6">
              <TruckIcon className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Parcel<span className="text-gradient">Track</span>
            </span>
          </NavLink>

          <div className="hidden items-center gap-1 rounded-full bg-white/[0.04] p-1 ring-1 ring-white/10 sm:flex">
            <NavLink to="/" end className={linkClasses} aria-label="Home">
              <HomeIcon className="h-4 w-4" />
            </NavLink>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={linkClasses}>
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-white/70 transition hover:bg-white/[0.08] hover:text-white sm:hidden"
            aria-label="Toggle menu"
          >
            {open ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="glass-strong mx-4 mt-2 rounded-2xl p-2 shadow-2xl sm:hidden"
          >
            <div className="flex flex-col gap-1">
              <NavLink
                to="/"
                end
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white"
                      : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                  }`
                }
              >
                <HomeIcon className="h-5 w-5" /> Home
              </NavLink>
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium ${
                      isActive
                        ? "bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 text-white"
                        : "text-white/70 hover:bg-white/[0.06] hover:text-white"
                    }`
                  }
                >
                  <TruckIcon className="h-5 w-5" /> {link.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}