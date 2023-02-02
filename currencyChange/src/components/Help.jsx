import { useReducer } from 'react';

let initialValue = false;

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case 'change_boolean':
      return { initialValue: !state.initialValue };
    default:
      return state;
  }
};

const Help = () => {
  const [state, dispatch] = useReducer(reducer, initialValue);

  const handleClick = () => {
    dispatch({ type: 'change_boolean' });
  };

  return (
    <>
      <p className='button-help'>
        Get help with your money transfers, account and more.
      </p>
      <p className='button-help'>Getting started</p>
      <p className='button-help'>Sending money</p>
      <p className='button-help'>Paying for a transfer</p>
      <p className='button-help'>Tracking my transfer</p>
      <p className='button-help'>Changing or cancelling my transfer</p>
      <p className='button-help'>My accoun</p>
      <p className='button-help'>Xe for Business</p>
      <p className='button-help'>Currency tools</p>
      <p className='button-help'>Terms and policies</p>
      <h2>Promoted articles</h2>
      <p className='article-help'>How do I track my money transfer?</p>
      <p className='article-help'>How do I send money with DCI Converter?</p>
      <p className='article-help'>Can I make changes to my money transfer?</p>
      <p className='article-help'>Which payment methods can I use?</p>
      <button className='toggleButton' onClick={handleClick}>
        PULSA
      </button>
      {/* Glosary? */}
      {state.initialValue ? (
        <div>
          <p className='button-help'>Getting started</p>
          <p className='button-help'>Sending money</p>
        </div>
      ) : (
        <div>
          <p className='button-help'>Empecemos</p>
          <p className='button-help'>Enviar dinero!</p>
        </div>
      )}
    </>
  );
};
export default Help;
