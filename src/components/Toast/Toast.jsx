import { useState, useEffect } from "react";

function Toast({ isFormSubmitted }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isFormSubmitted === true) {
      setIsVisible(true);
      const timer = setTimeout(() => setIsVisible(false), 5000);

      return () => clearTimeout(timer);
    }
  }, [isFormSubmitted]);

  return (
    <div
      className={`duration-300 bg-gray-800 overflow-hidden pt-2 rounded fixed left-1/2 -translate-x-1/2 h-10 ${isVisible ? "top-2 transition-none" : "-top-1/2 transition-[top]"}`}
    >
      <p className="text-gray-50 px-8">Email Sent!</p>
      <div className="w-full h-1 bottom-0 absolute">
        <div
          className={`${isVisible ? "animate-progress block" : "hidden"} bg-green-400 w-full h-full`}
        ></div>
      </div>
    </div>
  );
}

export default Toast;
