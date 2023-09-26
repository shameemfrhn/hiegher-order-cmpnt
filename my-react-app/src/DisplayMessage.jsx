import React from 'react';

function DisplayMessage({ logMessage }) {
  return (
    <div>
      <h2>Component with Logger</h2>
      <p>Message from HOC: {logMessage}</p>
    </div>
  );
}

export default DisplayMessage;

