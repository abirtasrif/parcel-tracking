import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ClockIcon, SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const cities = [
  { name: "Dhaka", timezone: "Asia/Dhaka", flag: "🇧🇩" },
  { name: "Paris", timezone: "Europe/Paris", flag: "🇫🇷" },
  { name: "Delhi", timezone: "Asia/Kolkata", flag: "🇮🇳" },
  { name: "Islamabad", timezone: "Asia/Karachi", flag: "🇵🇰" },
  { name: "Hong Kong", timezone: "Asia/Hong_Kong", flag: "🇭🇰" },
  { name: "Toronto", timezone: "America/Toronto", flag: "🇨🇦" },
];

const DateTimeDisplay = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en-GB", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    }).format(date);

  return (
    <section id="live-info" className="h-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass rounded-3xl p-8 sm:p-10"
      >
        <div className="mb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tight text-white sm:justify-start">
              <ClockIcon className="h-6 w-6 text-violet-300" />
              World Clocks
            </h2>
            <p className="mt-1 text-sm text-white/50">{formatDate(now)}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/60 ring-1 ring-white/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Live updates every second
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {cities.map((city, i) => {
            const time = now.toLocaleTimeString("en-US", {
              timeZone: city.timezone,
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
              hour12: true,
            });
            const hour = Number(
              now.toLocaleTimeString("en-US", {
                timeZone: city.timezone,
                hour: "2-digit",
                hour12: false,
              })
            );
            const isDay = hour >= 6 && hour < 18;

            return (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card-hover glass group rounded-2xl p-5 text-center"
              >
                <div className="mb-3 flex items-center justify-center text-2xl">
                  <span className="drop-shadow">{city.flag}</span>
                </div>
                <h3 className="text-sm font-semibold text-white/80">
                  {city.name}
                </h3>
                <p className="text-gradient mt-2 text-lg font-bold tabular-nums sm:text-xl">
                  {time}
                </p>
                <span
                  className={`mt-2 inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
                    isDay
                      ? "bg-amber-400/10 text-amber-300 ring-1 ring-amber-400/20"
                      : "bg-indigo-400/10 text-indigo-300 ring-1 ring-indigo-400/20"
                  }`}
                >
                  {isDay ? (
                    <SunIcon className="h-3 w-3" />
                  ) : (
                    <MoonIcon className="h-3 w-3" />
                  )}
                  {isDay ? "Day" : "Night"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default DateTimeDisplay;