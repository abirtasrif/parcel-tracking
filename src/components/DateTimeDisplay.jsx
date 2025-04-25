import React, { useEffect, useState } from "react";

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.getDate().toString().padStart(2, "0");
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(-2);
    return `${day}-${month}-${year}`;
  };

  const getTimeForTimezone = (timezone) => {
    return currentTime.toLocaleTimeString("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const cities = [
    { name: "Dhaka", timezone: "Asia/Dhaka" },
    { name: "Paris", timezone: "Europe/Paris" },
    { name: "Delhi", timezone: "Asia/Kolkata" },
    { name: "Islamabad", timezone: "Asia/Karachi" },
    { name: "Hong Kong", timezone: "Asia/Hong_Kong" },
    { name: "Canada", timezone: "America/Toronto" },
  ];

  return (
    <div className="bg-white p-4 rounded-lg max-w-md mt-20 max-h-[350px] ml-5 time">
      <div className="text-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Today is {formatDate(currentTime)}
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {cities.map((city) => (
          <div
            key={city.name}
            className="bg-gray-50 p-3 rounded-md text-center border-2 border-cyan-400"
          >
            <h3 className="font-medium text-gray-700 mb-1">{city.name}</h3>
            <p className="text-lg font-semibold text-indigo-900">
              {getTimeForTimezone(city.timezone)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DateTimeDisplay;
