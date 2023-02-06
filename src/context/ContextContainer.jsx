import { useState, useEffect, createContext } from "react";
import axios from "axios";
export const MyContext = createContext();
const ContextContainer = (props) => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [curr, setCurr] = useState([]);

  const [username, setUsername] = useState('');
  const URL1 = `https://v6.exchangerate-api.com/v6/b52fea30890be54c0049aada/latest/USD`;
  const URL2 = `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`;

  const fetchExchangeRate = async () => {
    try {
      const res = await axios.get(URL2);
      // let data = res.data;
      setExchangeRate(res.data.rates[targetCurrency]);
    } catch (err) {
      console.log(err);
    }
  };

  const Currencies = async () => {
    try {
      const res = await axios.get(URL1);
      // let data = res.data;
      let currencies = Object.keys(res.data.conversion_rates);
      setCurr(currencies);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <MyContext.Provider
      value={{
        baseCurrency,
        setBaseCurrency,
        targetCurrency,
        setTargetCurrency,
        exchangeRate,
        amount,
        setAmount,
        result,
        setResult,
        curr,
        fetchExchangeRate,
        Currencies,
        username,
        setUsername
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default ContextContainer;
