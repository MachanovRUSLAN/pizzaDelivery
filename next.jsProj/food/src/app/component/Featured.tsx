import Image from "next/image";
import React from "react";
import { featuredProducts } from "../data";

function Featured() {
  return (
    <div className="w-screen overflow-x-scroll scroll-none  mt-2">
      {/* wrapper */}
      <div className="flex  w-max">
        {featuredProducts.map((item, id) => (
          <div
            key={id}
            className="flex w-screen h-[60vh] justify-around items-center flex-col hover:bg-red-100 transition-all duration-200 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* image container */}
            <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-300">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-contain"
              />
            </div>
            {/* text */}
            <div className="p-2 flex-1 flex justfy-center items-center flex-col xl:gap-4 gap-2">
              <h1 className="text-xl font-semibold text-teal-950">
                {item.title}
              </h1>
              <p className="flex justify-center items-center  text-center text-red-900 xl:text-xl text-sm text-bold">
                {item.desc}
              </p>
              <span className="font-bold text-red-400">{item.price}</span>
              <button className="bg-red-500  text-white xl:p-4 p-1 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;
