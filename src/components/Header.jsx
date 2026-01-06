import { useState } from "react";
import Navbar from "./HeaderContent/Navbar";

function Header() {
  const [isActive, setIsActive] = useState(false);
  const toggleIsActive = () => setIsActive((prev) => !prev);

  return (
    <header>
      <Navbar isActive={isActive} toggleIsActive={toggleIsActive} />
    </header>
  );
}

export default Header;
