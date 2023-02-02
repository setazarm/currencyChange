import React, { useContext, useEffect } from 'react';

import { MyContext } from '../context/ContextContainer';
const convertForm = () => {
  const {
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
  } = useContext(MyContext);

  useEffect(() => {
    fetchExchangeRate();
  }, [baseCurrency, targetCurrency]);

  useEffect(() => {
    setResult(amount * exchangeRate);
  }, [amount, exchangeRate]);

  useEffect(() => {
    Currencies();
  }, []);

  return (
    <>
      {username && <p>Welcome {username}</p>}
      <div>
        <h1>Currency Exchange</h1>
        <form>
          <label htmlFor=''>Amount</label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <label htmlFor=''>From</label>
          <select
            value={baseCurrency}
            onChange={(e) => setBaseCurrency(e.target.value)}
          >
            {curr.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <label htmlFor=''>To</label>
          <select
            value={targetCurrency}
            onChange={(e) => setTargetCurrency(e.target.value)}
          >
            {curr.map((c) => {
              return (
                <>
                  <option key={c} value={c}>
                    {c}
                  </option>
                </>
              );
            })}
          </select>
        </form>
        <p>
          {amount} {baseCurrency} = {result} {targetCurrency}
        </p>
      </div>
    </>
  );
};

export default convertForm;
