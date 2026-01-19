import React from 'react';

import Banner from '../Banner';

function LostBanner({ answer, handleRestart }) {
  return (
    <Banner status='sad'>
      <>
        <p>
          Sorry, the correct answer is <strong>{answer}</strong>.
        </p>
        <button className='restart-button' onClick={handleRestart}>
          Click here to restart.
        </button>
      </>
    </Banner>
  );
}

export default LostBanner;
