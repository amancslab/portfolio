import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Ethusiastic Dev",
          "Full Stack Dev",
          "React/React Native Dev",
          "UI Developer",
          "HTML/CSS/JS/C# Dev",
        ],
        autoStart: true,
        loop: {Infinity},
        deleteSpeed: 15,
      }}
    />
  );
}

export default Type;
