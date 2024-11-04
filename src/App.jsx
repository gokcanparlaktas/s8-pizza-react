import { useState } from "react";
import reactLogo from "./assets/react.svg";
import workintech from "/workintech.svg";
import pizza from "./assets/pizza.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a
          href="https://github.com/Workintech/fsweb-s7-challenge-pizza"
          target="_blank"
        >
          <img src={workintech} className="logo" alt="Workintech logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a
          href="https://github.com/gokcanparlaktas/pizzachallenge"
          target="_blank"
        >
          <img src={pizza} className="logo pizza" alt="Pizza logo" />
        </a>
      </div>
      <h1>Workintech + 🍕</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Absolute Acı Pizza sayısı {count}
        </button>
        <p>Your pizza is getting ready, be patient :)</p>
      </div>
      <p className="read-the-docs">
        Click on the Workintech or Pizza logos to learn more
      </p>
    </>
  );
}

export default App;
