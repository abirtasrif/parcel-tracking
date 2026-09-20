import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { quotes } from "../data/quotes";

const Quote = () => {
  const [index, setIndex] = useState(() =>
    Math.floor(Math.random() * quotes.length)
  );
  const [timestamp, setTimestamp] = useState(Date.now());

  const pickRandom = () => {
    let next = index;
    while (next === index && quotes.length > 1) {
      next = Math.floor(Math.random() * quotes.length);
    }
    setIndex(next);
    setTimestamp(Date.now());
  };

  const { text, author } = quotes[index];

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="card-hover glass relative overflow-hidden rounded-3xl p-8 sm:p-12">
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-indigo-500/20 blur-3xl" />

        <div className="relative">
          <div className="mb-6 flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1 text-xs font-medium tracking-wide text-white/60 ring-1 ring-white/10">
              <ArrowPathIcon className="h-3.5 w-3.5 text-violet-300" />
              Daily inspiration
            </span>
            <button
              type="button"
              onClick={pickRandom}
              className="group inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-500 hover:via-violet-500 hover:to-fuchsia-500 hover:text-white hover:ring-transparent hover:shadow-lg hover:shadow-violet-500/30"
            >
              <ArrowPathIcon className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180" />
              New quote
            </button>
          </div>

          <div className="flex gap-5">
            <span className="text-gradient text-6xl leading-none sm:text-7xl">
              &ldquo;
            </span>
            <AnimatePresence mode="wait">
              <motion.figure
                key={timestamp}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="min-h-32 flex-1"
              >
                <blockquote className="text-xl font-semibold leading-relaxed tracking-tight text-white sm:text-2xl">
                  {text}
                </blockquote>
                <figcaption className="mt-4">
                  <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-base font-medium text-transparent">
                    &mdash; {author}
                  </span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;