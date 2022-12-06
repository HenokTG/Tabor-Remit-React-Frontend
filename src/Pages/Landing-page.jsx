import React from "react";

import HeroSection from "../Components/HeroSection";
import HowItWorks from "../Components/HowItWorks";
import DownloadApp from "../Components/DownloadApp";
import Promotion from "../Components/Promotion";
import Partners from "../Components/Partners";

function Home() {
  return (
    <div id="landing-page" className="xxs:w-full mt-20">
      <HeroSection />
      <HowItWorks />
      <DownloadApp />
      <Promotion />
      <Partners />
    </div>
  );
}

export default Home;
