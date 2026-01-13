import { useState } from "react";

import Home from "../components/MainContent/Home";
import Features from "../components/MainContent/Features";
import Extensions from "../components/MainContent/Extensions";
import Accordion from "../components/MainContent/Accordion";
import Contact from "../components/MainContent/Contact";
import Toast from "../components/Toast/Toast";

function Main() {
  // tab feature
  const [index, setIndex] = useState(0);

  // accordion
  const [activeIndex, setActiveIndex] = useState(null);

  // contact form
  const [isValid, setIsValid] = useState(null);

  // form submit
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <main>
      <Toast isFormSubmitted={isFormSubmitted} />
      <Home />
      <Features setIndex={setIndex} index={index} />
      <Extensions />
      <Accordion activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Contact
        isValid={isValid}
        setIsValid={setIsValid}
        setIsFormSubmitted={setIsFormSubmitted}
      />
    </main>
  );
}

export default Main;
