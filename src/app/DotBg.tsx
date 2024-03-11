import React from "react";
import { TypewriterEffectSmoothDemo } from "./Typewriter";

export function DotBG() {
  return (
    <div className="h-[50rem] w-full dark:bg-white bg-black  dark:bg-dot-black/[0.2] bg-dot-white/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-white bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <TypewriterEffectSmoothDemo />
    </div>
  );
}
