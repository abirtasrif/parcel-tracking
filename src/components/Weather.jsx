import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CloudIcon, MapPinIcon } from "@heroicons/react/24/outline";

const API_KEY = "f88accb345404bac91a63634253005";
const CITY = "Dhaka";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=2`
        );
        if (!res.ok) throw new Error(`Weather API error: ${res.status}`);
        const data = await res.json();
        setWeatherData(data.current);
        setForecastData(data.forecast);
      } catch (err) {
        console.error("Error fetching weather data:", err);
        setError("Failed to load weather.");
      } finally {
        setLoading(false);
      }
    };
    fetchWeather();
  }, []);

  const getNextHours = (forecastDays) => {
    const now = new Date();
    const hours = [];
    for (const day of forecastDays) {
      for (const hour of day.hour) {
        if (new Date(hour.time) > now) {
          hours.push(hour);
          if (hours.length === 6) return hours;
        }
      }
    }
    return hours;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="glass h-full rounded-3xl p-8 sm:p-10"
    >
      <div className="mb-8 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <h2 className="flex items-center justify-center gap-2 text-2xl font-bold tracking-tight text-white sm:justify-start">
            <CloudIcon className="h-6 w-6 text-sky-300" />
            Weather
          </h2>
          <p className="mt-1 flex items-center justify-center gap-1 text-sm text-white/50 sm:justify-start">
            <MapPinIcon className="h-3.5 w-3.5" />
            {CITY}, Bangladesh
          </p>
        </div>
        {weatherData && (
          <span className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-xs font-medium text-white/60 ring-1 ring-white/10">
            Updated just now
          </span>
        )}
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-sm text-white/40">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-violet-400" />
          <span className="ml-3">Fetching weather data...</span>
        </div>
      ) : error || !weatherData ? (
        <div className="rounded-2xl bg-rose-500/10 px-4 py-12 text-center text-sm text-rose-300 ring-1 ring-rose-500/20">
          {error || "Failed to load weather data."}
        </div>
      ) : (
        <>
          <div className="mb-8 flex flex-col items-center gap-6 rounded-2xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-6 ring-1 ring-white/10 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <img
                src={`https:${weatherData.condition.icon}`}
                alt={weatherData.condition.text}
                className="h-16 w-16 drop-shadow-[0_0_12px_rgba(255,255,255,0.25)]"
              />
              <div>
                <p className="text-4xl font-bold text-white">
                  {weatherData.temp_c}
                  <span className="text-gradient">°C</span>
                </p>
                <p className="mt-1 text-sm capitalize text-white/60">
                  {weatherData.condition.text}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center sm:grid-cols-3">
              {[
                { label: "Feels", value: `${weatherData.feelslike_c}°` },
                { label: "Humidity", value: `${weatherData.humidity}%` },
                { label: "Wind", value: `${weatherData.wind_kph} km/h` },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-semibold text-white">
                    {item.value}
                  </p>
                  <p className="mt-0.5 text-[11px] uppercase tracking-wide text-white/40">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
            Next 6 hours
          </div>
          <div className="grid grid-cols-3 gap-3">
            {getNextHours(forecastData.forecastday).map((hour, index) => (
              <motion.div
                key={hour.time}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="card-hover glass rounded-xl px-2 py-4 text-center"
              >
                <p className="text-xs font-medium text-white/50">
                  {new Date(hour.time).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "2-digit",
                    hour12: true,
                  })}
                </p>
                <img
                  src={`https:${hour.condition.icon}`}
                  alt={hour.condition.text}
                  className="mx-auto my-2 h-9 w-9"
                />
                <p className="text-lg font-semibold text-white">
                  {Math.round(hour.temp_c)}°C
                </p>
                <p className="text-[11px] text-white/40">
                  💧{hour.humidity}%
                </p>
              </motion.div>
            ))}
          </div>
        </>
      )}
    </motion.div>
  );
};

export default Weather;