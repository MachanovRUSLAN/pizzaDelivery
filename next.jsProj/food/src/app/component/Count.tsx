"use client";
import React from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2024-12-31");

function Count() {
  return (
    <div>
      <Countdown className="lg:text-5xl" date={endingDate} />
    </div>
  );
}

export default Count;
