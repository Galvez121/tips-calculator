# Restaurant Bill Calculator App

## Overview

This React application is a simple restaurant bill calculator. It allows users to input the bill amount, select their satisfaction level with the service, and calculates the tip based on the selected satisfaction level. The total amount to be paid is displayed, and there's a reset button (currently not implemented).


### App Component

The `App` component is the main component that orchestrates the entire application. It maintains the state for the bill amount and renders three child components: `Bill`, `Tips`, and `Total`.

```jsx
import { useState } from "react";
import "./index.css";

export default function App() {
  const [bill, setBill] = useState(0);

  const [tip, setTip] = useState(0);

  function handleBill(payment) {
    setBill(parseFloat(payment));
  }

  // Function to handle changes in the tip percentage selected by the user.
  function handleTip(tip) {
    // Calculating the tip amount based on the current bill amount and selected tip percentage.
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
```
### Bill Component
The Bill component handles the input of the bill amount. It receives the current bill amount as a prop (bill) and a function (onHandleBill) to update the bill amount.

```jsx
  function Bill({ bill, onHandleBill }) {
  return (
    <div>
      <p>How much was the Bill?</p>
      <input type="text" onChange={(e) => onHandleBill(e.target.value)} />
    </div>
  );
}
```

### Tips Component
The Tips component allows users to select their satisfaction level, which in turn calculates the tip amount based on the bill amount. The calculated tip is currently logged to the console.


```jsx

function Tips({ bill, onHandleTip }) { // bill is not used yet
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
```

### Total Component
The Total component displays the total amount to be paid and includes a reset button (not yet implemented).

```jsx
function Total({ bill, tip }) {
  return (
    <div>
      <p>{`Your total is $${bill + tip} (Your tip is ${parseInt(tip)})`}</p>
      <button>Reset</button>
    </div>
  );
}
```

### Credits:

Credits to the creator of the React Course that I have been taking:

-User [jonasschmedtmann](https://www.udemy.com/user/jonasschmedtmann/)
