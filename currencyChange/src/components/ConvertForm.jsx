import React, { useState, useEffect } from "react";
import axios from "axios";

const convertForm= () => {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [exchangeRate, setExchangeRate] = useState(0);
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [curr,setCurr]=useState([]);

  const URL1 =
  `https://v6.exchangerate-api.com/v6/b52fea30890be54c0049aada/latest/USD`;
  const URL2=`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`



useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const res = await axios.get( URL2);
        // let data = res.data;
        setExchangeRate(res.data.rates[targetCurrency]);
      } catch (err) {
        console.log(err);
      }
    };
    fetchExchangeRate();
  },  [baseCurrency, targetCurrency]);



  useEffect(() => {
    setResult(amount * exchangeRate);
  }, [amount, exchangeRate]);


  useEffect(() => {
    const Currencies = async () => {
      try {
        const res = await axios.get(URL1);
        // let data = res.data;
        let currencies=Object.keys(res.data.conversion_rates);
         setCurr(currencies)
      } catch (err) {
        console.log(err);
      }
    };
    Currencies();
  }, []);


  return (
    <div>
      <h1>Currency Exchange</h1>
      <form>
        <label htmlFor="">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      <label htmlFor="">From</label>
        <select
          value={baseCurrency}
          onChange={(e) => setBaseCurrency(e.target.value)}
          
        >
          

          {curr.map((c)=>(
        
          <option key={c} value={c}>{c}</option>))}
        </select>
       <label htmlFor="">To</label>
        <select
          value={targetCurrency}
          onChange={(e) => setTargetCurrency(e.target.value)}
        >
        
             {curr.map((c)=>{
                return(
                    <>
                   
                    <option key={c} value={c}>
                   
                        {c}</option>
                    </>
                )
             })}
               
        </select>
      </form>
      <p>{amount} {baseCurrency}= {result} {targetCurrency}</p>
    </div>
  );
};

export default convertForm;
