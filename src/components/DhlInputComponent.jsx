import { useState } from "react";

const DhlInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const dhlUrl =
    "https://www.dhl.com/bd-en/home/tracking/tracking-express.html?submit=1&tracking-id=" +
    awb;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (dhlUrl) {
      window.open(dhlUrl, "_blank");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <input
        type="text"
        value={awb}
        onChange={handleChange}
        placeholder="Enter AWB number"
        className="input-field"
      />
      <button type="submit" className="button">
        Track
      </button>
    </form>
  );
};

export default DhlInputComponent;
