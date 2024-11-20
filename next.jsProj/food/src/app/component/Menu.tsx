"use client";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links =[
  {id:1, title:"Message", url:"/"},
  {id:2, title:"Menu", url:"/menu"},
  {id:3, title:"Working Hours", url:"/"},
  {id:4, title:"Contact", url:"/"}
]

function Menu() {
  const [open, setOpen] = useState(false);
  const user = false;

  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt=""
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
     {open && <div className="bg-red-600 text-white absolute left-0 top-24 flex justify-center text-3xl gap-3 z-10 flex-col w-full items-center h-[calc(100vh-6rem)]">
       {links.map(item => (
        <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>{item.title}</Link>
       ))}
       {!user?(<Link href="/login"  onClick={()=>setOpen(false)}>Login</Link>)
        : 
        (<Link href="/order"  onClick={()=>setOpen(false)}>Order</Link>)
        }
     <Link href="/cart"  onClick={()=>setOpen(false)}><CartIcon/></Link>
    
      
      </div>}
    </div>

  );
}

export default Menu;
