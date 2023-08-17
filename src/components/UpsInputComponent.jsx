import { useState } from "react";

const UpsInputComponent = () => {
  const [awb, setAwb] = useState("");

  const handleChange = (event) => {
    setAwb(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const upsUrl =
      "https://www.ups.com/track?track=yes&trackNums=" +
      awb +
      "&loc=en_US&requester=ST/trackdetails";

    if (upsUrl) {
      window.open(upsUrl, "_blank");
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

export default UpsInputComponent;
