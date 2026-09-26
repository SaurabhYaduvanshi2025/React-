import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    if (!currency) return;

    fetch(`https://open.er-api.com/v6/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.rates) {
          setData(data.rates);
        }
      })
      .catch((err) => console.error("Error fetching rates:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;