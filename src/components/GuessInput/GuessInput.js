import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ guess });
    setGuess('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        type='text'
        id='guess-input'
        value={guess}
        minLength={5}
        maxLength={5}
        pattern='[a-zA-Z]{5}'
        titile='5 letter word'
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
