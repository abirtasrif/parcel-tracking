import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex gap-5 h-32 bg-slate-300 items-center justify-center text-2xl">
      <Link href="/dhl">DHL</Link>
      <Link href="/fedex">Fedex</Link>
      <Link href="/ups">Ups</Link>
    </div>
  );
};

export default Header;
