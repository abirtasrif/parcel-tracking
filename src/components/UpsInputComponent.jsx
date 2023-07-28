"use client";
import React, { useState } from "react";

const UpsInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const upsUrl =
    "https://www.ups.com/track?track=yes&trackNums=" +
    awb +
    "&loc=en_US&requester=ST/trackdetails";

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
      />
      <button onClick={handleSubmit}>Track</button>
    </div>
  );
};

export default UpsInputComponent;
