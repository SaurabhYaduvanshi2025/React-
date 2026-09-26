import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "USD",
  amountDisable = false,
  currencyDisable = false,
}) {
  const amountInputId = useId();

  return (
    <div className="bg-slate-700/80 p-3 rounded-lg flex justify-between items-center text-sm border border-slate-600">
      {/* Left: Label & Number Input */}
      <div className="w-1/2 pr-2">
        <label htmlFor={amountInputId} className="text-slate-400 text-xs block mb-1">
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          placeholder="0"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => {
            const val = e.target.value;
            onAmountChange && onAmountChange(val === "" ? "" : Number(val));
          }}
          className="w-full bg-transparent text-white font-semibold text-lg outline-none"
        />
      </div>

      {/* Right: Currency Dropdown */}
      <div className="w-1/2 flex flex-col items-end pl-2">
        <span className="text-slate-400 text-xs block mb-1">Currency</span>
        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
          className="bg-slate-800 text-white font-medium p-1.5 rounded outline-none border border-slate-600 cursor-pointer max-h-40"
        >
          {currencyOptions.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;