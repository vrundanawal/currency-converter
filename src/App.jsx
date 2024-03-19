import { useState } from "react";
import { InputBox } from "./components/index";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

import "./App.css";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  //used the custom hook and stored into variable
  const currencyInfo = useCurrencyInfo(from);
//used the keys as a values and stored into option variable 
  const options = Object.keys(currencyInfo);//store all the keys

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
      <h1 className="text-3xl bg-orange-500">Currency-app</h1>
    </>
  );
}

export default App;
