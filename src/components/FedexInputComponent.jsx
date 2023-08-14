import { useState } from "react";

const FedexInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const fedexUrl =
    "https://www.fedex.com/fedextrack/?action=track&tracknumbers=" +
    awb +
    "&locale=en_us&cntry_code=us";

  const handleSubmit = () => {
    if (fedexUrl) {
      window.open(fedexUrl, "_blank");
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        value={awb}
        onChange={handleChange}
        placeholder="Enter AWB number"
        className="input-field"
      />
      <button onClick={handleSubmit} className="button">
        Track
      </button>
    </div>
  );
};

export default FedexInputComponent;
