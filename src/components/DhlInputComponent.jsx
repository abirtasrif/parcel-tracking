import { useState } from "react";

const DhlInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const dhlUrl =
    "https://www.dhl.com/bd-en/home/tracking/tracking-express.html?submit=1&tracking-id=" +
    awb;

  const handleSubmit = () => {
    if (dhlUrl) {
      window.open(dhlUrl, "_blank");
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

export default DhlInputComponent;
