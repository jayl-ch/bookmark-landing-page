import { useState } from "react";

import Home from "./MainContent/Home";
import Features from "./MainContent/Features";
import Extensions from "./MainContent/Extensions";
import Accordion from "./MainContent/Accordion";

function Main() {
  // tab feature
  const [index, setIndex] = useState(0);

  // accordion
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <main>
      <Home />
      <Features setIndex={setIndex} index={index} />
      <Extensions />
      <Accordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </main>
  );
}

export default Main;
