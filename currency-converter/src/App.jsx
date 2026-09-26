import { useState } from "react";
import InputBox from "./components/Input";
import useCurrencyInfo from "./Hooks/useCurrencyinfo";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  // 
  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo || {});

  // Convert calculation
  const convert = () => {
    if (currencyInfo && currencyInfo[to]) {
      const numAmount = typeof amount === "number" ? amount : 0;
      setConvertedAmount(Number((numAmount * currencyInfo[to]).toFixed(2)));
    }
  };

  // Swap logic
  const swap = () => {
    const prevFrom = from;
    const prevTo = to;
    const prevAmount = amount;
    const prevConverted = convertedAmount;

    setFrom(prevTo);
    setTo(prevFrom);
    setAmount(prevConverted);
    setConvertedAmount(prevAmount);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-2xl text-white">
        <h1 className="text-xl font-bold text-center mb-6 text-indigo-400">
          Global Currency Converter
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
          className="space-y-3"
        >
          {/* FROM Box */}
          <InputBox
            label="From"
            amount={amount}
            currencyOptions={options}
            selectCurrency={from}
            onCurrencyChange={(curr) => setFrom(curr)}
            onAmountChange={(val) => setAmount(val)}
          />

          {/* SWAP Button */}
          <div className="text-center">
            <button
              type="button"
              onClick={swap}
              className="bg-indigo-600 hover:bg-indigo-500 text-xs px-3 py-1 rounded-full font-semibold transition active:scale-95"
            >
              ⇅ Swap
            </button>
          </div>

          {/* TO Box */}
          <InputBox
            label="To"
            amount={convertedAmount}
            currencyOptions={options}
            selectCurrency={to}
            onCurrencyChange={(curr) => setTo(curr)}
            amountDisable
          />

          {/* Rate Preview */}
          {currencyInfo && currencyInfo[to] && (
            <p className="text-xs text-center text-slate-400">
              Current Rate: 1 {from} ={" "}
              <span className="text-white font-semibold">
                {currencyInfo[to]} {to}
              </span>
            </p>
          )}

          {/* Convert Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2.5 rounded-lg transition active:scale-[0.99]"
          >
            Convert {from} to {to}
          </button>
        </form>
      </div>
    </div>
  );
}