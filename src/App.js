import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);

  const [tip, setTip] = useState(0);

  function handleBill(payment) {
    setBill(parseFloat(payment));
  }

  function handleTip(tip) {
    setTip(parseFloat(bill * tip));
  }

  return (
    <div>
      <Bill bill={bill} onHandleBill={handleBill} />
      <Tips bill={bill} onHandleTip={handleTip} />
      <Total bill={bill} tip={tip} />
    </div>
  );
}

function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <p>How much was the Bill?</p>
      {/* This allow us to read the value in the input and use it.*/}
      <input type="text" onChange={(e) => onHandleBill(e.target.value)} />
    </div>
  );
}

function Tips({ bill, onHandleTip }) {
  return (
    <div>
      <p>How did you like the service?</p>
      <form>
        {/* Form with a dropdown menu for selecting tip percentage, triggering the handleTip function on change. */}
        <select onChange={(e) => onHandleTip(Number(e.target.value))}>
          <option value={0}>Dissastisfied (0%)</option>
          <option value={0.05}>It was okay (5%)</option>
          <option value={0.1}>it was good (10%)</option>
          <option value={0.2}>Absolutely amazing (20%)</option>
        </select>
      </form>
    </div>
  );
}

function Total({ bill, tip }) {
  return (
    <div>
      <p>{`Your total is $${bill + tip} (Your tip is ${parseInt(tip)})`}</p>
      <button>Reset</button>
    </div>
  );
}
