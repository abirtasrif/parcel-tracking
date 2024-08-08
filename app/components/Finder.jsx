"use client";
import { useState } from "react";

export default function Finder({ currierCompany }) {
  const [awb, setAwb] = useState("");

  const launchSearch = (awb) => {
    let url;

    switch (currierCompany) {
      case "DHL":
        url = `https://www.dhl.com/bd-en/home/tracking/tracking-express.html?submit=1&tracking-id=${awb}`;
        break;
      case "FedEx":
        url = `https://www.fedex.com/fedextrack/?action=track&tracknumbers=${awb}&locale=en_us&cntry_code=us`;
        break;
      case "Ups":
        url = `https://www.ups.com/track?track=yes&trackNums=${awb}&loc=en_US&requester=ST/trackdetails`;
        break;
      default:
        console.error("Unsupported courier company");
        return;
    }
    window.open(url, "_blank");
  };

  const handleClick = (event) => {
    event.preventDefault();
    launchSearch(awb);
  };

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32 flex flex-col">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 items-center">
        <div className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 className="inline sm:block">
            Track <span className="text-indigo-600">{currierCompany} </span>
            parcel
          </h2>
        </div>
        <form className="mt-10 max-w-md">
          <div className="flex gap-x-4">
            <label htmlFor="awb-number" className="sr-only">
              Airway Bill (AWB) Number
            </label>
            <input
              id="awb-number"
              name="awb-number"
              type="text"
              autoComplete="on"
              required
              className="min-w-80 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder={`Enter ${currierCompany} AWB Number`}
              onChange={(e) => setAwb(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleClick}
            >
              Track Parcel
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            Will be opened in another browser tab
          </p>
          <p className="mt-4 text-sm leading-6 text-indigo-400">
            You may change currier provider from top left menu
          </p>
        </form>
      </div>
    </div>
  );
}