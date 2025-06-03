import { useEffect, useState } from "react";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = "f88accb345404bac91a63634253005";
  const CITY = "Dhaka";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${CITY}&days=2`
        );
        const data = await response.json();

        setWeatherData(data.current);
        setForecastData(data.forecast);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, []);

  const filterNext16Hours = (forecastDays) => {
    const now = new Date();
    const upcomingHours = [];

    forecastDays.forEach((day) => {
      day.hour.forEach((hour) => {
        const hourTime = new Date(hour.time);
        if (hourTime > now && upcomingHours.length < 15) {
          upcomingHours.push(hour);
        }
      });
    });

    return upcomingHours;
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="text-xl">Loading weather data...</div>
      </div>
    );
  }

  if (!weatherData || !forecastData) {
    return (
      <div className="flex items-center justify-center bg-gray-100">
        <div className="text-xl text-red-500">Failed to load weather data</div>
      </div>
    );
  }

  const next16Hours = filterNext16Hours(forecastData.forecastday);

  return (
    <div className={`pt-4 w-[600px]`}>
      <div className="max-w-4xl mx-auto bg-opacity-30 rounded-xl pt-10 backdrop-blur-sm text-black">
        {/* Current Weather */}
        <div className="text-center mb-8">
          <div className="grid grid-cols-3 mx-auto items-center">
            <div className="text-6xl flex flex-row gap-2">
              <p className="mt-2 text-2xl">{weatherData.condition.text}</p>
              <p> ☀️</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold">{weatherData.temp_c}°C</p>
              <p className="text-sm">Temperature</p>
            </div>
            <div className="p-4">
              <p className="text-3xl font-bold">{weatherData.humidity}%</p>
              <p className="text-sm">Humidity</p>
            </div>
          </div>
        </div>

        {/* Next 16 Hours Forecast */}
        <div className="grid grid-cols-5">
          {next16Hours.map((hour, index) => {
            const isTomorrow =
              new Date(hour.time).getDate() !== new Date().getDate();
            return (
              <div
                key={index}
                className={`py-2  text-center ${
                  isTomorrow
                    ? "bg-cyan-100 bg-opacity-10" // Tomorrow's forecast
                    : "bg-white bg-opacity-50" // Today's forecast
                } border border-emerald-200`}
              >
                <p className="font-light text-sm">
                  {new Date(hour.time).toLocaleTimeString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
                <p className="text-xl my-1">
                  {hour.temp_c}
                  <span className="text-sm">°C</span>
                </p>
                <p className="text-sm">💧{hour.humidity}%</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Weather;
