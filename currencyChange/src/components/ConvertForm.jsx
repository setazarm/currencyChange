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
      {username && (
        <p className='welcome-message'>
          <i className='fa-solid fa-user'></i> Welcome {username}
        </p>
      )}
      <div className='converter-container'>
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

      <h3 className='paragraph-converter'>
        We give you the power of our most up to date, reputable currency
        information and offer you secure, reliable, easy to use products and
        services dedicated to making your life easier.
      </h3>
      <section className='section-1'>
        <h4>Why DCI Converter is the best solution?</h4>
        <p className='paragraph-section'>
          Attention all international travelers and business owners! Are you
          tired of constantly worrying about currency exchange rates while
          traveling abroad or conducting business with international clients?
          Look no further, because we have the solution for you! Introducing our
          brand new currency converter, designed to make your life easier and
          less stressful. With just a few clicks, you can easily convert any
          currency to another, ensuring that you always know the most accurate
          exchange rates. Our user-friendly platform offers instant conversions
          and is updated regularly, so you can rest assured that you're getting
          the latest and most accurate information. Whether you're paying for a
          hotel room in Paris or sending money to a supplier in China, our
          currency converter has got you covered. Don't let currency exchange be
          a headache for you anymore. Try our currency converter today and see
          the difference it can make in your international transactions.
        </p>
      </section>
    </>
  );
};

export default convertForm;
