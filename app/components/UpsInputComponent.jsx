"use client";
import React, { useState } from "react";

const UpsInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const upsUrl = "https://www.ups.com/track";

  const handleSubmit = () => {
    if (upsUrl) {
      window.open(upsUrl, "_blank");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={awb}
        onChange={handleChange}
        placeholder="Enter AWB number"
        disabled
      />
      <button onClick={handleSubmit}>Track</button>
    </div>
  );
};

export default UpsInputComponent;
