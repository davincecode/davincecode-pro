import { Stick } from "next/font/google";
import { HelloParallax } from "./Parallax";
import { WaitList } from "./WaitList";
import { CardHover } from "./CardHover";
import { MultiStepLoader } from "./Loader";
import { Navbar } from "./Navigation";
import Image from "next/image";
import { SparklesPreview } from "./Sparkles";
import { HeroScrollContainer } from "./containerScroll";
import { DotBG } from "./DotBg";

export default function Home() {
  return (
    <>
      <Navbar />
      <DotBG />
      <SparklesPreview />
      <HelloParallax />
      <HeroScrollContainer />
      <WaitList />
      <CardHover />
    </>
  );
}
