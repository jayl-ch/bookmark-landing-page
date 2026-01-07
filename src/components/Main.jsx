import { useState } from "react";

import Home from "./MainContent/Home";
import Features from "./MainContent/Features";

function Main() {
  // tab feature
  const [index, setIndex] = useState(0);

  return (
    <main>
      <Home />
      <Features setIndex={setIndex} index={index} />
    </main>
  );
}

export default Main;
