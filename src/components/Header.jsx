import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex gap-5 h-32 bg-slate-300 items-center justify-center text-2xl">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/dhl">DHL</NavLink>
      <NavLink to="/fedex">Fedex</NavLink>
      <NavLink to="/ups">Ups</NavLink>
    </div>
  );
};

export default Header;
