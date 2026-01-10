import { useState, useEffect } from "react";
import Navbar from "../components/HeaderContent/Navbar";

function Header() {
  // navmenu
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive((prev) => !prev);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <header>
      <Navbar isActive={isActive} toggleIsActive={toggleIsActive} />
    </header>
  );
}

export default Header;
