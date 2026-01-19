import React from 'react';

import Banner from '../Banner';

function WonBanner({ numOfGuesses, handleRestart }) {
  return (
    <Banner status='happy'>
      <>
        <p>
          <strong>Congratulations!</strong> Got it in{' '}
          <strong>
            {numOfGuesses === 1
              ? '1 guess'
              : `${numOfGuesses} guesses`}
          </strong>
          .
        </p>
        <button className='restart-button' onClick={handleRestart}>
          Click here to restart.
        </button>
      </>
    </Banner>
  );
}

export default WonBanner;
