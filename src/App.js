import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [enterValue, setEnterValue] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + enterValue);

  function handleReset() {
    setStep((s) => 1);
    setEnterValue((e) => 0);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(+e.target.value)}
        ></input>

        {/* <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => c + 1)}>+</button> */}
      </div>

      <div>
        <button onClick={() => setEnterValue((c) => c - step)}>-</button>
        <input
          type="text"
          value={enterValue}
          onChange={(e) => setEnterValue(+e.target.value)}
        ></input>
        <button onClick={() => setEnterValue((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {enterValue === 0
            ? "Today is "
            : enterValue > 0
            ? `${enterValue} days from today is `
            : `${Math.abs(enterValue)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {enterValue === 0 && step === 1 ? (
        " "
      ) : (
        <div>
          <button onClick={handleReset}> Reset</button>
        </div>
      )}
    </div>
  );
}
