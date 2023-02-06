import { useReducer } from 'react';

const initialState = {
  language: true,
};
const reducer = (state, action) => {
  switch (action.type) {
    case 'Toggle_language':
      return { ...state, language: !state.language };
    default:
      return state;
  }
};

const Help = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch({ type: 'Toggle_language' });
  };

  return (
    <>
      <section>
        <label class='switch'>
          <input type='checkbox' onClick={handleClick} />
          <span className='slider'></span>
        </label>
        {state.language ? <span>English</span> : <span>German</span>}
      </section>
      {state.language ? (
        <div>
          <p className='first-paragraph'>
            Get help with your money transfers, account and more.
          </p>
          <div className='first-container'>
            <p className='button-help'>Getting started</p>
            <p className='button-help'>Sending money</p>
            <p className='button-help'>Paying for a transfer</p>
            <p className='button-help'>Tracking my transfer</p>
            <p className='button-help'>Changing or cancelling my transfer</p>
            <p className='button-help'>My account</p>
            <p className='button-help'>DCI Converter for Business</p>
            <p className='button-help'>Currency tools</p>
            <p className='button-help'>Terms and policies</p>
          </div>
          <h2>Promoted articles</h2>
          <div className='second-container'>
            <p className='article-help'>How do I track my money transfer?</p>
            <p className='article-help'>
              How do I send money with DCI Converter?
            </p>
            <p className='article-help'>
              Can I make changes to my money transfer?
            </p>
            <p className='article-help'>Which payment methods can I use?</p>
            <p className='article-help'>
              Why was my account restricted or closed?
            </p>
            <p className='article-help'>
              Contact us on live chat, phone or email
            </p>
          </div>
        </div>
      ) : (
        <div>
          <p className='first-paragraph'>
            Erhalten Sie Unterstützung bei Ihren Überweisungen, Ihrem Konto und
            mehr.
          </p>
          <div className='first-container'>
            <p className='button-help'>Erste Schritte</p>
            <p className='button-help'>Geld senden</p>
            <p className='button-help'>Eine Überweisung bezahlen</p>
            <p className='button-help'>Meine Überweisung nachverfolgen</p>
            <p className='button-help'>
              Meine Überweisung ändern oder stornieren
            </p>
            <p className='button-help'>Mein Konto</p>
            <p className='button-help'>DCI Converter für Unternehmen</p>
            <p className='button-help'>Währungstools</p>
            <p className='button-help'>Geschäftsbedingungen und Richtlinien</p>
          </div>
          <h2>Empfohlene Beiträge</h2>
          <div className='second-container'>
            <p className='article-help'>
              Wie kann ich meinen Geldtransfer verfolgen?
            </p>
            <p className='article-help'>
              Wie kann ich Geld mit dem DCI Converter versenden?
            </p>
            <p className='article-help'>
              Kann ich Änderungen an meiner Überweisung vornehmen?
            </p>
            <p className='article-help'>
              Welche Zahlungsmethoden kann ich verwenden?
            </p>
            <p className='article-help'>
              Warum wurde mein Konto eingeschränkt oder gestperrt?
            </p>
            <p className='article-help'>
              Kontaktieren Sie uns per Live Chat, Telefon oder E-Mail
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default Help;
