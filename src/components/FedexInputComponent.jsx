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

export default FedexInputComponent;
