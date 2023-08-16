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

export default FedexInputComponent;
