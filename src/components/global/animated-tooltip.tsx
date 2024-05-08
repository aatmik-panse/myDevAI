"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Workflows",
    designation: "Workflows",
    image: "/components/icons/workflows",
  },
  {
    id: 2,
    name: "Home",
    designation: "Product Manager",
    image: "/components/icons/home",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
