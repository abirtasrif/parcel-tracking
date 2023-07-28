import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 h-32 bg-slate-300 items-center justify-center text-2xl">
      <Link to="/">Home</Link>
      <Link to="/dhl">DHL</Link>
      <Link to="/fedex">Fedex</Link>
      <Link to="/ups">Ups</Link>
    </div>
  );
};

export default Header;
