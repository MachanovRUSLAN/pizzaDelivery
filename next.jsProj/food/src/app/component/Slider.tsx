"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "always fresh & always cripsy & always best",
    image: "/eating.jpg",
  },
  {
    id: 2,
    title: "we delive your order wherever you are in NY",
    image: "/slide2.jpg",
  },
  {
    id: 3,
    title: "share bes pizza with your family",
    image: "/slide_3.jpg",
  },
];

function Slider() {
  const [slide, setSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row">
      {/* Text container */}

      <div className="text text-red-500 flex justify-center items-center flex-col font-bold gap-8 h-1/2 lg:h-full lg:w-1/2">
        <h1 className="text-2xl xl:text-7xl md:text-4xl text-center">
          {data[slide].title}
        </h1>
        <button className="bg-red-500 text-white py-4 px-8"> Order now</button>
      </div>
      {/* image container */}
      <div className="h-1/2 relative w-full lg:h-full lg:w-1/2">
        <Image
          src={data[slide].image}
          alt=""
          fill
          className="object-cover w-[100%]"
        />
      </div>
    </div>
  );
}

export default Slider;
