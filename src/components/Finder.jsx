import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
  TruckIcon,
} from "@heroicons/react/24/outline";

export default function Finder({ currierCompany }) {
  const [awb, setAwb] = useState("");
  const [error, setError] = useState("");

  const getUrl = (awbValue) => {
    const clean = awbValue.trim();
    switch (currierCompany) {
      case "DHL":
        return `https://www.dhl.com/bd-en/home/tracking/tracking-express.html?submit=1&tracking-id=${clean}`;
      case "FedEx":
        return `https://www.fedex.com/fedextrack/?action=track&tracknumbers=${clean}&locale=en_us&cntry_code=us`;
      case "Ups":
        return `https://www.ups.com/track?track=yes&trackNums=${clean}&loc=en_US&requester=ST/trackdetails`;
      case "Chronopost":
        return `https://www.chronopost.fr/tracking-no-cms/suivi-page?listeNumerosLT=${clean}&langue=en`;
      default:
        return null;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const url = getUrl(awb);
    if (!url) {
      setError("Unsupported courier company.");
      return;
    }
    if (!awb.trim()) {
      setError("Please enter a valid AWB number.");
      return;
    }
    setError("");
    window.open(url, "_blank");
  };

  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] w-full items-center justify-center overflow-hidden bg-grid px-4 py-20 sm:px-6">
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass relative w-full max-w-2xl rounded-3xl p-8 sm:p-12"
      >
        <div className="mb-8 text-center">
          <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-violet-500 to-fuchsia-500 shadow-xl shadow-violet-500/40">
            <TruckIcon className="h-10 w-10 text-white" />
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Track your{" "}
            <span className="text-gradient">{currierCompany}</span> parcel
          </h2>
          <p className="mt-3 text-sm text-white/50 sm:text-base">
            Enter your Airway Bill (AWB) number and hit track to jump straight
            to live updates.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <MagnifyingGlassIcon className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/30" />
            <input
              id="awb-number"
              name="awb-number"
              type="text"
              autoComplete="off"
              required
              value={awb}
              onChange={(e) => {
                setAwb(e.target.value);
                if (error) setError("");
              }}
              className="w-full rounded-full border border-white/10 bg-white/[0.05] py-3.5 pl-12 pr-4 text-sm text-white shadow-inner outline-none transition-all duration-300 placeholder:text-white/30 focus:border-violet-400/60 focus:bg-white/[0.08] focus:ring-2 focus:ring-violet-500/40 sm:text-base"
              placeholder={`Enter ${currierCompany} AWB number`}
            />
          </div>
          <button
            type="submit"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all duration-300 hover:scale-[1.03] hover:shadow-violet-500/50 active:scale-[0.98] sm:text-base"
          >
            Track now
            <ArrowTopRightOnSquareIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </form>

        {error && (
          <p className="mt-4 rounded-xl bg-rose-500/10 px-4 py-2 text-sm text-rose-300 ring-1 ring-rose-500/20">
            {error}
          </p>
        )}

        <div className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40 sm:text-sm">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
          Live tracking &middot; redirected to the official {currierCompany}{" "}
          portal in a new tab
        </div>
      </motion.div>
    </section>
  );
}