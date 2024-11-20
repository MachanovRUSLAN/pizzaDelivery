import React, { use } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

function Navbar() {

  const user = (false)

  return (
    <div className="h-12 text-red-500 px-4 flex justify-between  items-center border-b-2   border-b-red-500 uppercase md:h-24 lg:px-20 xl:px-40">
      {/* Riht Links */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">HomePage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      {/* logo */}
      <div className="text-xl flex-1 md:font-bold text-center">
        <Link href="/">Massimo</Link>
      </div>
      {/* Mobil menu/ */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* left Links */}
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
      <div className="md:absolute top-3 r-2 lg:static flex items-center gap-1 cursor-pointer bg-orange-500 rounded-md px-1">
      <Image src="/orPhone.webp" className="rounded-xl" alt="" width={20} height={20}/>
      <span className="text-white">123 45 67</span>
      </div>
        {!user ? (<Link href="/Login">Login</Link>): (<Link href="/order">Orders</Link>)}
      
     <CartIcon/>
      </div>
    </div>
  );
}

export default Navbar;
