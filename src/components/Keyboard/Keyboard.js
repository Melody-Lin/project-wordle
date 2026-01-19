import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getLetterStatuses(validatedGuesses) {
  const statuses = {};
  const allLetters = validatedGuesses.flat();

  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statuses[letter];

    if (currentStatus === undefined) {
      statuses[letter] = status;
      return;
    }

    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    if (STATUS_RANKS[status] < STATUS_RANKS[currentStatus]) {
      statuses[letter] = status;
    }
  });

  return statuses;
}

function Keyboard({ validatedGuesses }) {
  const letterStatuses = getLetterStatuses(validatedGuesses);

  return (
    <div className='keyboard'>
      {ROWS.map((row, index) => (
        <div className='keyboard-row' key={index}>
          {row.map((letter, index) => (
            <div
              className={`letter ${letterStatuses[letter] || ''}`}
              key={index}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Keyboard;
