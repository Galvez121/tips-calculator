import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);

  const [avgTip, setAvgTip] = useState(0);

  const [avg2, setAvgTip2] = useState(0);

  let tips = (avgTip * 100 + avg2 * 100) / 2;

  function handleBill(payment) {
    setBill(parseFloat(payment));
  }

  return (
    <div>
      <Bill bill={bill} onHandleBill={handleBill} />
      {/* <Tips
        bill={bill}
        yourTip={yourTip}
        friendTip={friendTip}
        onFriendTip={setFriendTip}
        onYourTip={setYourTip}
      /> */}
      <TipsManagement avgTip={avgTip} onAvgTip={setAvgTip}>
        <p>How did you like the service?</p>
      </TipsManagement>

      <TipsManagement avgTip={avg2} onAvgTip={setAvgTip2}>
        <p>How did your friend like the service?</p>
      </TipsManagement>
      <Total bill={bill} tips={tips} />
      <ResetButton
        onBill={setBill}
        onAvgTip={setAvgTip}
        onAvgTip2={setAvgTip2}
      />
    </div>
  );
}

function Bill({ onHandleBill }) {
  return (
    <div>
      <p>How much was the Bill?</p>
      {/* This allow us to read the value in the input and use it.*/}
      <input type="text" onChange={(e) => onHandleBill(e.target.value)} />
    </div>
  );
}

function TipsManagement({ avgTip, onAvgTip, children }) {
  return (
    <div>
      {children}

      {/* Form with a dropdown menu for selecting tip percentage, triggering the handleTip function on change. */}
      <select value={avgTip} onChange={(e) => onAvgTip(Number(e.target.value))}>
        <option value={0}>Dissastisfied (0%)</option>
        <option value={0.05}>It was okay (5%)</option>
        <option value={0.1}>it was good (10%)</option>
        <option value={0.2}>Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tips }) {
  return (
    <div>
      <p>{`Your total is $${
        bill + tips
      } (The bill is ${bill} plus your tip $${parseInt(tips)})`}</p>
    </div>
  );
}

function ResetButton({ onBill, onAvgTip, onAvgTip2 }) {
  function resetButton() {
    onBill(0);
    onAvgTip(0);
    onAvgTip2(0);
  }

  return (
    <div>
      <button onClick={resetButton}>Reset</button>
    </div>
  );
}
