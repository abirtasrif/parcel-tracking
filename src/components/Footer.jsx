import { TruckIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const couriers = [
  { to: "/dhl", label: "DHL" },
  { to: "/fedex", label: "FedEx" },
  { to: "/ups", label: "UPS" },
  { to: "/chronopost", label: "Chronopost" },
];

export default function Footer() {
  return (
    <footer className="glass-strong mt-10 border-x-0 border-b-0">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-lg shadow-violet-500/40">
              <TruckIcon className="h-5 w-5 text-white" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white">
              Parcel<span className="text-gradient">Track</span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {couriers.map((courier) => (
              <Link
                key={courier.to}
                to={courier.to}
                className="text-sm text-white/50 transition-colors duration-300 hover:text-violet-300"
              >
                {courier.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Abir Tasrif Anto. All rights
            reserved.
          </p>
          <p className="mt-1 text-[11px] text-white/25">
            Made with passion &middot; simple parcel tracking for everyone.
          </p>
        </div>
      </div>
    </footer>
  );
}