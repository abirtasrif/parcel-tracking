"use client";
import { useState } from "react";

export default function Finder({ currierCompany }) {
  const [text, setText] = useState("");

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 align-middle">
        <div className="max-w-2xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <h2 className="inline sm:block">
            Track <span className="text-blue-600">{currierCompany}</span> parcel
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
              className="min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Enter AWB Number"
              onChange={(e) => setText(e.target.value)}
            />
            <button
              type="submit"
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Track Parcel
            </button>
          </div>
          <p className="mt-4 text-sm leading-6 text-gray-900">
            Will be opened in another browser tab
          </p>
        </form>
      </div>
    </div>
  );
}
