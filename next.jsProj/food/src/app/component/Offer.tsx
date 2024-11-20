"use client";
import Image from "next/image";
import React from "react";
import Count from "./Count";

function Offer() {
  return (
    <div className="bg-black flex h-screen flex-col md:flex-row">
      {/* text container  */}
      <div className="flex-1 flex items-center flex-col text-center xl:gap-8 gap-2  justify-center">
        <h1 className="text-white text-2xl font-bold xl:text-6xl">
          Delicious Burger & French Fry
        </h1>
        <p className="text-white xl:text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
          consectetur numquam praesentium natus impedit, ipsa molestiae minus.
          Excepturi, ipsum explicabo inventore ex culpa vitae quibusdam sint ut
          deserunt non soluta.
        </p>
        <Count />
        <button className="bg-red-500 text-white rounded-md xl:py-3 xl:px-6 p-2">
          Order Now
        </button>
      </div>
      {/* image container  */}
      <div className="relative flex-1 w-full">
        <Image src="/burger.png" alt="" fill className="object-contain" />
      </div>
    </div>
  );
}

export default Offer;
