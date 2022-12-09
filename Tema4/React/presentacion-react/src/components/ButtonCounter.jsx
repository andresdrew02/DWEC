import React from "react";
import { useState } from "react";

function getLetter(i) {
  const arr = ["h", "e", "l", "l", "o"];
  if (arr[i]) {
    return arr[i];
  }
}

export default function ButtonCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <p id="letter"></p>
      <button
        onClick={() => {
          setCounter(counter + 1);
          document.getElementById("letter").innerHTML += getLetter(counter);
        }}
      >
        {counter}
      </button>
    </>
  );
}
