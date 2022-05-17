import React from "react";

export default function WindowTracker() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    function watchWidth(e) {
      console.log("Setting Up...");
      e.preventDefault();
      setWindowWidth(() => window.innerWidth);
    }

    window.addEventListener("resize", watchWidth);

    return function () {
      console.log("Closing up...");
      window.removeEventListener("resize", watchWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}
