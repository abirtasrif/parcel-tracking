import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center">
      <Image src="/image.png" alt="parcel" width="80" height="80" />
      <h1>Welcome to Parcel Tracking</h1>
      <p>Please select your service provider from above menu </p>
    </div>
  );
};

export default Homepage;
