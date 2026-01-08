import { useState } from "react";

import Home from "./MainContent/Home";
import Features from "./MainContent/Features";
import Extensions from "./MainContent/Extensions";

function Main() {
  // tab feature
  const [index, setIndex] = useState(0);

  return (
    <main>
      <Home />
      <Features setIndex={setIndex} index={index} />
      <Extensions />
    </main>
  );
}

export default Main;
