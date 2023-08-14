import FedexInputComponent from "../components/FedexInputComponent";

const Fedex = () => {
  return (
    <div className="fedex h-60">
      <h1 className="heading">
        Track <span>FedEx</span> Parcel
      </h1>
      <FedexInputComponent />
    </div>
  );
};

export default Fedex;
